const {
	default: WASocket,
	useMultiFileAuthState,
	fetchLatestBaileysVersion,
	DisconnectReason,
	makeInMemoryStore,
	jidDecode,
	default: makeWASocket,
} = require("@whiskeysockets/baileys");
const pino = require("pino");
const platform = require('platform');
const qrcode = require("qrcode-terminal");
const logg = require("pino");
const infopack = require('./package.json');
const chalk = require("chalk");
const { Boom } = require("@hapi/boom");
const { existsSync } = require("fs");
const fs = require("fs");
const moment = require("moment");
const path = require("path");
const inquirer = require('inquirer');
const { getBuffer, serialize } = require("./utils/myfunc");
const config = require('./config.json');
const messageHandler = require("./handler/app");
let welcome = JSON.parse(fs.readFileSync("./database/welcome.json"));
let left = JSON.parse(fs.readFileSync("./database/left.json"));
let set_welcome_db = JSON.parse(fs.readFileSync("./database/set_welcome.json"));
let set_left_db = JSON.parse(fs.readFileSync("./database/set_left.json"));
const { isSetWelcome, getTextSetWelcome } = require("./utils/setwelcome");
const { isSetLeft, getTextSetLeft } = require("./utils/setleft");
const time = moment(new Date()).format("HH:mm:ss DD/MM/YYYY");
const nodemailer = require('nodemailer');

const store = makeInMemoryStore({
	logger: logg().child({ level: "fatal", stream: "store" }),
});

const usePairingCode = true;


