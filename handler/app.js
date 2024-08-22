//YANG MAU BELI SC NYA YANG GA ENC SILAHKAN CHAT SULTAN 081263670711 DAN YANG TELAH MEMBELI SC INI BAKALAN DAPAT GARANSI 6 BULAN 🔥🔥🔥

"use strict";
const Frieren = require("@xct007/frieren-scraper");

const {
  ownerNumber,
  ownerNumber2,
  ownnumber,
  ownerName,
  pathimg,
  logoafk,
  botName,
  youtubeName,
  youtube,
  lolhuman_apikey,
  weatherapi_apikey,
  google_apikey,
  google_searchengineid,
  merchantapig,
  secretapig,
  owncek,
  footer,
} = require("../config.json");
const config = require("../config.json");
const prov = require("../config.json");
const profit = require("../profit.json");
const {
  WASocket,
  proto,
  getContentType,
  downloadContentFromMessage,
  decodeJid,
  generateWAMessageFromContent,
  generateWAMessage,
  generateWAMessageContent
} = require("@whiskeysockets/baileys");
const axios = require("axios"); //.default;
const { PassThrough } = require("stream");
const moment = require("moment-timezone");
const ffmpeg = require("fluent-ffmpeg");
const FormData = require("form-data");
const Jimp = require("jimp");
const chalk = require("chalk");
const fs = require("fs");
const Math_js = require("mathjs");
const wiki = require("wikipedia");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const ms = require("parse-ms");
const toMS = require("ms");
const os = require('os');
const speed = require('performance-now');
const md5 = require("md5");
const crypto = require("crypto");
const xzons = require("xzons-api");
const parsenik = require("parsenik");
// const hxz = require("hxz-api"); // Unused module
const yts = require("yt-search");
// const xfar = require("xfarr-api"); // Unused module
const request = require("request");
const { exec, spawn } = require("child_process");
let { sizeFormatter } = require("human-readable");
let format = sizeFormatter({
  std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});

// digiflazz
const { digiflazz } = require("../utils/digiflazz.js");

const _sewa = require("../utils/sewa");
const afkg = require("../utils/afk");
const {
  Exif,
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid,
  writeExif,
} = require("../utils/exif");
const { stalkff, stalkml } = require("../utils/stalker");
const exif = new Exif();
const { allMenu, ownmenu } = require("../utils/help");
const {
  isSetWelcome,
  addSetWelcome,
  changeSetWelcome,
  removeSetWelcome,
} = require("../utils/setwelcome");
const {
  isSetLeft,
  addSetLeft,
  removeSetLeft,
  changeSetLeft,
} = require("../utils/setleft");
const {
  addResponList,
  delResponList,
  resetListAll,
  isAlreadyResponList,
  isAlreadyResponListGroup,
  sendResponList,
  updateResponList,
  getDataResponList,
} = require("../utils/respon-list");
const {
  isSetProses,
  addSetProses,
  removeSetProses,
  changeSetProses,
  getTextSetProses,
} = require("../utils/setproses");
const {
  isSetDone,
  addSetDone,
  removeSetDone,
  changeSetDone,
  getTextSetDone,
} = require("../utils/setdone");
const {
  isSetOpen,
  addSetOpen,
  removeSetOpen,
  changeSetOpen,
  getTextSetOpen,
} = require("../utils/setopen");
const {
  isSetClose,
  addSetClose,
  removeSetClose,
  changeSetClose,
  getTextSetClose,
} = require("../utils/setclose");
const {
  isSetBot,
  addSetBot,
  removeSetBot,
  changeSetBot,
  getTextSetBot,
} = require("../utils/setbot");
const {
  getBuffer,
  TelegraPh,
  serialize,
  getRandom,
  fetchJson,
  runtime,
} = require("../utils/myfunc");
const { smsg, parseMention } = require("../utils/mysim");
let mess = config.mess;
//database
let opengc = JSON.parse(fs.readFileSync("./database/opengc.json"));
let set_bot = JSON.parse(fs.readFileSync("./database/set_bot.json"));
let _afks = JSON.parse(fs.readFileSync("./database/afg.json"));
let db_respon_list = JSON.parse(
  fs.readFileSync("./database/list-message.json")
);
let sewa = JSON.parse(fs.readFileSync("./database/sewa.json"));
let set_proses = JSON.parse(fs.readFileSync("./database/set_proses.json"));
let set_done = JSON.parse(fs.readFileSync("./database/set_done.json"));
let set_open = JSON.parse(fs.readFileSync("./database/set_open.json"));
let set_close = JSON.parse(fs.readFileSync("./database/set_close.json"));
let antitoxic = JSON.parse(fs.readFileSync("./database/antitoxic.json"));
let antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"));
let antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
let pricelist = JSON.parse(fs.readFileSync("./database/pricelist.json"));
let antiwame = JSON.parse(fs.readFileSync("./database/antiwame.json"));
let antilinkall = JSON.parse(fs.readFileSync("./database/antilinkall.json"));
let downloadfitur = JSON.parse(fs.readFileSync("./database/download.json"));
let mute = JSON.parse(fs.readFileSync("./database/mute.json"));
let premium = JSON.parse(fs.readFileSync("./database/premium.json"));
let limit = JSON.parse(fs.readFileSync("./database/limit.json"));
let glimit = JSON.parse(fs.readFileSync("./database/glimit.json"));
const blnc = require("../db/balance");
let balanceDB = JSON.parse(fs.readFileSync("./db/balance.json"));
const digidaw = "./database/";
const _prem = require("../premium.js");
const topupPath = "./db/topup/";
const depositPath = "./db/deposit/";
const orderPath = "./db/order/";
//END
/**
 *
 * @param { string } text
 * @param { string } color
 */
const color = (text, color) => {
  return !color ? chalk.green(text) : chalk.keyword(color)(text);
};

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

/**
 * @param {WASocket} sock
 * @param {proto.IWebMessageInfo} msg
 */
// Bandwidth
async function checkBandwidth() {
  let ind = 0;
  let out = 0;
  for (let i of await require("node-os-utils").netstat.stats()) {
    ind += parseInt(i.inputBytes);
    out += parseInt(i.outputBytes);
  }
  return {
    download: format(ind),
    upload: format(out),
  };
}

moment.tz.setDefault("Asia/Jakarta").locale("id");

const { handlerLink, get, head } = require("./handlerLink.js");
const { join } = require("path");
const { error } = require("console");
const DefaultPath = join(__dirname, "user-data.json");
if (!fs.existsSync(DefaultPath)) {
  fs.writeFileSync(DefaultPath, JSON.stringify({}));
}
function _db() {
  return JSON.parse(fs.readFileSync(DefaultPath, "utf-8"));
}
let db = _db();

let deleteChatConversationRunning = false;
function deleteChatConversation(sock) {
  if (deleteChatConversationRunning) {
    return;
  }
  deleteChatConversationRunning = true;
  setTimeout(() => {
    Object.keys(db).forEach((key) => {
      db[key]["limit"] = 12;
    });
    delete sock["openai"];
    deleteChatConversationRunning = false;
  }, 24 * 60 * 60 * 1000);
}
let _writeDBRunning = false;
function _writeDB() {
  if (_writeDBRunning) {
    return;
  }
  _writeDBRunning = true;
  setInterval(() => {
    fs.writeFileSync(DefaultPath, JSON.stringify(db));
  }, 60 * 1000);
}
_writeDB();
function database_() {
  function reduceLimit(user, value = 1) {
    if (db[user]) {
      db[user]["limit"] -= 1;
    }
  }
  function addUser(user) {
    if (!db[user]) {
      db[user] = {
        limit: 12,
      };
    }
  }
  return {
    addUser,
    reduceLimit,
  };
}

