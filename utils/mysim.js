const {
	proto,
	getContentType,
	jidDecode,
	downloadContentFromMessage,
	generateWAMessageFromContent,
	generateForwardMessageContent,
} = require('@whiskeysockets/baileys');
const chalk = require("chalk");
const fs = require("fs");
const Crypto = require("crypto");
const axios = require("axios");
const moment = require("moment-timezone");
const { sizeFormatter } = require("human-readable");
const util = require("util");
const Jimp = require("jimp");
const { defaultMaxListeners } = require("stream");

const decodeJid = (jid) => {
	if (/:\d+@/gi.test(jid)) {
		const decode = jidDecode(jid) || {};
		return (
			(decode.user && decode.server && decode.user + '@' + decode.server) ||
			jid
		).trim();
	} else return jid.trim();
};

exports.smsg = (sock, msg) => {
	if (msg.key) {
		msg.id = msg.key.id;
		msg.isSelf = msg.key.fromMe;
		msg.from = decodeJid(msg.key.remoteJid);
		msg.isGroup = msg.from.endsWith('@g.us');
		msg.sender = msg.isGroup
			? decodeJid(msg.key.participant)
			: msg.isSelf
			? decodeJid(sock.user.id)
			: msg.from;
	}
	if (msg.message) {
		msg.type = getContentType(msg.message);
		if (msg.type === 'ephemeralMessage') {
			msg.message = msg.message[msg.type].message;
			const tipe = Object.keys(msg.message)[0];
			msg.type = tipe;
			if (tipe === 'viewOnceMessage') {
				msg.message = msg.message[msg.type].message;
				msg.type = getContentType(msg.message);
			}
		}
		if (msg.type === 'viewOnceMessage') {
			msg.message = msg.message[msg.type].message;
			msg.type = getContentType(msg.message);
		}

		msg.mentions = msg.message[msg.type]?.contextInfo
			? msg.message[msg.type]?.contextInfo.mentionedJid
			: null;
		try {
			const quoted = msg.message[msg.type]?.contextInfo;
			if (quoted.quotedMessage['ephemeralMessage']) {
				const tipe = Object.keys(
					quoted.quotedMessage.ephemeralMessage.message
				)[0];
				if (tipe === 'viewOnceMessage') {
					msg.quoted = {
						type: 'view_once',
						stanzaId: quoted.stanzaId,
						participant: decodeJid(quoted.participant),
						message:
							quoted.quotedMessage.ephemeralMessage.message.viewOnceMessage
								.message,
					};
				} else {
					msg.quoted = {
						type: 'ephemeral',
						stanzaId: quoted.stanzaId,
						participant: decodeJid(quoted.participant),
						message: quoted.quotedMessage.ephemeralMessage.message,
					};
				}
			} else if (quoted.quotedMessage['viewOnceMessage']) {
				msg.quoted = {
					type: 'view_once',
					stanzaId: quoted.stanzaId,
					participant: decodeJid(quoted.participant),
					message: quoted.quotedMessage.viewOnceMessage.message,
				};
			} else {
				msg.quoted = {
					type: 'normal',
					stanzaId: quoted.stanzaId,
					participant: decodeJid(quoted.participant),
					message: quoted.quotedMessage,
				};
			}
			msg.quoted.isSelf = msg.quoted.participant === decodeJid(sock.user.id);
			msg.quoted.mtype = Object.keys(msg.quoted.message).filter(
				(v) => v.includes('Message') || v.includes('conversation')
			)[0];
			msg.quoted.text =
				msg.quoted.message[msg.quoted.mtype]?.text ||
				msg.quoted.message[msg.quoted.mtype]?.description ||
				msg.quoted.message[msg.quoted.mtype]?.caption ||
				msg.quoted.message[msg.quoted.mtype]?.hydratedTemplate
					?.hydratedContentText ||
				msg.quoted.message[msg.quoted.mtype] ||
				'';
			msg.quoted.key = {
				id: msg.quoted.stanzaId,
				fromMe: msg.quoted.isSelf,
				remoteJid: msg.from,
			};
			msg.quoted.delete = () =>
				sock.sendMessage(msg.from, { delete: msg.quoted.key });
			msg.quoted.download = (pathFile) =>
				downloadMedia(msg.quoted.message, pathFile);
		} catch {
			msg.quoted = null;
		}
		msg.body =
			msg.message?.conversation ||
			msg.message?.[msg.type]?.text ||
			msg.message?.[msg.type]?.caption ||
			(msg.type === 'listResponseMessage' &&
				msg.message?.[msg.type]?.singleSelectReply?.selectedRowId) ||
			(msg.type === 'buttonsResponseMessage' &&
				msg.message?.[msg.type]?.selectedButtonId) ||
			(msg.type === 'templateButtonReplyMessage' &&
				msg.message?.[msg.type]?.selectedId) ||
			'';
		msg.reply = (text) => sock.sendMessage(msg.from, { text }, { quoted: msg });
		msg.download = (pathFile) => downloadMedia(msg.message, pathFile);
		sock.sendButton = (
			jid,
			buttons = [],
			text,
			footer,
			quoted = '',
			options = {}
		) => {
			let buttonMessage = {
				text,
				footer,
				buttons,
				headerType: 2,
				...options,
			};
			sock.sendMessage(jid, buttonMessage, { quoted, ...options });
		};
		sock.copyNForward = async (
			jid,
			message,
			forwardingScore = true,
			options = {}
		) => {
			let vtype;
			if (options.readViewOnce && message.message.viewOnceMessage?.message) {
				vtype = Object.keys(message.message.viewOnceMessage.message)[0];
				delete message.message.viewOnceMessage.message[vtype].viewOnce;
				message.message = proto.Message.fromObject(
					JSON.parse(JSON.stringify(message.message.viewOnceMessage.message))
				);
				message.message[vtype].contextInfo =
					message.message.viewOnceMessage.contextInfo;
			}
			let mtype = getContentType(message.message);
			let m = generateForwardMessageContent(message, !!forwardingScore);
			let ctype = getContentType(m);
			if (
				forwardingScore &&
				typeof forwardingScore === 'number' &&
				forwardingScore > 1
			)
				m[ctype].contextInfo.forwardingScore += forwardingScore;
			m[ctype].contextInfo = {
				...(message.message[mtype].contextInfo || {}),
				...(m[ctype].contextInfo || {}),
			};
			m = generateWAMessageFromContent(jid, m, {
				...options,
				userJid: sock.user.jid,
			});
			await sock.relayMessage(jid, m.message, {
				messageId: m.key.id,
				additionalAttributes: { ...options },
			});
			return m;
		};
		msg.copyNForward = (jid = msg.from, forceForward = false, options = {}) =>
			sock.copyNForward(jid, msg, forceForward, options);
		sock.downloadMediaMessage = async (message) => {
			let mime = (message.msg || message).mimetype || '';
			let messageType = message.mtype
				? message.mtype.replace(/Message/gi, '')
				: mime.split('/')[0];
			const stream = await downloadContentFromMessage(message, messageType);
			let buffer = Buffer.from([]);
			for await (const chunk of stream) {
				buffer = Buffer.concat([buffer, chunk]);
			}
			return buffer;
		};
	}
	return msg;
	/*
	if (!m) return m;
	let M = proto.WebMessageInfo;
	if (m.key) {
		m.id = m.key.id;
		m.isBaileys = m.id.startsWith("BAE5") && m.id.length === 16;
		m.chat = m.key.remoteJid;
		m.fromMe = m.key.fromMe;
		m.isGroup = m.chat.endsWith("@g.us");
		m.sender = sock.decodeJid(
			(m.fromMe && sock.user.id) ||
				m.participant ||
				m.key.participant ||
				m.chat ||
				""
		);
		if (m.isGroup) m.participant = sock.decodeJid(m.key.participant) || "";
	}
	if (m.message) {
		m.mtype = getContentType(m.message);
		m.msg =
			m.mtype == "viewOnceMessage"
				? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)]
				: m.message[m.mtype];
		//m.body = m.message.conversation || m.msg.caption || m.msg.text || (m.mtype == 'listResponseMessage') && m.msg.singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.msg.selectedButtonId || (m.mtype == 'viewOnceMessage') && m.msg.caption || m.text
		let quoted = (m.quoted = m.message?.contextInfo
			? m.message?.contextInfo.quotedMessage
			: null);
		m.mentionedJid = m.message?.contextInfo ? m.message?.contextInfo?.mentionedJid : [];
		if (m.quoted) {
			let type = getContentType(quoted);
			m.quoted = m.quoted[type];
			if (["productMessage"].includes(type)) {
				type = getContentType(m.quoted);
				m.quoted = m.quoted[type];
			}
			if (typeof m.quoted === "string")
				m.quoted = {
					text: m.quoted,
				};
			m.quoted.mtype = type;
			m.quoted.id = m.message.contextInfo.stanzaId;
			m.quoted.chat = m.message.contextInfo.remoteJid || m.chat;
			m.quoted.isBaileys = m.quoted.id
				? m.quoted.id.startsWith("BAE5") && m.quoted.id.length === 16
				: false;
			m.quoted.sender = sock.decodeJid(m.message.contextInfo.participant);
			m.quoted.fromMe = m.quoted.sender === (sock.user && sock.user.id);
			m.quoted.text =
				m.quoted.text ||
				m.quoted.caption ||
				m.quoted.conversation ||
				m.quoted.contentText ||
				m.quoted.selectedDisplayText ||
				m.quoted.title ||
				"";
			m.quoted.mentionedJid = m.message.contextInfo
				? m.messagemessage.contextInfo.mentionedJid
				: [];
			m.getQuotedObj = m.getQuotedMessage = async () => {
				if (!m.quoted.id) return false;
				let q = await store.loadMessage(m.chat, m.quoted.id, sock);
				return exports.smsg(sock, q);
			};
			let vM = (m.quoted.fakeObj = M.fromObject({
				key: {
					remoteJid: m.quoted.chat,
					fromMe: m.quoted.fromMe,
					id: m.quoted.id,
				},
				message: quoted,
				...(m.isGroup ? { participant: m.quoted.sender } : {}),
			}));

			m.quoted.delete = () =>
				sock.sendMessage(m.quoted.chat, { delete: vM.key });

			m.quoted.copyNForward = (jid, forceForward = false, options = {}) =>
				sock.copyNForward(jid, vM, forceForward, options);

			m.quoted.download = () => sock.downloadMediaMessage(m.quoted);
		}
	}
	/*if (m.msg.url) m.download = () => sock.downloadMediaMessage(m.msg)
    m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || ''

	m.reply = (text, chatId = m.chat, options = {}) =>
		Buffer.isBuffer(text)
			? sock.sendMedia(chatId, text, "file", "", m, { ...options })
			: sock.sendText(chatId, text, m, { ...options });

	m.copy = () => exports.smsg(sock, M.fromObject(M.toObject(m)));

	m.copyNForward = (jid = m.chat, forceForward = false, options = {}) =>
		sock.copyNForward(jid, m, forceForward, options);

	return m;*/
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(chalk.redBright(`Update ${__filename}`));
	delete require.cache[file];
	require(file);
});