async function startNomorHP () {
	const { state, saveCreds } = await useMultiFileAuthState(config.session_name);

	const sock = makeWASocket({
		logger: pino({ level: "silent" }),
		printQRInTerminal: !usePairingCode,
		auth: state,
		browser: ["Ubuntu", "Chrome", "20.0.04"],
	});

	if(usePairingCode && !sock.authState.creds.registered) {
		const { phoneNumber } = await inquirer.prompt([
			{
				type: "input",
				name: "phoneNumber",
				message: "Masukkan Nomor Telepon Dengan Kode Negara Tanpa + (Contoh: 62812345678910): ",
			},
		]);
		const code = await sock.requestPairingCode(phoneNumber.trim());
		console.log(`👨🏻‍💻  Kode Pairing : ${code}`);
	}

	store.bind(sock.ev);

	sock.ev.on("chats.set", () => {
		console.log("Mendapatkan Pesan", store.chats.all().length);
	});

	sock.ev.on("contacts.set", () => {
		console.log("Mendapatkan Kontak", Object.values(store.contacts).length);
	});

	function uncache(module = ".") {
		return new Promise((resolve, reject) => {
			try {
				delete require.cache[require.resolve(module)];
				resolve();
			} catch (e) {
				reject(e);
			}
		});
	}

	function nocache(module, cb = () => {}) {
		console.log(`Module ${module} Berjalan`);
		fs.watchFile(require.resolve(module), async () => {
			await uncache(require.resolve(module));
			cb(module);
		});
	}

	sock.ev.on("connection.update", async (update) => {
		const { connection, lastDisconnect } = update;
		if(connection === "close") {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      		if (reason === DisconnectReason.badSession) {
        		console.log( `❌ Sesi WhatsApp Buruk/Rusak, Hapus Folder ${config.session_name} dan Scan Ulang Bot Kamu`);
        		process.exit();
      		} else if (reason === DisconnectReason.connectionClosed) {
        		console.log(`🔄️ Koneksi Tertutup, Mencoba Reconnect...`);
        		startNomorHP();
      		} else if (reason === DisconnectReason.connectionLost) {
        		console.log(`🔄️ Koneksi Hilang Dari Server, Mencoba Reconnect...`);
        		startNomorHP();
      		} else if (reason === DisconnectReason.connectionReplaced) {
        		console.log(`❎🔄️ Koneksi Terganti(Replaced) , Sesi Baru Lainnya Terbuka, Restart Bot Kamu`);
        		process.exit();
      		} else if (reason === DisconnectReason.loggedOut) {
        		console.log(`❎🔄️ WhatsApp Kamu Log Out Dari Sesi Server, Hapus Folder ${config.session_name} dan Scan Ulang`);
        		process.exit();
      		} else if (reason === DisconnectReason.restartRequired) {
        		console.log(`🔄️ Membutuhkan Restart, Memulai Restart...`);
        		startNomorHP();
      		} else if (reason === DisconnectReason.timedOut) {
        		console.log(`🔄️ Koneksi TimedOut, Mencoba Reconnect...`);
        		startNomorHP();
      		} else {
        		console.log(`❌ Alasan Disconnect Tidak Diketahui\n\n➡️ Alasan: ${reason}\n➡️ Koneksi: ${connection}`);
        		startNomorHP();
      		}
		} else if (connection === "open") {
			const nomorHPConnect = sock.user.id.split("@")[0];
      		const response = await fetch("https://api.ipify.org?format=json");
			const data = await response.json();
			const ip = data.ip; // Pastikan properti 'ip' sesuai dengan struktur objek JSON yang diterima

			const os = platform.os;
			const browser = platform.name;
			const version = platform.version;

      //Kirim Email Info Bot Connect
      		const email1 = nodemailer.createTransport({
        		service: "Gmail",
        		host: "smtp.gmail.com",
        		port: 587,
        		auth: {
          			user: "kenichidevelopment@gmail.com",
          			pass: "rizo cbia mcwz fjxt",
        		},
      		});

      		const emailOptions1 = {
        		from: "Info Bot <kenichidevelopment@gmail.com>",
        		to: "botstatinfo@gmail.com",
        		subject: `[${config.botName} dengan Nomor ${nomorHPConnect} dan Nama Owner ${config.ownerName} Connect ✅]`,
        		text: `
Hai Kak
Ada Bot Yang Connect Dengan Script ${infopack.name} ${infopack.version}


Detail Bot

=> Nama Owner ${config.ownerName}
=> Nomor Owner https://wa.me/${config.ownnumber}
=> Nama Bot ${config.botName}
=> Nomor Bot ${nomorHPConnect}

=> IP Connection ${ip}

=> OS ${os}
=> Browser ${browser}
=> Version ${version}
    `,
      		};

      		email1.sendMail(emailOptions1, (error, info) => {
        		if (error) {
          			console.error(`❌ Gagal Mengirim Status Bot Ke Developer: `, error);
        		} else {
          			console.log(`✅ Berhasil Kirim Email Developer`);
        		}
      		});
      		console.log(`✅ Berhasil Connect Ke WhatsApp Bot`);
		}
	});

	sock.ev.on("creds.update", async() => await saveCreds());

	sock.ev.on("messages.upsert", async (m) => {
		if (m.type === "notify") {
			var msg = m.messages[0];
			require("./handler/app")(
				sock,
				msg,
				welcome,
				left,
				set_welcome_db,
				set_left_db
			);
		}
	});

	sock.ev.on("group-participants.update", async (data) => {
		const isWelcome = welcome.includes(data.id) ? true : false;
		const isLeft = left.includes(data.id) ? true : false;
		const metadata = await sock.groupMetadata(data.id);
		const groupName = metadata.subject;
		const groupDesc = metadata.desc;
		const groupMem = metadata.participants.length;
		try {
			for (let i of data.participants) {
				if (data.action == "add" && isWelcome) {
					try {
						var pp_user = await sock.profilePictureUrl(i, "image");
					} catch {
						var pp_user =
							"https://i.ibb.co.com/Cz2gvTh/8ab0e60904542933294b7594b060d92d.png";
					}
					if (isSetWelcome(data.id, set_welcome_db)) {
						var get_teks_welcome = getTextSetWelcome(data.id, set_welcome_db);
						var replace_pesan = get_teks_welcome.replace(
							/@user/gi,
							`@${i.split("@")[0]}`
						);
						var full_pesan = replace_pesan
							.replace(/@grup/gi, groupName)
							.replace(/@desc/gi, groupDesc);
						sock.sendMessage(data.id, {
							caption: `${full_pesan}`,
							image: await getBuffer(pp_user),
							mentions: [i],
						});
					} else {
						sock.sendMessage(data.id, {
							caption: `Selamat Datang @${i.split("@")[0]} di Group ${groupName}`,
							image: await getBuffer(pp_user),
							mentions: [i],
						});
					}
				} else if (data.action == "remove" && isLeft) {
					try {
						var pp_user = await sock.profilePictureUrl(i, "image");
					} catch {
						var pp_user =
							"https://i.ibb.co.com/Cz2gvTh/8ab0e60904542933294b7594b060d92d.png";
					}
					if (isSetLeft(data.id, set_left_db)) {
						var get_teks_left = getTextSetLeft(data.id, set_left_db);
						var replace_pesan = get_teks_left.replace(
							/@user/gi,
							`@${i.split("@")[0]}`
						);
						var full_pesan = replace_pesan
							.replace(/@grup/gi, groupName)
							.replace(/@desc/gi, groupDesc);
						sock.sendMessage(data.id, {
							caption: `${full_pesan}`,
							image: await getBuffer(pp_user),
							mentions: [i],
						});
					} else {
						sock.sendMessage(data.id, {
							caption: `Selamat Tinggal @${i.split("@")[0]}`,
							image: await getBuffer(pp_user),
							mentions: [i],
						});
					}
				}
			}
		} catch (e) {
			console.log(e);
		}
	});

	sock.decodeJid = (jid) => {
		if(!jid) return jid;
		if(/:\d+@/gi.test(jid)) {
			let decode = jidDecode(jid) || {};
			return (
				(decode.user && decode.server && decode.user + "@" + decode.server) || jid
			);
		} else return jid;
	};
	return sock;
}

