const Frieren = require("@xct007/frieren-scraper");
const Axios = require("axios");

exports.head = head = async(url) => {
	const { headers } = await Axios.head(url).catch((e) => e === null || e === void 0 ? void 0 : e.response);
	return headers["content-type"]
}
exports.get = get = async(url, opts) => {
	const { data } = await Axios.get(url, {...opts}).catch((e) => e === null || e === void 0 ? void 0 : e.response);
	return data
}
// We use regexp to detect the link in other word.

const YTRegExp = /(https?:\/\/)?(www\.)?youtu(\.be|be\.com)\/(watch\?v=|embed\/|v|.+\?v=)?([\w-]{11})/g;
const IGRegExp = /(https?:\/\/)?(www\.)?instagram\.com\/p|reel\/([\w-]+)\/?/g;
const TTRegExp = /(https?:\/\/)?(www\.)?tiktok\.com\/@?([\w-]+)\/video\/([\w-]+)\/?/g;
const TTRegExp2 = /(https?:\/\/)?(vt\.)?tiktok\.com\/([\w-]+)\/?/g;
const FBRegExp = /(https?:\/\/)?(www\.)facebook\.com\/([\w-]+)\/videos\/([\w-]+)\/?/g;
// const badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/i // kalo kurang bisa tambah sendiri

exports.handlerLink = async (conn, m) => {
	m.text = m.body ? m.body : ""
	m.chat = m.key.remoteJid
	const text = m.text;
	const prefix = ["!", ".", "/", "=>", ">", "$"]
	if (!text || prefix.some((v) => text.startsWith(v))) {
		return
	}
	try {
		const YT = text.match(YTRegExp) || null;
		const IG = text.match(IGRegExp) || null;
		const TT = text.match(TTRegExp) || text.match(TTRegExp2) || null;
		const FB = text.match(FBRegExp) || null;
		console.log(TT)
		if (YT) {
			const { data } = await Axios.request({
				baseURL: "https://api.itsrose.site",
				url: "/downloader/yt",
				params: {
					apikey: "Rs-FrierenXd-RapiAPI-KEY",
					url: YT
				}
			}).catch((e) => e === null || e === void 0 ? void 0 : e.response);
			if (!data.status) {
				await conn.sendMessage(m.chat, {
					video: {
						url: data.video.url
					},
					caption: `*- Title* : ${data.title}\n*- Duration* :${data.duration}`
				}, { quoted: m })
			}
		}
		if (IG) {
			const data = await Frieren.instagram.v1(IG);
			if (!data.error && Array.isArray(data) && data.length) {
				for await (const urls of data) {
					const type = await head(urls.url);
					if (/image/i.test(type)) {
						await conn.sendMessage(m.chat, {
							image: {
								url: urls.url
							}
						}, { quoted: m })
					}
					if (/video/i.test(type)) {
						await conn.sendMessage(m.chat, {
							video: {
								url: urls.url
							}
						}, { quoted: m })
					}
				}
			}
		}
		if (TT) {
			const data = await Frieren.tiktok.v1(Array.isArray(TT) && TT.length ? TT[0] : TT);
			console.log(data)
			if (!data.error) {
				await conn.sendMessage(m.chat, {
					video: {
						url: data.play
					},
					caption: `*- Author* : ${data.nickname}\n*- Duration* : ${data.duration}`
				}, { quoted: m })
			}
		}
		if (FB) {
			const data = await Frieren.facebook.v1(FB);
			if (!data.error) {
				await conn.sendMessage(m.chat, {
					video: {
						url: data.isHdAvailable ? data.urls[0].hd : data.urls[0].sd
					}
				}, { quoted: m })
			}
		}
	} catch (e) {
		console.log(e)
	}
}