module.exports = async (
  sock,
  msg,
  welcome,
  left,
  set_welcome_db,
  set_left_db
) => {
  const extendedText = getContentType;
  const setya = sock;
  const gaya = "```";
  const gy = "```";
  let m = serialize(sock, msg);
  let rm = smsg(sock, msg);
  handlerLink(sock, msg);
  try {
    let thumb = fs.readFileSync(pathimg);
    let thum = fs.readFileSync(pathimg);
    let thumafk = fs.readFileSync(logoafk);
    const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const tanggal = moment().tz("Asia/Jakarta").format("dddd, ll");
    let timestamp = `${time}${tanggal}`;
    const jam = moment().format("HH:mm:ss z");
    let dt = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a");
    var fildt =
      dt == "pagi"
        ? dt + "🌝"
        : dt == "siang"
        ? dt + "🌞"
        : dt == "sore"
        ? dt + "🌝"
        : dt + "🌚";
    const ucapanWaktu = fildt.charAt(0).toUpperCase() + fildt.slice(1);
    if (msg.key && msg.key.remoteJid === "status@broadcast") return;
    if (!msg.message) return;

    const quoted = m.quoted ? m.quoted : m;
    const type = getContentType(msg.message);
    const quotedType =
      getContentType(
        msg.message?.extendedTextMessage?.contextInfo?.quotedMessage
      ) || null;
    if (type == "ephemeralMessage") {
      msg.message = msg.message.ephemeralMessage.message;
      msg.message = msg.message.ephemeralMessage.message.viewOnceMessage;
    }
    if (type == "viewOnceMessage") {
      msg.message = msg.message.viewOnceMessage.message;
    }

    const botId = sock.user.id.includes(":")
      ? sock.user.id.split(":")[0] + "@s.whatsapp.net"
      : sock.user.id;

    const botNumber = await sock.decodeJid(sock.user.id);
    const from = msg.key.remoteJid;
    const rizkyy =
      type === "conversation" && msg.message.conversation
        ? msg.message.conversation
        : type == "imageMessage" && msg.message.imageMessage.caption
        ? msg.message.imageMessage.caption
        : type == "documentMessage" && msg.message.documentMessage.caption
        ? msg.message.documentMessage.caption
        : type == "videoMessage" && msg.message.videoMessage.caption
        ? msg.message.videoMessage.caption
        : type == "extendedTextMessage" && msg.message.extendedTextMessage.text
        ? msg.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" &&
          msg.message.buttonsResponseMessage.selectedButtonId
        ? msg.message.buttonsResponseMessage.selectedButtonId
        : type == "templateButtonReplyMessage" &&
          msg.message.templateButtonReplyMessage.selectedId
        ? msg.message.templateButtonReplyMessage.selectedId
        : type == "listResponseMessage"
        ? msg.message.listResponseMessage.singleSelectReply.selectedRowId
        : type == "messageContextInfo"
        ? msg.message.listResponseMessage.singleSelectReply.selectedRowId
        : "";
    const body =
      type == "conversation"
        ? msg.message?.conversation
        : msg.message[type]?.caption || msg.message[type]?.text || "";
    const chata =
      type === "conversation" && msg.message.conversation
        ? msg.message.conversation
        : type == "imageMessage" && msg.message.imageMessage.caption
        ? msg.message.imageMessage.caption
        : type == "documentMessage" && msg.message.documentMessage.caption
        ? msg.message.documentMessage.caption
        : type == "videoMessage" && msg.message.videoMessage.caption
        ? msg.message.videoMessage.caption
        : type == "extendedTextMessage" && msg.message.extendedTextMessage.text
        ? msg.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" &&
          msg.message.buttonsResponseMessage.selectedButtonId
        ? msg.message.buttonsResponseMessage.selectedButtonId
        : type == "templateButtonReplyMessage" &&
          msg.message.templateButtonReplyMessage.selectedId
        ? msg.message.templateButtonReplyMessage.selectedId
        : type == "listResponseMessage"
        ? msg.message.listResponseMessage.singleSelectReply.selectedRowId
        : type == "messageContextInfo"
        ? msg.message.listResponseMessage.singleSelectReply.selectedRowId
        : "";
    const responseMessage =
      type == "listResponseMessage"
        ? msg.message?.listResponseMessage?.singleSelectReply?.selectedRowId ||
          ""
        : type == "buttonsResponseMessage"
        ? msg.message?.buttonsResponseMessage?.selectedButtonId || ""
        : "";
    const isGroup = from.endsWith("@g.us");
    const budy =
      type === "conversation"
        ? msg.message.conversation
        : type === "extendedTextMessage"
        ? msg.message.extendedTextMessage.text
        : "";

    var sender = isGroup ? msg.key.participant : msg.key.remoteJid;
    sender = sender.includes(":")
      ? sender.split(":")[0] + "@s.whatsapp.net"
      : sender;
    const senderName = msg.pushName;
    const senderNumber = sender.split("@")[0];
    const pushname = msg.pushName;

    const groupMetadata = isGroup ? await sock.groupMetadata(from) : null;
    const groupName = groupMetadata?.subject || "";
    const groupMembers = groupMetadata?.participants || [];
    const groupAdmins = groupMembers.filter((v) => v.admin).map((v) => v.id);
    const participants = m.isGroup ? await groupMetadata.participants : "";

    const isCmd = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#/$%^&.+-,\\\©^]/.test(chata);
    const prefix = isCmd ? body[0] : "";
    const isGroupAdmins = groupAdmins.includes(sender);
    const isBotGroupAdmins = groupMetadata && groupAdmins.includes(botId);
    const isOwner = [...(ownerNumber || []), ...(ownerNumber2 || [])]
      .map((jid) => jid.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(msg.sender);

    const isDev = ownerNumber.includes(sender);
    const Xcommand = chata.toLowerCase().split(" ")[0] || "";
    const XisCmd = Xcommand.startsWith(prefix);

    let command = isCmd
      ? chata.slice(1).trim().split(" ").shift().toLowerCase()
      : "";

    function removeDotFromNumber(number) {
      return number.replace(/\./g, "");
    }

    function checkInvoiceStatus() {
      const receiptData = JSON.parse(
        fs.readFileSync("./database/receipt.json")
      );
      if (receiptData.length > 0) {
        return receiptData[0].invoice === true;
      }
      return false;
    }
    function checkInvoiceTipe(tipe) {
      const receiptData = JSON.parse(
        fs.readFileSync("./database/receipt.json")
      );
      return receiptData[0].tipe === tipe;
    }
    /*
		if (!isOwner) {
			if (isCmd) {
				await sock.sendMessage(from, {
					text: "BOT SEADANG MAINTENANCE"
				}, { quoted: msg })
			}
			return
		}
		*/
    // handling known social media url/link
    let responseId =
      msg.message?.listResponseMessage?.singleSelectReply?.selectedRowId ||
      msg.message?.buttonsResponseMessage?.selectedButtonId ||
      null;
    let args = body.trim().split(" ").slice(1);
    let full_args = body.replace(command, "").slice(1).trim();
    let q = args.join(" ");
    const argr = rizkyy.split(" ");

    const isMuted = isGroup ? (mute.includes(from) ? true : false) : false;
    const isPremium = isOwner
      ? true
      : _prem.checkPremiumUser(m.sender, premium);
    /*    const gcount = isPremium ? limite.prem : limite.user 
     const limitCount = limite.limitCount */
    const isDownload = downloadfitur.includes(from) ? true : false;
    const isAfkOn = afkg.checkAfkUser(sender, _afks);
    const isAntiToxic = antitoxic.includes(from) ? true : false;
    const isAntiVirtex = antivirtex.includes(from) ? true : false;
    const isAntiLink = antilink.includes(from) ? true : false;
    const isAntiLinkAll = antilinkall.includes(from) ? true : false;
    const isAntiWame = antiwame.includes(from) ? true : false;
    const isPricelist = pricelist.includes(from) ? true : false;
    const isSewa = _sewa.checkSewaGroup(from, sewa);
    const isWelcome = isGroup ? (welcome.includes(from) ? true : false) : false;
    const isLeft = isGroup ? (left.includes(from) ? true : false) : false;
    const mentionByTag =
      type == "extendedTextMessage" &&
      msg.message.extendedTextMessage.contextInfo != null
        ? msg.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    const mentionByReply =
      type == "extendedTextMessage" &&
      msg.message.extendedTextMessage.contextInfo != null
        ? msg.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    const mention =
      typeof mentionByTag == "string" ? [mentionByTag] : mentionByTag;
    mention != undefined ? mention.push(mentionByReply) : [];
    const mentionUser = mention != undefined ? mention.filter((n) => n) : [];
    let mentioned =
      msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];

    async function downloadAndSaveMediaMessage(type_file, path_file) {
      if (type_file === "image") {
        var stream = await downloadContentFromMessage(
          msg.message.imageMessage ||
            msg.message.extendedTextMessage?.contextInfo.quotedMessage
              .imageMessage,
          "image"
        );
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
          buffer = Buffer.concat([buffer, chunk]);
        }
        fs.writeFileSync(path_file, buffer);
        return path_file;
      } else if (type_file === "video") {
        var stream = await downloadContentFromMessage(
          msg.message.videoMessage ||
            msg.message.extendedTextMessage?.contextInfo.quotedMessage
              .videoMessage,
          "video"
        );
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
          buffer = Buffer.concat([buffer, chunk]);
        }
        fs.writeFileSync(path_file, buffer);
        return path_file;
      } else if (type_file === "sticker") {
        var stream = await downloadContentFromMessage(
          msg.message.stickerMessage ||
            msg.message.extendedTextMessage?.contextInfo.quotedMessage
              .stickerMessage,
          "sticker"
        );
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
          buffer = Buffer.concat([buffer, chunk]);
        }
        fs.writeFileSync(path_file, buffer);
        return path_file;
      } else if (type_file === "audio") {
        var stream = await downloadContentFromMessage(
          msg.message.audioMessage ||
            msg.message.extendedTextMessage?.contextInfo.quotedMessage
              .audioMessage,
          "audio"
        );
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
          buffer = Buffer.concat([buffer, chunk]);
        }
        fs.writeFileSync(path_file, buffer);
        return path_file;
      }
    }

    async function getPublicIP() {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        const ip = data.ip; // Pastikan properti 'ip' sesuai dengan struktur objek JSON yang diterima
        console.log("IP Publik:", ip);
        return ip; // Mengembalikan nilai IP publik
      } catch (error) {
        console.error("Tidak dapat mendapatkan IP publik:", error);
        return null; // Mengembalikan null jika terjadi kesalahan
      }
    }

    // Fungsi untuk menghitung harga dengan markup
    function calculatePriceWithMarkup(amount, markupPercentage) {
      // Menghitung harga dengan markup dan membulatkannya ke integer
      return Math.floor(amount + (amount * (markupPercentage / 100)));
    }
    
    
    async function createTripayPayment(amount, argum, digiflazz, username) {
      const tripayapikey = config.tripay.apikey;
      const privateKey = config.tripay.privatekey;
      const markup = config.set_markup;
      try {
        // Hitung harga dengan markup 5%
        const markupPercentage = markup;
        const amountWithMarkup = calculatePriceWithMarkup(amount, markupPercentage);
        var merchant_code = config.tripay.merchant;
        var merchant_ref = `KEN${merchant_code}`
        var signature = crypto.createHmac('sha256', privateKey)
          .update(merchant_code + merchant_ref + amountWithMarkup)
          .digest('hex');
        var expiry = parseInt(Math.floor(new Date().getTime() / 1000) + (24 * 60 * 60)); // 24 jam
        const digiflazzProductName = await digiflazz.getProductName(args[0]);
        var payload = {
          'method': 'QRIS2',
          'merchant_ref': merchant_ref,
          'amount': amountWithMarkup,
          'customer_name': username,
          'customer_email': 'botstatinfo@gmail.com',
          'customer_phone': '081917003534',
          'order_items': [
            {
              'sku': argum,
              'name': digiflazzProductName,
              'price': amountWithMarkup,
              'quantity': 1
            }
          ],
          'expired_time': expiry,
          'signature': signature
        }
    
        const response = await axios.post('https://tripay.co.id/api/transaction/create', payload, {
          headers: {
            'Authorization': `Bearer ${tripayapikey}`
          },
          validateStatus: function (status) {
            return status < 999; // ignore http error
          }
        });

    
        if (response.data.success === true) {
          return {
            qris_url: response.data.data.qr_url, // Link QRIS untuk pembayaran
            transaction_id: response.data.data.reference,
            amount: response.data.data.amount,
            cus_name: response.data.data.customer_name,
            cus_email: response.data.data.customer_email,
            cus_phone: response.data.data.customer_phone,
            expired_time: response.data.data.expired_time
          };
        } else {
          console.error('Error :', response.data.message);
          return null;
        }
        
      } catch (error) {
        console.log(error);
        
        return null;
      }
      
    }

    async function verifyTripayPayment(transactionId) {
      const tripayapikey = config.tripay.apikey;
    
      try {
        // Siapkan payload untuk verifikasi
        const payload = {
          reference: transactionId,
        };
    
        // Lakukan request ke endpoint verifikasi Tripay
        const response = await axios.get('https://tripay.co.id/api/transaction/detail', {
          params: payload,
          headers: {
            'Authorization': `Bearer ${tripayapikey}`,
          },
          validateStatus: function (status) {
            return status < 999; // ignore http error
          }
        });
    
        // Cek status pembayaran
        if (response.data.success && response.data.data.status === 'PAID') {
          return true; // Pembayaran berhasil diverifikasi
        } else {
          console.error('Pembayaran belum diterima atau terjadi kesalahan:', response.data.message);
          return false;
        }
    
      } catch (error) {
        console.error('Error during payment verification:', error.message);
        return false;
      }
    }
    
    
    

    async function processing(urlPath, method) {
      return new Promise(async (resolve, reject) => {
        let Methods = ["enhance", "recolor", "dehaze"];
        Methods.includes(method) ? (method = method) : (method = Methods[0]);
        let buffer,
          Form = new FormData(),
          scheme =
            "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
        Form.append("model_version", 1, {
          "Content-Transfer-Encoding": "binary",
          contentType: "multipart/form-data; charset=uttf-8",
        });
        Form.append("image", Buffer.from(urlPath), {
          filename: "enhance_image_body.jpg",
          contentType: "image/jpeg",
        });
        Form.submit(
          {
            url: scheme,
            host: "inferenceengine" + ".vyro" + ".ai",
            path: "/" + method,
            protocol: "https:",
            headers: {
              "User-Agent": "okhttp/4.9.3",
              Connection: "Keep-Alive",
              "Accept-Encoding": "gzip",
            },
          },
          function (err, res) {
            if (err) reject();
            let data = [];
            res
              .on("data", function (chunk, resp) {
                data.push(chunk);
              })
              .on("end", () => {
                resolve(Buffer.concat(data));
              });
            res.on("error", (e) => {
              reject();
            });
          }
        );
      });
    }

    async function uptotelegra(Path) {
      return new Promise(async (resolve, reject) => {
        if (!fs.existsSync(Path)) return reject(new Error("File not Found"));
        try {
          const form = new BodyForm();
          form.append("file", fs.createReadStream(Path));
          const data = await axios({
            url: "https://telegra.ph/upload",
            method: "POST",
            headers: {
              ...form.getHeaders(),
            },
            data: form,
          });
          return resolve("https://telegra.ph" + data.data[0].src);
        } catch (err) {
          return reject(new Error(String(err)));
        }
      });
    }

    async function sendStickerFromUrl(
      from,
      url,
      packname1 = stc.packname,
      author1 = stc.author,
      options = {}
    ) {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      exif.create(packname1, author1, `sendstc_${names}`);
      download(url, "./temp/" + names + ".png", async function () {
        let filess = "./temp/" + names + ".png";
        let asw = "./temp/" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          async (err) => {
            exec(
              `webpmux -set exif ./temp/sendstc_${names}.exif ${asw} -o ${asw}`,
              async (error) => {
                setya.sendMessage(
                  from,
                  { sticker: fs.readFileSync(asw) },
                  options
                );
                fs.unlinkSync(filess);
                fs.unlinkSync(asw);
              }
            );
          }
        );
      });
    }
    const text = (q = args.join(" "));
    const numberQuery =
      text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";
    const Input = mentionByTag[0]
      ? mentionByTag[0]
      : mentionByReply
      ? mentionByReply
      : text
      ? numberQuery
      : false;

    const sendFileFromUrl = async (from, url, caption, options = {}) => {
      let mime = "";
      let res = await axios.head(url);
      mime = res.headerd["content-type"];
      let type = mime.split("/")[0] + "Message";
      if (mime.split("/")[0] === "image") {
        var img = await getBuffer(url);
        return setya.sendMessage(
          from,
          { image: img, caption: caption },
          options
        );
      } else if (mime.split("/")[0] === "video") {
        var vid = await getBuffer(url);
        return setya.sendMessage(
          from,
          { video: vid, caption: caption },
          options
        );
      } else if (mime.split("/")[0] === "audio") {
        var aud = await getBuffer(url);
        return setya.sendMessage(
          from,
          { audio: aud, mimetype: "audio/mp3" },
          options
        );
      } else {
        var doc = await getBuffer(url);
        return setya.sendMessage(
          from,
          { document: doc, mimetype: mime, caption: caption },
          options
        );
      }
    };

    //jeda time
    setInterval(() => {
      for (let i of Object.values(opengc)) {
        if (Date.now() >= i.time) {
          setya
            .groupSettingUpdate(i.id, "not_announcement")
            .then((res) =>
              setya.sendMessage(i.id, { text: `Waktu Jeda Telah Selesai` })
            )
            .catch((err) => setya.sendMessage(i.id, { text: "Error" }));
          delete opengc[i.id];
          fs.writeFileSync("./database/opengc.json", JSON.stringify(opengc));
        }
      }
    }, 1000);

    setya.createMessage = async (jidnya, kontennya, optionnya) => {
      return await generateWAMessage(jidnya, kontennya, {
        ...optionnya,
        userJid: setya.authState.creds.me.id,
        upload: setya.waUploadToServer,
      });
    };

    const isImage = type == "imageMessage";
    const isVideo = type == "videoMessage";
    const isAudio = type == "audioMessage";
    const isSticker = type == "stickerMessage";
    const isContact = type == "contactMessage";
    const isLocation = type == "locationMessage";

    const isQuoted = type == "extendedTextMessage";
    const isQuotedImage = isQuoted && quotedType == "imageMessage";
    const isQuotedVideo = isQuoted && quotedType == "videoMessage";
    const isQuotedAudio = isQuoted && quotedType == "audioMessage";
    const isQuotedSticker = isQuoted && quotedType == "stickerMessage";
    const isQuotedContact = isQuoted && quotedType == "contactMessage";
    const isQuotedLocation = isQuoted && quotedType == "locationMessage";

    var mediaType = type;
    var stream;
    if (isQuotedImage || isQuotedVideo || isQuotedAudio || isQuotedSticker) {
      mediaType = quotedType;
      msg.message[mediaType] =
        msg.message.extendedTextMessage.contextInfo.quotedMessage[mediaType];
      stream = await downloadContentFromMessage(
        msg.message[mediaType],
        mediaType.replace("Message", "")
      ).catch(console.error);
    }

    //SEWA WAKTU
    _sewa.expiredCheck(setya, sewa);

    if (!isGroup && !isCmd)
      console.log(
        color(`[ ${time} ]`, "white"),
        color("[ PRIVATE ]", "aqua"),
        color(body.slice(0, 50), "white"),
        "dari",
        color(senderNumber, "yellow")
      );
    if (isGroup && !isCmd)
      console.log(
        color(`[ ${time} ]`, "white"),
        color("[  GROUP  ]", "aqua"),
        color(body.slice(0, 50), "white"),
        "dari",
        color(senderNumber, "yellow"),
        "di Group",
        color(groupName, "yellow")
      );
    if (!isGroup && isCmd)
      console.log(
        color(`[ ${time} ]`, "white"),
        color("[ COMMAND ]", "aqua"),
        color(body, "white"),
        "dari",
        color(senderNumber, "yellow")
      );
    if (isGroup && isCmd)
      console.log(
        color(`[ ${time} ]`, "white"),
        color("[ COMMAND ]", "aqua"),
        color(body, "white"),
        "dari",
        color(senderNumber, "yellow"),
        "di Group",
        color(groupName, "yellow")
      );

    function hitungmundur(bulan, tanggal) {
      let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
      let now = Date.now();
      let distance = from - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      return (
        days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
      );
    }

    var { download, upload } = await checkBandwidth();
    let mundur = hitungmundur(7, 9);
    var menunya = allMenu(
      ucapanWaktu,
      pushname,
      mundur,
      upload,
      download,
      ownerName,
      youtubeName,
      botName,
      jam,
      tanggal,
      isOwner,
      sender,
      prefix
    );

    const reply = async (text) => {
      return sock.sendMessage(from, { text: text.trim() }, { quoted: msg });
    };

    function jsonformat(string) {
      return JSON.stringify(string, null, 2);
    }

    const rpset = (number) => {
      return new Intl.NumberFormat("id").format(number);
    };

    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
          "gi"
        )
      );
    };

    const sendContact = (jid, numbers, name, quoted, mn) => {
      let number = numbers.replace(/[^0-9]/g, "");
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        name +
        "\n" +
        "ORG:;\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        number +
        ":+" +
        number +
        "\n" +
        "END:VCARD";
      return setya.sendMessage(
        from,
        {
          contacts: { displayName: name, contacts: [{ vcard }] },
          mentions: mn ? mn : [],
        },
        { quoted: quoted }
      );
    };

    const isEmoji = (emo) => {
      let emoji_ranges =
        /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
      let regexEmoji = new RegExp(emoji_ranges, "gi");
      return emo.match(regexEmoji);
    };

    async function getGcName(groupID) {
      try {
        let data_name = await setya.groupMetadata(groupID);
        return data_name.subject;
      } catch (err) {
        return "*Group Tidak Ada*";
      }
    }

    function mentions(teks, mems = [], id) {
      if (id == null || id == undefined || id == false) {
        let res = setya.sendMessage(from, { text: teks, mentions: mems });
        return res;
      } else {
        let res = setya.sendMessage(
          from,
          { text: teks, mentions: mems },
          { quoted: msg }
        );
        return res;
      }
    }

    const sendOrder = async (
      jid,
      text,
      orid,
      img,
      itcount,
      title,
      sellers,
      tokens,
      ammount
    ) => {
      const order = generateWAMessageFromContent(
        jid,
        proto.Message.fromObject({
          orderMessage: {
            orderId: orid, // Ganti Idnya
            thumbnail: img, // Ganti Imagenya
            itemCount: itcount, // Ganti Item Countnya
            status: "INQUIRY", // Jangan Diganti
            surface: "CATALOG", // Jangan Diganti
            orderTitle: title, // Ganti Titlenya
            message: text, // Ganti Messagenya
            sellerJid: sellers, // Ganti sellernya
            token: tokens, // Ganti tokenya
            totalAmount1000: ammount, // Ganti Total Amountnya
            totalCurrencyCode: "IDR", // Terserah
          },
        }),
        { userJid: jid }
      );
      setya.relayMessage(jid, order.message, { messageId: order.key.id });
    };

    //MULAI AFK
    if (isGroup) {
      for (let x of mentionUser) {
        if (afkg.checkAfkUser(x, _afks)) {
          const getId = afkg.getAfkId(x, _afks);
          const getReason = afkg.getAfkReason(getId, _afks);
          const getTime = afkg.getAfkTime(getId, _afks);
          //if (riz.message.extendedTextMessage != undefined){
          try {
            var afpk = await setya.profilePictureUrl(mentionUser[0], "image");
          } catch {
            var afpk = "https://i.ibb.co/Twkhgy9/images-4.jpg";
          }
          var thumeb = await getBuffer(afpk);
          const cptl = `*ꞌꞋ ࣪𓂃 ִֶָ Admin Afk ִֶָ 𓂃 ࣪ꞌꞋ*

	O  Saat Ini @${mentionUser[0].split("@")[0]} Sedang Offline/Afk
	O *Alasan*  : ${getReason}
	O *Afk Sejak* : ${getTime}`;
          setya.sendMessage(
            from,
            {
              text: cptl,
              contextInfo: {
                mentionedJid: [mentionUser],
                externalAdReply: {
                  title: `SEDANG OFFLINE`,
                  body: "Mode Afk Aktif",
                  thumbnail: thumafk,
                  sourceUrl: `https://wa.me/${x}`,
                  mediaUrl: "",
                  renderLargerThumbnail: true,
                  showAdAttribution: false,
                  mediaType: 1,
                },
              },
            },
            { quoted: m }
          );
          //sendMess(x, `Assalamualaikum\n\n_Ada Yg Mencari Kamu Saat Kamu Offline/Afk_\n\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nDi Group : ${groupName}\nPesan : ${chata}`)
        }
      }
      //KEMBALI DARI AFK
      if (afkg.checkAfkUser(sender, _afks)) {
        const getTime = afkg.getAfkTime(sender, _afks);
        const getReason = afkg.getAfkReason(sender, _afks);
        const ittung = ms((await Date.now()) - getTime);
        try {
          var afpkk = await setya.profilePictureUrl(mentionUser[0], "image");
        } catch {
          var afpkk = "https://i.ibb.co/Twkhgy9/images-4.jpg";
        }
        var thumbw = await getBuffer(afpkk);
        const pep = `*${pushname}* Telah Kembali Dari Afknya!`;
        setya.sendMessage(
          from,
          {
            text: pep,
            contextInfo: {
              mentionedJid: [sender],
              externalAdReply: {
                title: `KEMBALI ONLINE`,
                body: "Mode Afk Nonaktif",
                thumbnail: thumafk,
                sourceUrl: `https://wa.me/${sender}`,
                mediaUrl: "",
                renderLargerThumbnail: true,
                showAdAttribution: false,
                mediaType: 1,
              },
            },
          },
          { quoted: m }
        );
        _afks.splice(afkg.getAfkPosition(sender, _afks), 1);
        fs.writeFileSync("./database/afkg.json", JSON.stringify(_afks));
      }
    }

    function toRupiah(angka) {
      if (angka === undefined || angka === null) {
          return "0";
      }
  
      var angkaStr = angka.toString();
      var angkaTanpaKoma = angkaStr.split(".")[0];
      var angkaRev = angkaTanpaKoma.toString().split("").reverse().join("");
      var rupiah = "";
      for (var i = 0; i < angkaRev.length; i++) {
          if (i % 3 == 0) rupiah += angkaRev.substr(i, 3) + ".";
      }
      return (
          "" +
          rupiah
            .split("", rupiah.length - 1)
            .reverse()
            .join("")
      );
  }
  
    function toLvl(angka) {
      if (angka < 10) {
        return `1.0${angka}`;
      }
      if (angka < 100) {
        return `1.${angka}`;
      }
      if (angka < 1000) {
        return `${Math.floor(angka / 100)}.${Math.floor((angka % 100) / 10)}`;
      }
      return `${Math.floor(angka / 1000) * 10}`;
    }
    // Detect Group Invite
    if (m.mtype === "groupInviteMessage") {
      var eyeye = `Jika Ingin Bot Masuk Ke Group Mu Silahkan Sewabot Ke Owner Dengan Ketik : #owner`;
      setya.sendMessage(
        from,
        {
          text: eyeye,
          contextInfo: {
            externalAdReply: {
              title: `${ucapanWaktu} ${pushname}`,
              body: "BOT MD",
              thumbnail: thum,
              mediaType: 1,
              renderLargerThumbnail: false,
              showAdAttribution: true,
              mediaUrl: "https://chat.whatsapp.com/Kpy1GjLe33PVfbMYXJx4",
              sourceUrl: "https://chat.whatsapp.com/Kpy1GjLe33P0VfbYXJx4",
            },
          },
        },
        { quoted: m }
      );
    }

    
    // Store Respon
    if (!isCmd && isGroup && isAlreadyResponList(from, chata, db_respon_list)) {
      var get_data_respon = getDataResponList(from, chata, db_respon_list);
      if (get_data_respon.isImage === false) {
        setya.sendMessage(
          from,
          { text: sendResponList(from, chata, db_respon_list) },
          {
            quoted: msg,
          }
        );
      } else {
        setya.sendMessage(
          from,
          {
            image: await getBuffer(get_data_respon.image_url),
            caption: get_data_respon.response,
          },
          {
            quoted: msg,
          }
        );
      }
    }

    

    switch (command) {
      case "menu": case "help":
        {
          setya.sendMessage(
            m.chat,
            {
              image: thum,
              caption: menunya,
            },
            {
              quoted: m,
            }
          );
        }
      break;

      case "kalkulator":
      case "hitung":
      case "total":
      case "hasil":
        if (!q) return reply(`( + ) = Untuk Tambah-Tambahan\n( - ) = Untuk Kurang-Kurangan\n( * ) = Untuk Kali-Kalian\n( / ) = Untuk Bagi-Bagian\n\nContoh\n${prefix + command} 40+20`);
        var tteks = `Hasil : ${Math_js.evaluate(q)}`;
        reply(tteks);
      break;
      
      case "add":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins) return reply(mess.GrupAdmin);
        if (!isBotGroupAdmins) return reply(mess.BotAdmin);
        if (groupMembers.length == 257) return reply(`Anda tidak dapat menambah peserta, karena Grup sudah penuh!`);
        var mems = [];
        groupMembers.map((i) => mems.push(i.id));
        var number;
        if (args.length > 0) {
          number = q.replace(/[^0-9]/gi, "") + "@s.whatsapp.net";
          var cek = await setya.onWhatsApp(number);
          if (cek.length == 0)
            return reply(`Masukkan nomer yang valid dan terdaftar di WhatsApp`);
          if (mems.includes(number))
            return reply(`Nomer tersebut sudah berada didalam grup!`);
          ////addCountCmd(`${prefix}add`, sender, _cmd)
          setya
            .groupParticipantsUpdate(from, [number], "add")
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)));
        } else if (m.isQuotedMsg) {
          number = m.quotedMsg.sender;
          var cek = await setya.onWhatsApp(number);
          if (cek.length == 0)
            return reply(`Peserta tersebut sudah tidak terdaftar di WhatsApp`);
          if (mems.includes(number))
            return reply(`Nomer tersebut sudah berada didalam grup!`);
          ////addCountCmd(`${prefix}add`, sender, _cmd)
          setya
            .groupParticipantsUpdate(from, [number], "add")
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)));
        } else {
          reply(`Kirim perintah ${command} nomer atau balas pesan orang yang ingin dimasukkan`);
        }
      break;

      case "kick":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins) return reply(mess.GrupAdmin);
        if (!isBotGroupAdmins) return reply(mess.BotAdmin);
        var number;
        if (mentionUser.length !== 0) {
          number = mentionUser[0];
          ////addCountCmd(`${prefix}kick`, sender, _cmd)
          setya
            .groupParticipantsUpdate(from, [number], "remove")
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)));
        } else if (isQuotedMsg) {
          number = m.quotedMsg.sender;
          ////addCountCmd(`${prefix}kick`, sender, _cmd)
          setya
            .groupParticipantsUpdate(from, [number], "remove")
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)));
        } else {
          reply(`Tag atau balas pesan orang yang ingin dikeluarkan dari grup`);
        }
      break;

      case "promote": case "admin":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins) return reply(mess.GrupAdmin);
        if (!isBotGroupAdmins) return reply(mess.BotAdmin);
        if (mentionUser.length !== 0) {
          ////addCountCmd(`${prefix}promote`, sender, _cmd)
          setya
            .groupParticipantsUpdate(from, [mentionUser[0]], "promote")
            .then((res) => {
              mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai admin`,
                [mentionUser[0]],
                true
              );
            })
            .catch(() => reply(mess.error.api));
        } else if (m.isQuotedMsg) {
          ////addCountCmd(`${prefix}promote`, sender, _cmd)
          setya
            .groupParticipantsUpdate(from, [m.quotedMsg.sender], "promote")
            .then((res) => {
              mentions(`Sukses menjadikan @${m.quotedMsg.sender.split("@")[0]} sebagai admin`,
                [m.quotedMsg.sender],
                true
              );
            })
            .catch(() => reply(mess.error.api));
        } else {
          reply(`Tag atau balas pesan member yang ingin dijadikan admin`);
        }
      break;

      case "demote": case "unadmin":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins) return reply(mess.GrupAdmin);
        if (!isBotGroupAdmins) return reply(mess.BotAdmin);
        if (mentionUser.length !== 0) {
          ////addCountCmd(`${prefix}demote`, sender, _cmd)
          setya
            .groupParticipantsUpdate(from, [mentionUser[0]], "demote")
            .then((res) => {
              mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai member biasa`,
                [mentionUser[0]],
                true
              );
            })
            .catch(() => reply(mess.error.api));
        } else if (m.isQuotedMsg) {
          ////addCountCmd(`${prefix}demote`, sender, _cmd)
          setya
            .groupParticipantsUpdate(from, [m.quotedMsg.sender], "demote")
            .then((res) => {
              mentions(`Sukses menjadikan @${m.quotedMsg.sender.split("@")[0]} sebagai member biasa`,
                [m.quotedMsg.sender],
                true
              );
            })
            .catch(() => reply(mess.error.api));
        } else {
          reply(`Tag atau balas pesan admin yang ingin dijadikan member biasa`
          );
        }
        break;

      case "owner":
      case "sewabot":
        sendContact(from, ownnumber.split("@s.whatsapp.net")[0], ownerName, msg)
          // setya.sendContact(from, ownerNumber.map( i => i.split("@")[0]), msg)
          .then((res) =>
            setya.sendMessage(
              from,
              { text: mess.sewaBot },
              { quoted: res }
            )
        );
      break;

      case "getlink":
        if (!isOwner) return reply(mess.OnlyOwner);
        if (!q) return reply("*Sertai Id Group*");
        var linkgc = await setya.groupInviteCode(`${q}`);
        reply("https://chat.whatsapp.com/" + linkgc);
      break;

      case "setppgrup":
      case "setppgc":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        if (!isBotGroupAdmins) return reply(mess.BotAdmin);
        if (isImage || isQuotedImage) {
          //addCountCmd(`${prefix}setppgrup`, sender, _cmd)
          var media = await downloadAndSaveMediaMessage(
            "image",
            `ppgc${from}.jpeg`
          );
          if (args[0] == "'panjang'") {
            var { img } = await generateProfilePicture(media);
            await setya.query({
              tag: "iq",
              attrs: {
                to: from,
                type: "set",
                xmlns: "w:profile:picture",
              },
              content: [
                {
                  tag: "picture",
                  attrs: { type: "image" },
                  content: img,
                },
              ],
            });
            fs.unlinkSync(media);
            reply(`Sukses`);
          } else {
            await setya
              .updateProfilePicture(from, { url: media })
              .then((res) => {
                reply(`Sukses`);
                fs.unlinkSync(media);
              })
              .catch(() => reply(mess.error.api));
          }
        } else {
          reply(`Kirim/balas gambar dengan caption ${command}`);
        }
      break;

      case "setnamegrup":
      case "setnamegc":
      case "setname":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        if (!isBotGroupAdmins) return reply(mess.BotAdmin);
        if (args.length < 0) return reply(`Gunakan dengan cara ${command} *text*\n\n_Contoh_\n\n${command} Support ${ownerName}`);
        //addCountCmd(`${prefix}setnamegc`, sender, _cmd)
        await setya
          .groupUpdateSubject(from, q)
          .then((res) => {
            reply(`Sukses`);
          })
          .catch(() => reply(mess.error.api));
      break;

      case "setdesc":
      case "setdescription":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        if (!isBotGroupAdmins) return reply(mess.BotAdmin);
        if (args.length < 0) return reply(`Gunakan dengan cara ${command} *text*\n\n_Contoh_\n\n${command} New Description by ${ownerName}`);
        //addCountCmd(`${prefix}setdesc`, sender, _cmd)
        await setya
          .groupUpdateDescription(from, q)
          .then((res) => {
            reply(`Sukses`);
          })
          .catch(() => reply(mess.error.api));
      break;

      case "revoke":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins) return reply(mess.GrupAdmin);
        if (!isBotGroupAdmins) return reply(mess.BotAdmin);
        await setya
          .groupRevokeInvite(from)
          .then((res) => {
            reply(`Sukses menyetel tautan undangan grup ini`);
          })
          .catch(() => reply(mess.error.api));
      break;

      case "hidetag":
      case "h":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        let mem = [];
        groupMembers.map((i) => mem.push(i.id));
        setya.sendMessage(from, {
          text: q ? q : "_HIDE TAG_",
          mentions: mem,
        });
      break;

      case "tagall":
        {
          if (!isGroup) return reply(mess.OnlyGrup);
          if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
          let teks = `      〘 *👥 Tag All* 〙

	➲ *Pesan : ${q ? q : "Order Oy Order"}*\n\n`;
          for (let mem of participants) {
            teks += `⭔ @${mem.id.split("@")[0]}\n`;
          }
          setya.sendMessage(
            from,
            { text: teks, mentions: participants.map((a) => a.id) },
            { quoted: m }
          );
        }
      break;

      case "delete":
      case "del":
      case "d":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        if (!m.isQuotedMsg)
          return reply(`Balas chat dari bot yang ingin dihapus`);
        if (!m.quotedMsg.fromMe)
          return reply(`Hanya bisa menghapus chat dari bot`);
        setya.sendMessage(from, {
          delete: { fromMe: true, id: m.quotedMsg.id, remoteJid: from },
        });
      break;

      case "welcome":
        if (!isGroup) return reply(`Bot Hanya Respon Di Dalam Group`);
        if (!isOwner && !isGroupAdmins)
          return reply(`Command ${command} Hanya Khusus Admin`);
        if (!isBotGroupAdmins)
          return reply(`*Jadi Kan Bot Admin Sebelum Menggunakan*`);
        if (args.length < 1)
          return reply(
            `Untuk Mengaktifkan Ketik 1\nContoh : ${prefix}welcome 1\n\nUntuk Nonaktifkan Welcome Ketik 0\nContoh : ${prefix}welcome 0`
          );
        if (Number(args[0]) === 1) {
          if (isWelcome) return reply("welcome sudah aktif");
          welcome.push(from);
          fs.writeFileSync("./database/welcome.json", JSON.stringify(welcome));
          reply("Done Mengaktifkan welcome✅");
          setya.sendMessage(from, { text: `*Welcome Online*` });
        } else if (Number(args[0]) === 0) {
          if (!isWelcome) return reply("Mode welcome sudah disable");
          let anu1 = antiwame.indexOf(from);
          welcome.splice(anu1, 1);
          fs.writeFileSync("./database/welcome.json", JSON.stringify(welcome));
          reply("Sukes menonaktifkan welcome di group ini ✔️");
        } else {
          reply("1 untuk mengaktifkan, 0 untuk menonaktifkan");
        }
      break;

      case "leave":
      case "left":
        if (!isGroup) return reply(`Bot Hanya Respon Di Dalam Group`);
        if (!isOwner && !isGroupAdmins) return reply(`Command ${command} Hanya Khusus Admin`);
        if (!isBotGroupAdmins) return reply(`*Jadi Kan Bot Admin Sebelum Menggunakan*`);
        if (args.length < 1) return reply(`Untuk Mengaktifkan Ketik 1\nContoh : ${prefix}leave 1\n\nUntuk Nonaktifkan Leave Ketik 0\nContoh : ${prefix}leave 0` );
        if (Number(args[0]) === 1) {
          if (isLeft) return reply("left sudah aktif");
          left.push(from);
          fs.writeFileSync("./database/left.json", JSON.stringify(left));
          reply("Done Mengaktifkan left✅");
          setya.sendMessage(from, { text: `*Left Online*` });
        } else if (Number(args[0]) === 0) {
          if (!isLeft) return reply("Mode left sudah disable");
          let anu1 = antiwame.indexOf(from);
          left.splice(anu1, 1);
          fs.writeFileSync("./database/left.json", JSON.stringify(left));
          reply("Sukses menonaktifkan left di group ini ✔️");
        } else {
          reply("1 untuk mengaktifkan, 0 untuk menonaktifkan");
        }
      break;

      case "open":
      case "buka":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        if (!isBotGroupAdmins) return reply(mess.BotAdmin);
        setya.groupSettingUpdate(from, "not_announcement").then((res) => {
          let opengc = `O━• *Group Open* •━O\n\n📜 *Group Telah Di Buka Oleh Admin* @${sender.split("@")[0]}\n\n${gaya}🎊 Group Open\n📆 ${tanggal}\n⏰ ${jam}${gaya}\n\n━O━O━••••••••••••━O━O━`;
          const tettOpen = getTextSetOpen(from, set_open);
          if (tettOpen !== undefined) {
            mentions(
              tettOpen
                .replace("admin", sender.split("@")[0])
                .replace("@jam", jam)
                .replace("@tanggal", tanggal),
              [sender],
              true
            );
          } else {
            mentions(opengc, [sender], true);
          }
        });
      break;

      case "close":
      case "tutup":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        if (!isBotGroupAdmins) return reply(mess.BotAdmin);
        setya
        .groupSettingUpdate(from, "announcement")
        .then((res) => {
          let closegc = `O━• *Group Close* •━O\n\n📜 *Group Telah Di Tutup Oleh Admin* @${sender.split("@")[0]}\n\n${gaya}🎊 Group Tutup\n📆 ${tanggal}\n⏰ ${jam}${gaya}\n\n━O━O━••••••••••••━O━O━`;
          const textClose = getTextSetClose(from, set_close);
          if (textClose !== undefined) {
            mentions(
              textClose
                .replace("admin", sender.split("@")[0])
                .replace("@jam", jam)
                .replace("@tanggal", tanggal),
              [sender],
              true
            );
          } else {
            mentions(closegc, [sender], true);
          }
        })
        .catch((err) => reply("Error"));
      break;

      case "setopen":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        if (!q)
          return reply(
            `Gunakan dengan cara ${command} *teks_open*\n\n_Contoh_\n\n${command} Group telah di buka`
          );
        if (isSetOpen(from, set_open))
          return reply(`Set Open already active`);
        addSetOpen(q, from, set_open);
        reply(`Successfully set Open!`);
      break;

      case "updateopen":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        if (!q)
          return reply(
            `Gunakan dengan cara ${command} *teks_open*\n\n_Contoh_\n\n${command} Group telah di buka`
          );
        if (isSetOpen(from, set_open)) {
          changeSetOpen(q, from, set_open);
          reply(`Sukses change set Open teks!`);
        } else {
          addSetOpen(q, from, set_open);
          reply(`Sukses change set Open teks!`);
        }
      break;

      case "delsetopen":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        if (!isSetOpen(from, set_open))
          return reply(`Belum ada set Open di sini..`);
        removeSetOpen(from, set_open);
        reply(`Sukses delete set Open`);
      break;

      case "setclose":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        if (!q)
          return reply(`Gunakan dengan cara ${command} *teks_close*\n\n_Contoh_\n\n${command} Group telah di tutup`);
        if (isSetClose(from, set_close))
          return reply(`Set Close already active`);
        addSetClose(q, from, set_close);
        reply(`Successfully set Close!`);
      break;

      case "updateclose":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        if (!q)
          return reply(
            `Gunakan dengan cara ${command} *teks_close*\n\n_Contoh_\n\n${command} Group telah di tutup`
          );
        if (isSetClose(from, set_close)) {
          changeSetClose(q, from, set_close);
          reply(`Sukses change set Close teks!`);
        } else {
          addSetClose(q, from, set_close);
          reply(`Sukses change set Close teks!`);
        }
      break;

      case "delsetclose":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        if (!isSetClose(from, set_close))
          return reply(`Belum ada set Close di sini..`);
        removeSetClose(from, set_close);
        reply(`Sukses delete set Close`);
      break;

      case "setwelcome":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        if (!q)
          return reply(
            `Gunakan dengan cara ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Halo @nama, Selamat datang di @grup`
          );
        if (isSetWelcome(from, set_welcome_db))
          return reply(`Sudah Ada Setwelcone Sebelumnya`);
        addSetWelcome(q, from, set_welcome_db);
        reply(`Sukses Setwelcome!`);
      break;

      case "updatewelcome":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        if (!q)
          return reply(`Gunakan dengan cara ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Halo @nama, Selamat datang di @grup`);
        if (isSetWelcome(from, set_welcome_db)) {
          //addCountCmd(`${prefix}changewelcome`, sender, _cmd)
          changeSetWelcome(q, from, set_welcome_db);
          reply(`Sukses change set welcome teks!`);
        } else {
          //addCountCmd(`${prefix}changewelcome`, sender, _cmd)
          addSetWelcome(q, from, set_welcome_db);
          reply(`Sukses Update Setwelcome`);
        }
      break;

      case "delwelcome":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        if (!isSetWelcome(from, set_welcome_db))
          return reply(`Belum Ada Setwelcone Sebelumnya`);
        removeSetWelcome(from, set_welcome_db);
        //addCountCmd(`${prefix}delsetwelcome`, sender, _cmd)
        reply(`Sukses Delete Setwelcome`);
      break;

      case "setleave":
      case "setleft":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        if (!q)
          return reply(`Gunakan dengan cara ${command} *teks_left*\n\n_Contoh_\n\n${command} Halo @nama, Selamat tinggal dari @grup`);
        if (isSetLeft(from, set_left_db))
          return reply(`Sudah Ada Setleave Sebelumnya`);
        //addCountCmd(`${prefix}setleft`, sender, _cmd)
        addSetLeft(q, from, set_left_db);
        reply(`Sukses Setleave`);
      break;

      case "updateleave":
      case "updateleft":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        if (!q)
          return reply(`Gunakan dengan cara ${command} *teks_left*\n\n_Contoh_\n\n${command} Halo @nama, Selamat tinggal dari @grup`);
        if (isSetLeft(from, set_left_db)) {
          //addCountCmd(`${prefix}updateleft`, sender, _cmd)
          changeSetLeft(q, from, set_left_db);
          reply(`Sukses Update Setleave`);
        } else {
          //addCountCmd(`${prefix}updateleft`, sender, _cmd)
          addSetLeft(q, from, set_left_db);
          reply(`Sukses Update Setleave`);
        }
      break;

      case "delsetleft":
      case "delleave":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        if (!isSetLeft(from, set_left_db))
          return reply(`Belum Ada SetLeave Sebelumnya`);
        //addCountCmd(`${prefix}delsetleft`, sender, _cmd)
        removeSetLeft(from, set_left_db);
        reply(`Sukses Delete Setleave`);
      break;

      case "linkgrup":
      case "link":
      case "linkgc":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isBotGroupAdmins) return reply(mess.BotAdmin);
        var url = await setya
          .groupInviteCode(from)
          .catch(() => reply(mess.error.api));
        url = "https://chat.whatsapp.com/" + url;
        reply(url);
      break;
      

      // Search Menu
      case "ffid":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!q) return reply(`Gunakan dengan cara ${prefix + command} *ID*\n\nContoh : \n${command} 1100110011`);
        let userIdFF = q;
        
        const endFF = `https://v1.apigames.id/merchant/${config.apigames.merchant_id}/cek-username/freefire?user_id=${userIdFF}&signature=${config.apigames.signature}`;

        try {
          // Lakukan request ke endpoint
          let response = await fetch(endpoint);
          let data = await response.json();
    
          // Proses data dari response
          if (data.data.is_valid === true) {
            let mlb = `*🔎 FREE FIRE 🔍*\n\nID : ${userIdFF}\nNick : ${data.data.username}`;
            reply(mlb);
          } else if (data.data.is_valid === false) {
            reply("Username tidak ditemukan");
          }
        } catch (error) {
          console.error("Error:", error);
          reply("Terjadi kesalahan saat memeriksa username");
        }
      break;

      case "mlid":
        if (!isGroup) return reply(mess.OnlyGrup);
        let args = q.split("|"); // Menggunakan | sebagai pemisah
        if (args.length !== 2) return reply(`Example : \n${prefix + command} 79798226|2155`);
        let args1_ = args[0];
        let args2_ = args[1];
        if (!Number(args1_) || !Number(args2_)) return reply("Hanya angka");
      
        // Gabungkan ID dan server
        const userId = args1_ + args2_; // Gabungkan ID dan server
          
        const endpoint = `https://v1.apigames.id/merchant/${config.apigames.merchant_id}/cek-username/mobilelegend?user_id=${userId}&signature=${config.apigames.signature}`;
      
        try {
          // Lakukan request ke endpoint
          let response = await fetch(endpoint);
          let data = await response.json();
        
          // Proses data dari response
          if (data.data.is_valid === true) {
            let mlb = `*🔎 MOBILE LEGENDS 🔍*\n\nID : ${args1_}\nServer : ${args2_}\nNick : ${data.data.username}`;
            reply(mlb);
          } else if (data.data.is_valid === false) {
            reply("Username tidak ditemukan");
          }
        } catch (error) {
          console.error("Error:", error);
          reply("Terjadi kesalahan saat memeriksa username");
        }
      break;
      
      
      case "pubgid":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!q) return reply(`Gunakan dengan cara ${prefix + command} *id*\n\n_Contoh_\n\n${command} 5217933016`);

        axios
        .get(`https://api.lolhuman.xyz/api/pubg/${q}?apikey=${lolhuman_apikey}`)
        .then(({ data }) => {
          let pubg = `*🔎 PUBG MOBILE 🔍*\n\nID : ${q}\nNick : ${data.result}`;
          reply(pubg);
        })
        .catch((err) => {
          console.log(color("[ ERROR ]", "red"), err);
          reply(mess.error.api);
          setya.sendMessage(ownerNumber, {
            text: `${command} error : ${err}`,
          });
        });
      break;

      case "higgsid":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!q) return reply(`Gunakan dengan cara ${prefix + command} *id*\n\n_Contoh_\n\n${command} 291756557`);

        axios
        .get(`https://v1.apigames.id/merchant/${config.apigames.merchant_id}/cek-username/higgs?user_id=${q}&signature=${config.apigames.signature}`)
        .then(({ data }) => {
          let domino = `*🔎 HIGGS DOMINO 🔍*\n\nID : ${q}\nNick : ${data.data.username}`;
          reply(domino);
        })
        .catch((err) => {
          console.log(color("[ ERROR ]", "red"), err);
          reply(mess.error.api);
          setya.sendMessage(ownerNumber, {
            text: `${command} error : ${err}`,
          });
        });
      break;

      case "listadmin":
        if (!isGroup) return;
        let teks = `List Admin Group ${groupMetadata.subject}\nTotal : ${groupAdmins.length}\n\n`;
        let no = 0;
        for (let admon of groupAdmins) {
          no += 1;
          teks += `[${no.toString()}] @${admon.split("@")[0]}\n`;
        }
        mentions(teks, groupAdmins, true);
      break;

      case "topup":
        let args1 = q.split(" "); // Menggunakan | sebagai pemisah
        if (!args1[0] || !args1[1]) {
          return reply(`*Gunakan*\n${prefix + command} produk nomor/id\n\n*Contoh*\n${prefix + command} PULSAXL5K 081917003534`);
        }

        const digiflazzPriceResponse = await digiflazz.getPrice(args1[0]);
        if (!digiflazzPriceResponse || digiflazzPriceResponse.error) {
          return reply("Terjadi kesalahan saat mendapatkan harga dari Digiflazz.");
        }

        const amount = Math.floor(Number(digiflazzPriceResponse));

        const argum = args1[0];
        const username = `${encodeURIComponent(pushname)}`;
        const tripayResponse = await createTripayPayment(amount, argum, digiflazz, username);
        if (!tripayResponse || !tripayResponse.qris_url) {
          return reply("Terjadi kesalahan saat membuat link pembayaran.");
        }

        const digiDesc = await digiflazz.getProductDesc(args1[0]);

        // Kirim gambar QRIS dan detail order ke pengguna
        const qrisImage = tripayResponse.qris_url;
        const totalCost = tripayResponse.amount; // Ambil total biaya dari response
        const exp = tripayResponse.expired_time;
        const digiflazzProductName = await digiflazz.getProductName(args1[0]);

        const expAl = new Date(exp * 1000);

        const expResult = expAl.toLocaleString('id-ID', {
          timeZone: 'Asia/Jakarta',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })

        const orderDetails = `*[ TRANSAKSI PENDING ]*\n\n*❍ Nama Produk* : ${digiflazzProductName}\n*❍ Kode* : ${args1[0]}\n*❍ Deskripsi Produk* : ${digiDesc}\n*❍ ID Transaksi* : ${args1[1]}\n*❍ Waktu & Tanggal* : ${time} ${tanggal}\n\nSilakan lakukan pembayaran sejumlah *Rp ${totalCost.toLocaleString('id-ID')}* melalui QRIS Di Atas Sebelum *${expResult}*`;

        await sock.sendMessage(from, { image: { url: qrisImage }, caption: orderDetails });

        // 2. Verifikasi pembayaran secara berkala
        let paymentVerified = false;
        for (let i = 0; i < 5; i++) { // Coba verifikasi 5 kali dengan jeda waktu
          await new Promise(resolve => setTimeout(resolve, 60000)); // Tunggu 1 menit
          paymentVerified = await verifyTripayPayment(tripayResponse.transaction_id);
          if (paymentVerified) { break; }
        }

        if (!paymentVerified) {
          return reply("Pembayaran belum diterima atau terjadi kesalahan.");
        }

        // 3. Kirim pesan bahwa transaksi sedang diproses
        const _Pending = await reply(`*[ TRANSAKSI DIPROSES ]*\n\n*❍ Kode* : ${args1[0]}\n*❍ ID Transaksi* : ${args1[1]}\n*❍ Waktu & Tanggal* : ${time} ${tanggal}\n\nTransaksi kamu sedang diproses, mohon tunggu beberapa saat.`);

        // 4. Proses top-up Digiflazz
        const randomRef = crypto.randomBytes(4).toString("hex").toUpperCase();
        const customer_no = String(args1[1]) + (args1[2] ? String(args1[2]) : "");
        const _Trx = await digiflazz.transaction(args1[0], customer_no);

        if (_Trx.rc === "44") {
          return await sock.sendMessage(
            ownnumber.replace(/[^0-9]/g, "") + "@s.whatsapp.net",
            {
              text: `Kak, saldonya habis\n\nMsg: ${_Trx.message}`,
            },
            {
              quoted: _Pending,
            }
          );
        }

        if (_Trx.status === "Sukses") {
          let tujuan = `${encodeURIComponent(customer_no)}`;
          let username = `${encodeURIComponent(pushname)}`;
          let waktu = `${time} ${tanggal}`;

          let TrxUpCase = _Trx.status.toUpperCase()

          const tekss = `*[ TRANSAKSI ${TrxUpCase} ]*\n\n*❍ Kode* : ${args1[0]}\n*❍ ID Transaksi* : ${args1[1]} ${args1[2] ? `(${args1[2]})` : ""}\n*❍ Waktu & Tanggal* : ${time} ${tanggal}\n*❍ Invoice* : ${_Trx.ref_id || ""}\n*❍ SN* : ${_Trx.sn || ""}\n\n${_Trx.rc === "00" ? "𝐓𝐞𝐫𝐢𝐦𝐚𝐤𝐚𝐬𝐢𝐡 𝐒𝐮𝐝𝐚𝐡 𝐎𝐫𝐝𝐞𝐫" : _Trx.message}\n\n_*${botName}*_`;
          reply(tekss).catch((error) => {
            console.error("Error:", error.message);
            return reply("Terjadi kesalahan saat mengunduh gambar.");
          });
        } else {
          await reply(`*[ TRANSAKSI ${TrxUpCase} ]*\n\n*❍ Kode* : ${args1[0]}\n*❍ ID Transaksi* : ${args1[1]}${args1[2] ? ` (${args1[2]})` : ""}\n*❍ Waktu :* ${time}\n*❍ Invoice* : ${_Trx.ref_id || ""}\n*❍ SN* : ${_Trx.sn || ""}\n\n${_Trx.rc === "00" ? "𝐓𝐞𝐫𝐢𝐦𝐚𝐤𝐚𝐬𝐢𝐡 𝐒𝐮𝐝𝐚𝐡 𝐎𝐫𝐝𝐞𝐫" : _Trx.message}\n\n_*${botName}*_`.trim());
        }
      break;

    //   case "topup":
    // const fs = require('fs');
    // const produkDigi = require('../database/produkdigi.json');
    // const produkDesc = require('../database/produkDesc.json');

    // // Langkah 1: Kirim daftar produk
    // let productList = Object.keys(produkDigi);
    // if (productList.length === 0) {
    //     return reply("Tidak ada produk yang tersedia.");
    // }

    // let productMessage = '*[ DAFTAR PRODUK ]*\n\n';
    // for (let i = 0; i < productList.length; i++) {
    //     let productName = productList[i];
    //     let skuProd = produkDigi[productName];
    //     let descProd = produkDesc[productName];
        
    //     const priceResponse = await digiflazz.getPrice(skuProd);
    //     if (!priceResponse || priceResponse.error) {
    //         return reply(`Terjadi kesalahan saat mendapatkan harga untuk produk ${productName}.`);
    //     }

    //     const productPrice = Math.floor(Number(priceResponse));
    //     const markupPrice = productPrice + (productPrice * 0.05);

    //     productMessage += `${i + 1}. *${productName}*\n*Deskripsi*: ${descProd}\n*Harga*: Rp ${markupPrice.toLocaleString('id-ID')}\n\n`;
    // }

    // productMessage += "Pilih Produk Dengan Mereply Pesan Ini Lalu Ketik Nomor Produk Yang Kamu Ingin Beli. Jika Ingin Membatalkan, Reply Pesan Ini dan Ketik *Batal*.";

    // const sentMessage = await reply(productMessage);

    // // Langkah 2: Tunggu reply dari user
    // const replyMessage = await sock.waitForMessage(sentMessage.key.id, { timeout: 120000 }); // Timeout 2 menit
    // if (!replyMessage || !replyMessage.body) {
    //     return reply("Tidak ada respon yang valid. Transaksi dibatalkan.");
    // }

    // const userReply = replyMessage.body.trim().toLowerCase();
    // if (userReply === 'batal') {
    //     return reply("Transaksi telah dibatalkan.");
    // }

    // const selectedProductIndex = parseInt(userReply);
    // if (isNaN(selectedProductIndex) || selectedProductIndex < 1 || selectedProductIndex > productList.length) {
    //     return reply("Pilihan produk tidak valid. Transaksi dibatalkan.");
    // }

    // const selectedProduct = productList[selectedProductIndex - 1];
    // const selectedSKU = produkDigi[selectedProduct];
    // const orderData = { sku: selectedSKU };
    // const userNumberFile = path.join(__dirname, `../order/${userNumber}.json`);
    // fs.writeFileSync(userNumberFile, JSON.stringify(orderData));

    // // Langkah 3: Minta nomor atau ID akun untuk top-up
    // const askForNumberMessage = await reply(`Reply Pesan Ini dan Ketik Nomor atau ID Akun Kamu Untuk *${selectedProduct}*. Jika Kamu Ingin Membatalkan Pesanan Maka Ketik *Batal*.`);

    // const numberReply = await sock.waitForMessage(askForNumberMessage.key.id, { timeout: 120000 }); // Timeout 2 menit
    // if (!numberReply || !numberReply.body) {
    //     return reply("Tidak ada respon yang valid. Transaksi dibatalkan.");
    // }

    // const userNumber = numberReply.body.trim();
    // if (userNumber.toLowerCase() === 'batal') {
    //     return reply("Pesanan telah dibatalkan.");
    // }

    // // Tambahkan nomor ke data order dan simpan lagi
    // orderData.number = userNumber;
    // fs.writeFileSync(userNumberFile, JSON.stringify(orderData));

    // // Langkah 4: Kirim konfirmasi pesanan
    // const priceResponse = await digiflazz.getPrice(selectedSKU);
    // if (!priceResponse || priceResponse.error) {
    //     return reply("Terjadi kesalahan saat mendapatkan harga dari Digiflazz.");
    // }

    // const amount = Math.floor(Number(priceResponse)) * 1.05;
    // const orderConfirmation = `*[ KONFIRMASI PESANAN ]*\n\n*❍ Nama Produk* : ${selectedProduct}\n*❍ Kode* : ${selectedSKU}\n*❍ Deskripsi Produk* : ${produkDesc[selectedProduct]}\n*❍ ID Akun* : ${userNumber}\n*❍ Harga* : Rp ${amount.toLocaleString('id-ID')}\n\nJika informasi di atas benar, reply dengan *ya* untuk melanjutkan transaksi atau *salah* untuk membatalkan.`;

    // const confirmationMessage = await reply(orderConfirmation);

    // const confirmationReply = await sock.waitForMessage(confirmationMessage.key.id, { timeout: 120000 }); // Timeout 2 menit
    // if (!confirmationReply || !confirmationReply.body) {
    //     return reply("Tidak ada respon yang valid. Transaksi dibatalkan.");
    // }

    // const userConfirmation = confirmationReply.body.trim().toLowerCase();
    // if (userConfirmation === 'salah') {
    //     return reply("Pesanan telah dibatalkan.");
    // }

    // // Langkah 5: Kirim pesan pembayaran QRIS dari Tripay
    // const tripayResponse = await createTripayPayment(amount, selectedSKU, digiflazz, userNumber);
    // if (!tripayResponse || !tripayResponse.qris_url) {
    //     return reply("Terjadi kesalahan saat membuat link pembayaran.");
    // }

    // const qrisImage = tripayResponse.qris_url;
    // const totalCost = tripayResponse.amount;
    // const exp = tripayResponse.expired_time;
    // const expDate = new Date(exp * 1000).toLocaleString('id-ID', {
    //     timeZone: 'Asia/Jakarta',
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric',
    //     hour: '2-digit',
    //     minute: '2-digit'
    // });

    // const paymentDetails = `*[ TRANSAKSI PENDING ]*\n\n*❍ Nama Produk* : ${selectedProduct}\n*❍ Kode* : ${selectedSKU}\n*❍ Deskripsi Produk* : ${produkDesc[selectedProduct]}\n*❍ ID Akun* : ${userNumber}\n*❍ Harga* : Rp ${totalCost.toLocaleString('id-ID')}\n*❍ Waktu Expired* : ${expDate}\n\nSilakan lakukan pembayaran melalui QRIS di atas sebelum waktu expired untuk menyelesaikan transaksi.`;

    // await sock.sendMessage(from, { image: { url: qrisImage }, caption: paymentDetails });

    // // Langkah 6: Verifikasi pembayaran dalam 24 jam
    // let paymentVerified = false;
    // for (let i = 0; i < 24; i++) { // Coba verifikasi selama 24 jam
    //     await new Promise(resolve => setTimeout(resolve, 3600000)); // Tunggu 1 jam
    //     paymentVerified = await verifyTripayPayment(tripayResponse.transaction_id);
    //     if (paymentVerified) { break; }
    // }

    // if (!paymentVerified) {
    //     return reply("Pembayaran belum diterima dalam waktu 24 jam. Pesanan dibatalkan.");
    // }

    // // Langkah 7: Proses top-up dengan Digiflazz
    // const transactionResponse = await digiflazz.transaction(selectedSKU, userNumber);
    // if (transactionResponse.rc === "44") {
    //     return reply(`Saldonya habis. Pesan: ${transactionResponse.message}`);
    // }

    // if (transactionResponse.status === "Sukses") {
    //     const successMessage = `*[ TRANSAKSI BERHASIL ]*\n\n*❍ Nama Produk* : ${selectedProduct}\n*❍ Kode* : ${selectedSKU}\n*❍ ID Akun* : ${userNumber}\n*❍ Waktu & Tanggal* : ${new Date().toLocaleString('id-ID')}\n*❍ Invoice* : ${transactionResponse.ref_id || ""}\n*❍ SN* : ${transactionResponse.sn || ""}\n\nTerima kasih telah melakukan transaksi.`;
    //     await reply(successMessage);
    // } else {
    //     const failMessage = `*[ TRANSAKSI GAGAL ]*\n\n*❍ Nama Produk* : ${selectedProduct}\n*❍ Kode* : ${selectedSKU}\n*❍ ID Akun* : ${userNumber}\n*❍ Waktu & Tanggal* : ${new Date().toLocaleString('id-ID')}\n*❍ Invoice* : ${transactionResponse.ref_id || ""}\n*❍ SN* : ${transactionResponse.sn || ""}\n\n${transactionResponse.message}`;
    //     await reply(failMessage);
    // }
    // break;