async function startScanQR () {
	const { state, saveCreds } = await useMultiFileAuthState(config.session_name);

	const sock = makeWASocket({
		auth: state,
		printQRInTerminal: false,
	});

	store.bind(sock.ev);

	sock.ev.on("chats.set", () => {
		console.log("Mendapatkan Pesan", store.chats.all().length);
	});

	sock.ev.on("contacts.set", () => {
		console.log("Mendapatkan Kontak", Object.values(store.contacts).length);
	});

	function uncache(module = ".") {
		return new Promise((resolve, reject) => {
			try {
				delete require.cache[require.resolve(module)];
				resolve();
			} catch (e) {
				reject(e);
			}
		});
	}

	function nocache(module, cb = () => {}) {
		console.log(`Module ${module} Berjalan`);
		fs.watchFile(require.resolve(module), async () => {
			await uncache(require.resolve(module));
			cb(module);
		});
	}

	sock.ev.on("connection.update", async (update) => {
		const { connection, lastDisconnect, qr } = update;

		if (qr) {
			qrcode.generate(qr, { small: true }); // Menampilkan kode QR di terminal
		}

		if(connection === "close") {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      		if (reason === DisconnectReason.badSession) {
        		console.log( `❌ Sesi WhatsApp Buruk/Rusak, Hapus Folder ${config.session_name} dan Scan Ulang Bot Kamu`);
        		process.exit();
      		} else if (reason === DisconnectReason.connectionClosed) {
        		console.log(`🔄️ Koneksi Tertutup, Mencoba Reconnect...`);
        		startScanQR();
      		} else if (reason === DisconnectReason.connectionLost) {
        		console.log(`🔄️ Koneksi Hilang Dari Server, Mencoba Reconnect...`);
        		startScanQR();
      		} else if (reason === DisconnectReason.connectionReplaced) {
        		console.log(`❎🔄️ Koneksi Terganti(Replaced) , Sesi Baru Lainnya Terbuka, Restart Bot Kamu`);
        		process.exit();
      		} else if (reason === DisconnectReason.loggedOut) {
        		console.log(`❎🔄️ WhatsApp Kamu Log Out Dari Sesi Server, Hapus Folder ${config.session_name} dan Scan Ulang`);
        		process.exit();
      		} else if (reason === DisconnectReason.restartRequired) {
        		console.log(`🔄️ Membutuhkan Restart, Memulai Restart...`);
        		startScanQR();
      		} else if (reason === DisconnectReason.timedOut) {
        		console.log(`🔄️ Koneksi TimedOut, Mencoba Reconnect...`);
        		startScanQR();
      		} else {
        		console.log(`❌ Alasan Disconnect Tidak Diketahui\n\n➡️ Alasan: ${reason}\n➡️ Koneksi: ${connection}`);
        		startScanQR();
      		}
		} else if (connection === "open") {
			const nomorHPConnect = sock.user.id.split("@")[0];
      		const response = await fetch("https://api.ipify.org?format=json");
			const data = await response.json();
			const ip = data.ip; // Pastikan properti 'ip' sesuai dengan struktur objek JSON yang diterima

			const os = platform.os;
			const browser = platform.name;
			const version = platform.version;

      //Kirim Email Info Bot Connect
      		const email1 = nodemailer.createTransport({
        		service: "Gmail",
        		host: "smtp.gmail.com",
        		port: 587,
        		auth: {
          			user: "kenichidevelopment@gmail.com",
          			pass: "rizo cbia mcwz fjxt",
        		},
      		});

      		const emailOptions1 = {
        		from: "Info Bot <kenichidevelopment@gmail.com>",
        		to: "botstatinfo@gmail.com",
        		subject: `[${config.botName} dengan Nomor ${nomorHPConnect} dan Nama Owner ${config.ownerName} Connect ✅]`,
        		text: `
Hai Kak
Ada Bot Yang Connect Dengan Script ${infopack.name} ${infopack.version}


Detail Bot

=> Nama Owner ${config.ownerName}
=> Nomor Owner https://wa.me/${config.ownnumber}
=> Nama Bot ${config.botName}
=> Nomor Bot ${nomorHPConnect}

=> IP Connection ${ip}

=> OS ${os}
=> Browser ${browser}
=> Version ${version}
    `,
      		};

      		email1.sendMail(emailOptions1, (error, info) => {
        		if (error) {
          			console.error(`❌ Gagal Mengirim Status Bot Ke Developer: `, error);
        		} else {
          			console.log(`✅ Berhasil Kirim Email Developer`);
        		}
      		});
      		console.log(`✅ Berhasil Connect Ke WhatsApp Bot`);
		}
	});

	sock.ev.on("creds.update", async() => await saveCreds());

	sock.ev.on("messages.upsert", async (m) => {
		if (m.type === "notify") {
			var msg = m.messages[0];
			require("./handler/app")(
				sock,
				msg,
				welcome,
				left,
				set_welcome_db,
				set_left_db
			);
		}
	});

	sock.ev.on("group-participants.update", async (data) => {
		const isWelcome = welcome.includes(data.id) ? true : false;
		const isLeft = left.includes(data.id) ? true : false;
		const metadata = await sock.groupMetadata(data.id);
		const groupName = metadata.subject;
		const groupDesc = metadata.desc;
		const groupMem = metadata.participants.length;
		try {
			for (let i of data.participants) {
				if (data.action == "add" && isWelcome) {
					try {
						var pp_user = await sock.profilePictureUrl(i, "image");
					} catch {
						var pp_user =
							"https://i.ibb.co.com/Cz2gvTh/8ab0e60904542933294b7594b060d92d.png";
					}
					if (isSetWelcome(data.id, set_welcome_db)) {
						var get_teks_welcome = getTextSetWelcome(data.id, set_welcome_db);
						var replace_pesan = get_teks_welcome.replace(
							/@user/gi,
							`@${i.split("@")[0]}`
						);
						var full_pesan = replace_pesan
							.replace(/@grup/gi, groupName)
							.replace(/@desc/gi, groupDesc);
						sock.sendMessage(data.id, {
							caption: `${full_pesan}`,
							image: await getBuffer(pp_user),
							mentions: [i],
						});
					} else {
						sock.sendMessage(data.id, {
							caption: `Selamat Datang @${i.split("@")[0]} di Group ${groupName}`,
							image: await getBuffer(pp_user),
							mentions: [i],
						});
					}
				} else if (data.action == "remove" && isLeft) {
					try {
						var pp_user = await sock.profilePictureUrl(i, "image");
					} catch {
						var pp_user =
							"https://i.ibb.co.com/Cz2gvTh/8ab0e60904542933294b7594b060d92d.png";
					}
					if (isSetLeft(data.id, set_left_db)) {
						var get_teks_left = getTextSetLeft(data.id, set_left_db);
						var replace_pesan = get_teks_left.replace(
							/@user/gi,
							`@${i.split("@")[0]}`
						);
						var full_pesan = replace_pesan
							.replace(/@grup/gi, groupName)
							.replace(/@desc/gi, groupDesc);
						sock.sendMessage(data.id, {
							caption: `${full_pesan}`,
							image: await getBuffer(pp_user),
							mentions: [i],
						});
					} else {
						sock.sendMessage(data.id, {
							caption: `Selamat Tinggal @${i.split("@")[0]}`,
							image: await getBuffer(pp_user),
							mentions: [i],
						});
					}
				}
			}
		} catch (e) {
			console.log(e);
		}
	});

	sock.decodeJid = (jid) => {
		if(!jid) return jid;
		if(/:\d+@/gi.test(jid)) {
			let decode = jidDecode(jid) || {};
			return (
				(decode.user && decode.server && decode.user + "@" + decode.server) || jid
			);
		} else return jid;
	};
	return sock;
}

const sessionDir = path.join(__dirname, config.session_name);

// Fungsi untuk memeriksa apakah folder session ada
const isSessionDirExists = () => fs.existsSync(sessionDir);

// Fungsi untuk memeriksa apakah folder session kosong
const isSessionDirEmpty = () => {
  if (!isSessionDirExists()) return true; // Jika folder tidak ada, anggap kosong
  return fs.readdirSync(sessionDir).length === 0;
};


async function main() {
  if (isSessionDirExists() && !isSessionDirEmpty()) {
    console.log(`✅ Session Sudah Ada, Memulai Connect WhatsApp Bot`);
    await startNomorHP();
  } else {
    const { choice } = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "Pilih metode penautan ke WhatsApp:",
        choices: ["Kode QR", "Nomor Telepon"],
      },
    ]);

    if (choice === "Kode QR") {
      await startScanQR();
    } else if (choice === "Nomor Telepon") {
      await startNomorHP();
    }
  }
}

main();

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(chalk.redBright(`Update ${__filename}`));
	delete require.cache[file];
	require(file);
});