// Owner Only
case "topown":
        {
          let argsOwn = q.split(" ");
          if (!isOwner)
            return reply(mess.OnlyOwner);
          if (!argsOwn[0] || !argsOwn[1]) {
            return reply(`*${command}* CODE NO/ID`);
          }
          const _Pending = await reply(`*[ TRANSAKSI PENDING ]*

*❍ Kode* : ${argsOwn[0]}
*❍ ID Transaksi* : ${argsOwn[1]}
*❍ Waktu & Tanggal* :
${time} ${tanggal}
			
𝐒𝐞𝐛𝐞𝐧𝐭𝐚𝐫 𝐘𝐚, 𝐓𝐫𝐚𝐧𝐬𝐚𝐤𝐬𝐢 𝐊𝐚𝐦𝐮 𝐃𝐢 𝐏𝐫𝐨𝐬𝐞𝐬 𝐎𝐭𝐨𝐦𝐚𝐭𝐢𝐬 𝐎𝐥𝐞𝐡 𝐁𝐨𝐭 :)

_*${botName}*_
`);
          const randomRef = crypto.randomBytes(4).toString("hex").toUpperCase();
          const customer_no =
            String(argsOwn[1]) + (argsOwn[2] ? String(argsOwn[2]) : "");
          const _Trx = await digiflazz.transaction(argsOwn[0], customer_no);
          if (_Trx.rc === "44") {
            return await sock.sendMessage(
              ownnumber.replace(/[^0-9]/g, "") + "@s.whatsapp.net",
              {
                text: `Kak, saldonya habis\n\nMsg: ${_Trx.message}`,
              },
              {
                quoted: _Pending,
              }
            );
          }
          if (_Trx.status === "Sukses") {
            let tujuan = `${encodeURIComponent(customer_no)}`;
            let username = `${encodeURIComponent(pushname)}`;
            let waktu = `${time} ${tanggal}`;

            const tekss = `*[ TRANSAKSI ${_Trx.status} ]*

*❍ Kode* : ${argsOwn[0]}
*❍ ID Transaksi* : ${argsOwn[1]} ${argsOwn[2] ? `(${argsOwn[2]})` : ""}
*❍ Waktu & Tanggal* :
${time} ${tanggal}
*❍ Invoice* : ${_Trx.ref_id || ""}
*❍ SN* : ${_Trx.sn || ""}

${_Trx.rc === "00" ? "𝐓𝐞𝐫𝐢𝐦𝐚𝐤𝐚𝐬𝐢𝐡 𝐒𝐮𝐝𝐚𝐡 𝐎𝐫𝐝𝐞𝐫" : _Trx.message}

_*${botName}*_`;
            reply(tekss).catch((error) => {
              console.error("Error:", error.message);
              return reply("Terjadi kesalahan saat mengunduh gambar.");
            });
          } else {
            await reply(
              `*[ TRANSAKSI ${_Trx.status} ]*

*❍ Kode* : ${argsOwn[0]}
*❍ ID Transaksi* : ${argsOwn[1]} ${argsOwn[2] ? `(${argsOwn[2]})` : ""}
*❍ Waktu :* ${time}
*❍ Invoice* : ${_Trx.ref_id || ""}
*❍ SN* : ${_Trx.sn || ""}

${_Trx.rc === "00" ? "𝐓𝐞𝐫𝐢𝐦𝐚𝐤𝐚𝐬𝐢𝐡 𝐒𝐮𝐝𝐚𝐡 𝐎𝐫𝐝𝐞𝐫" : _Trx.message}

_*${botName}*_
`.trim()
            );
          }
        }
        break;


      case "deposit":
        {
          if(!isOwner) return reply(mess.OnlyOwner);
          let argsdep = q.split(" ");
          const bankPilih = argsdep[0];
          const amountDepo = argsdep[1];
          const namaRek = argsdep[2];
          if (!argsdep[0] || !argsdep[1] || !argsdep[2]) {
            return reply(`*Gunakan Format Seperti Dibawah*\n${prefix + command} Bank Jumlah NamaRek\n\nContoh : ${prefix + command} BCA 200000 ${config.ownerName}\n\n*Bank Tersedia* BNI, BRI, BCA, MANDIRI`);
          }
          const bankRes = bankPilih.toUpperCase();

          if (bankRes === "BCA" || bankRes === "BNI" || bankRes === "MANDIRI" || bankRes === "BRI") {
            const digiflazzDepo = await digiflazz.depositSaldo(amountDepo, bankPilih, namaRek);
          
            if(bankRes === "BCA") {
              var pesan = `*[ INFORMASI DEPOSIT ]*\n\n*Bank Tujuan*\n${bankRes}\n\n*=> No Rek Transfer*\n6042888890\n\n*=> Nama Rekening*\nPT DIGIFLAZZ INTERKONEKSI INDONESIA\n\n*=> Jumlah Transfer*\nRp ${toRupiah(digiflazzDepo.data.amount)}\n\n*=> Berita Transfer*\n${digiflazzDepo.data.notes}\n\n*BERITA TRANSFER WAJIB ADA SAAT MENTRANSFER, DITARUH PADA CATATAN TRANSFER ATAU BERITA*`;
              reply(pesan);
              console.log(digiflazzDepo);
            } else if (bankRes === "MANDIRI") {
              var pesan = `*[ INFORMASI DEPOSIT ]*\n\n*Bank Tujuan*\n${bankRes}\n\n*=> No Rek Transfer*\n1550009910111\n\n*=> Nama Rekening*\nPT DIGIFLAZZ INTERKONEKSI INDONESIA\n\n*=> Jumlah Transfer*\nRp ${toRupiah(digiflazzDepo.data.amount)}\n\n*=> Berita Transfer*\n${digiflazzDepo.data.notes}\n\n*BERITA TRANSFER WAJIB ADA SAAT MENTRANSFER, DITARUH PADA CATATAN TRANSFER ATAU BERITA*`;
              reply(pesan);
              console.log(digiflazzDepo);
            } else if (bankRes === "BRI") {
              var pesan = `*[ INFORMASI DEPOSIT ]*\n\n*Bank Tujuan*\n${bankRes}\n\n*=> No Rek Transfer*\n213501000291307\n\n*=> Nama Rekening*\nDIGIFLAZZ INTERKONEK\n\n*=> Jumlah Transfer*\nRp ${toRupiah(digiflazzDepo.data.amount)}\n\n*=> Berita Transfer*\n${digiflazzDepo.data.notes}\n\n*BERITA TRANSFER WAJIB ADA SAAT MENTRANSFER, DITARUH PADA CATATAN TRANSFER ATAU BERITA*`;
              reply(pesan);
              console.log(digiflazzDepo);
            } else if (bankRes === "BNI") {
              var pesan = `*[ INFORMASI DEPOSIT ]*\n\n*Bank Tujuan*\n${bankRes}\n\n*=> No Rek Transfer*\n1996888992\n\n*=> Nama Rekening*\nPT DIGIFLAZZ INTERKONEKSI INDONESIA\n\n*=> Jumlah Transfer*\nRp ${toRupiah(digiflazzDepo.data.amount)}\n\n*=> Berita Transfer*\n${digiflazzDepo.data.notes}\n\n*BERITA TRANSFER WAJIB ADA SAAT MENTRANSFER, DITARUH PADA CATATAN TRANSFER ATAU BERITA*`;
              reply(pesan);
              console.log(digiflazzDepo);
            }
          } else {
            reply(`*Bank Tersedia Hanya BNI, BRI, MANDIRI dan BCA !!!*`)
          }
        }
      break;

      case "ceksaldo":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          const _myduit = await digiflazz.checkDeposit();
          reply(`*[ SALDO DIGIFLAZZ ]*\n\n*=> Saldo*\n${Number(_myduit.deposit).toLocaleString("id-ID", { style: "currency", currency: "IDR", })}`);
        }
      break;

        // case "ken": {
        //   console.log("Command 'ken' dipanggil oleh:", msg.sender); // Logging awal
        
        //   if (!db[msg.sender]) {
        //     console.log("Menambahkan user ke database");
        //     database_().addUser(msg.sender);
        //   }
        //   if (db[msg.sender]["limit"] < 0 && !isOwner) {
        //     console.log("Limit harian habis untuk:", msg.sender);
        //     return reply("Limit harian kamu sudah habis");
        //   }
        
        //   sock["waitInQueue"] = sock["waitInQueue"] ? sock["waitInQueue"] : {};
        //   if (msg.sender in sock["waitInQueue"]) {
        //     console.log("User dalam antrian, tidak memproses:", msg.sender);
        //     return;
        //   }
        
        //   if (!q) {
        //     console.log("Tidak ada pertanyaan dari user:", msg.sender);
        //     return reply("Kenapa Kak?");
        //   }
        
        //   sock["waitInQueue"][msg.sender] = true;
        //   const DefaultRoleContent =
        //     "You are a ChatGPT named KenAI Created and Developed By Kenichi Ichi. You answer as briefly as possible for each response if you make a list, don't have too many items. You prefer to use formal Indonesian.";
        //   sock["openai"] = sock["openai"] ? sock["openai"] : {};
        //   sock["openai"][msg.sender] = sock["openai"][msg.sender]
        //     ? sock["openai"][msg.sender]
        //     : [
        //         {
        //           role: "system",
        //           content: DefaultRoleContent,
        //         },
        //       ];
        
        //   const storedChat = sock["openai"][msg.sender];
        //   console.log("Stored chat:", storedChat); // Logging storedChat
        //   await sock.sendPresenceUpdate(from, "composing");
        
        //   try {
        //     console.log("Mengirim request ke OpenAI API...");
        //     const { data: json } = await axios.request({
        //       url: "https://api.openai.com/v1/chat/completions",
        //       method: "POST",
        //       headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": `Bearer sk-5So4s6rFLyPNm5dKL5yte_NW-caEPIiLZYnYSZ3Y4FT3BlbkFJXFtReOn5gEiMUokJcBuspopfn2I_XqoIOEagUhJtUA`, // Ganti dengan API key OpenAI kamu
        //       },
        //       data: {
        //         model: "text-davinci-003",
        //         max_tokens: 100,
        //         messages: [
        //           ...storedChat,
        //           {
        //             role: "user",
        //             content: q,
        //           },
        //         ],
        //       },
        //     });
        
        //     console.log("Respons diterima dari OpenAI API:", json); // Logging respons API
        
        //     delete sock["waitInQueue"][msg.sender];
        //     deleteChatConversation(sock);
        
        //     if (!json || !json.choices || json.choices.length === 0) {
        //       console.log("Respons dari API kosong atau tidak valid");
        //       delete sock["openai"][msg.sender];
        //       return reply("Terjadi kesalahan, coba lagi nanti.");
        //     } else {
        //       const responseMessage = json.choices[0].message.content.trim();
        //       console.log("Mengirim respons ke user:", responseMessage); // Logging respons
        //       storedChat.push(
        //         {
        //           role: "user",
        //           content: q,
        //         },
        //         {
        //           role: "assistant",
        //           content: responseMessage,
        //         }
        //       );
        //       reply(responseMessage);
        //     }
        
        //     if (!isOwner) {
        //       console.log("Mengurangi limit untuk user:", msg.sender);
        //       database_().reduceLimit(msg.sender);
        //     }
        //   } catch (error) {
        //     console.log("Error terjadi:", error.response ? error.response.data : error.message); // Logging error
        //     delete sock["waitInQueue"][msg.sender];
        //     deleteChatConversation(sock);
        //     delete sock["openai"][msg.sender];
        //     return reply("Terjadi kesalahan, coba lagi nanti.");
        //   }
        //   break;
        // }

      case "getip":
        {
          reply("*Mendapatkan IP Publik...*");
          getPublicIP().then((ip) => {
            reply(`IP Publik: ${ip}`);
          });
        }
      break;

      case "ping":
      case "botstatus":
      case "statusbot":
        {
          const used = process.memoryUsage();
          const cpus = os.cpus().map((cpu) => {
            cpu.total = Object.keys(cpu.times).reduce(
              (last, type) => last + cpu.times[type],
              0
            );
            return cpu;
          });
          const cpu = cpus.reduce(
            (last, cpu, _, { length }) => {
              last.total += cpu.total;
              last.speed += cpu.speed / length;
              last.times.user += cpu.times.user;
              last.times.nice += cpu.times.nice;
              last.times.sys += cpu.times.sys;
              last.times.idle += cpu.times.idle;
              last.times.irq += cpu.times.irq;
              return last;
            },
            {
              speed: 0,
              total: 0,
              times: {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0,
              },
            }
          );
          let timestamp = speed();
          let latensi = speed() - timestamp;
          let neww = performance.now();
          let oldd = performance.now();
          let respon = `🕒 *Kecepatan Respon :* ${gaya}${latensi.toFixed(4)} Detik${gaya}\n*🕒 Runtime :* ${gaya}${runtime(process.uptime())}${gaya}`;
          await setya.sendMessage(
            m.chat,
            {
              text: respon,
            },
            {
              quoted: m,
            }
          );
        }
        break;

      case "createqr":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          const qrcode = require("qrcode");
          if (!text) return reply(`*Contoh :* ${prefix + command} ${config.ownerName}`);
          const qyuer = await qrcode.toDataURL(text, { scale: 8 });
          let data = new Buffer.from(
            qyuer.replace("data:image/png;base64,", ""),
            "base64"
          );
          setya.sendMessage(
            from,
            { image: data, caption: mess.success },
            { quoted: m }
          );
        }
      break;

      case "detectqr":
        {
          if (!isOwner)
            return reply("Fitur Ini Hanya Bisa Digunakan Oleh Owner!");
          try {
            mee = await setya.downloadAndSaveMediaMessage(quoted);
            mem = await uptotelegra(mee); // Pastikan uptotelegra telah didefinisikan sebelumnya
            const res = await fetch(
              `http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`
            );
            const data = await res.json();
            if (data && data[0]) {
              reply(util.format(data[0]));
            } else {
              reply("QR code tidak terdeteksi atau data tidak valid.");
            }
          } catch (err) {
            reply(`Error: ${err}`);
            console.log(err);
          }
        }
      break;

      //Tambahin Produk Digiflazz
      case "addproduk": {
        let argsProd = q.split(" ");
        let produk = argsProd[0];
        let skuProd = argsProd[1];
        let descProd = argsProd.slice(2).join(" "); // Gabungkan sisa argumen sebagai deskripsi produk
    
        if (!produk || !skuProd || !descProd) 
            return reply(`*Gunakan*\n${prefix + command} produk skuDigiflazz deskripsi\n\n*Contoh*\n${prefix + command} XL5K PXL5 Pulsa 5 Ribu XL`);
    
        // Baca file produkdigi.json
        fs.readFile('./database/produkdigi.json', 'utf8', (err, data) => {
            if (err) {
                console.log('Error reading file:', err);
                return;
            }
    
            // Parse data JSON
            let produkAdd = JSON.parse(data);
    
            // Cek apakah produk atau skuProd sudah ada
            if (produkAdd[produk]) {
                return reply(`Produk *${produk}* sudah ada di database.`);
            }
    
            if (Object.values(produkAdd).includes(skuProd)) {
                return reply(`SKU *${skuProd}* sudah ada di database.`);
            }
    
            // Tambahkan produk baru dengan SKU-nya
            produkAdd[produk] = skuProd;
    
            // Tulis ulang file produkdigi.json dengan data yang diperbarui
            fs.writeFile('./database/produkdigi.json', JSON.stringify(produkAdd, null, 4), 'utf8', (err) => {
                if (err) {
                    reply('Error writing file produkdigi.json:', err);
                    return;
                }
    
                // Baca file produkDesc.json
                fs.readFile('./database/produkDesc.json', 'utf8', (err, data) => {
                    if (err) {
                        console.log('Error reading file produkDesc.json:', err);
                        return;
                    }
    
                    // Parse data JSON
                    let produkDesc = JSON.parse(data);
    
                    // Tambahkan deskripsi produk
                    produkDesc[produk] = descProd;
    
                    // Tulis ulang file produkDesc.json dengan data yang diperbarui
                    fs.writeFile('./database/produkDesc.json', JSON.stringify(produkDesc, null, 4), 'utf8', (err) => {
                        if (err) {
                            reply('Error writing file produkDesc.json:', err);
                            return;
                        }
    
                        reply(`Produk *${produk}* dengan kode SKU Digiflazz *${skuProd}* dan deskripsi *${descProd}* berhasil ditambahkan!`);
                    });
                });
            });
        });
    }
    break;
    

    case "delproduk": {
      let produk = q.trim();
  
      if (!produk) 
          return reply(`Gunakan\n${prefix + command} namaProduk\n\n*Contoh*\n${prefix + command} XL5K`);
  
      // Baca file produkdigi.json
      fs.readFile('./database/produkdigi.json', 'utf8', (err, data) => {
          if (err) {
              console.log('Error reading file produkdigi.json:', err);
              return;
          }
  
          // Parse data JSON
          let produkAdd = JSON.parse(data);
  
          // Cek apakah produk ada di database produkdigi.json
          if (!produkAdd[produk]) {
              return reply(`Produk *${produk}* tidak ditemukan di database produkdigi.json.`);
          }
  
          // Ambil SKU dari produk
          let skuProd = produkAdd[produk];
  
          // Hapus produk dari produkdigi.json
          delete produkAdd[produk];
  
          // Tulis ulang file produkdigi.json dengan data yang diperbarui
          fs.writeFile('./database/produkdigi.json', JSON.stringify(produkAdd, null, 4), 'utf8', (err) => {
              if (err) {
                  reply('Error writing file produkdigi.json:', err);
                  return;
              }
  
              // Baca file produkDesc.json
              fs.readFile('./database/produkDesc.json', 'utf8', (err, data) => {
                  if (err) {
                      console.log('Error reading file produkDesc.json:', err);
                      return;
                  }
  
                  // Parse data JSON
                  let produkDesc = JSON.parse(data);
  
                  // Hapus deskripsi produk berdasarkan SKU dari produkDesc.json
                  if (produkDesc[produk]) {
                      delete produkDesc[produk];
  
                      // Tulis ulang file produkDesc.json dengan data yang diperbarui
                      fs.writeFile('./database/produkDesc.json', JSON.stringify(produkDesc, null, 4), 'utf8', (err) => {
                          if (err) {
                              reply('Error writing file produkDesc.json:', err);
                              return;
                          }
  
                          reply(`Produk *${produk}* dan deskripsi terkait berhasil dihapus dari database.`);
                      });
                  } else {
                      reply(`Produk *${produk}* tidak ditemukan di database produkDesc.json.`);
                  }
              });
          });
      });
  }
  break;
  
  
  
  case "listproduk": {
    // Baca file produkdigi.json
    fs.readFile('./database/produkdigi.json', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file produkdigi.json:', err);
            return reply('Gagal membaca database produk.');
        }

        // Parse data JSON
        let produkList = JSON.parse(data);

        // Baca file produkDesc.json
        fs.readFile('./database/produkDesc.json', 'utf8', (err, descData) => {
            if (err) {
                console.log('Error reading file produkDesc.json:', err);
                return reply('Gagal membaca database deskripsi produk.');
            }

            // Parse data JSON
            let produkDesc = JSON.parse(descData);

            // Cek apakah ada produk di database
            if (Object.keys(produkList).length === 0) {
                return reply('Tidak ada produk yang tersimpan di database.');
            }

            // Format daftar produk beserta SKU-nya dan deskripsinya
            let listProduk = '*Daftar Produk*\n\n';
            for (let [produk, sku] of Object.entries(produkList)) {
                let desc = produkDesc[produk] || 'Deskripsi tidak tersedia'; // Ambil deskripsi dari produkDesc.json berdasarkan key produk
                listProduk += `*Produk :* ${produk}\n*SKU :* ${gaya}${sku}${gaya}\n*Deskripsi :* _${desc}_\n\n\n\n`;
            }
            listProduk += `*_Note_*\n*Produk:* Nama Produk\n*SKU:* Kode SKU dari Digiflazz\n*Deskripsi:* Deskripsi Produk`;

            // Kirim daftar produk ke user
            reply(listProduk);
        });
    });
}
break;


    


    }
  } catch (e) {
    console.log(e);
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`New ${__filename}`);
  delete require.cache[file];
  require(file);
});
