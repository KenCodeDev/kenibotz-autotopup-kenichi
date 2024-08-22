exports.allMenu = (
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
) => {
	return `${ucapanWaktu} ${pushname !== undefined ? pushname : "Kak"}
🏅Creator : ${ownerName}
🤖Bot Name : ${botName}
🏅Youtube : ${youtubeName}
 
WAKTU INDONESIA BARAT 
⏰Jam : ${jam}
📆Tanggal : ${tanggal}

*SIMPEL MENU*
❋ ${prefix}sticker
❋ ${prefix}toimg
❋ ${prefix}tovideo
❋ ${prefix}tomp3
❋ ${prefix}ttp
❋ ${prefix}attp
❋ ${prefix}emojimix 

*STORE MENU*
◪ ${prefix}menu
◪ ${prefix}addlist
◪ ${prefix}dellist
◪ ${prefix}update
◪ ${prefix}jeda
◪ ${prefix}kalkulator

*FITUR CEK RATE*
⸙ ${prefix}kios Ratenya
⸙ ${prefix}unibrl Ratenya
⸙ ${prefix}unimy Ratenya
⸙ ${prefix}uniph Ratenya
⸙ ${prefix}soc Ratenya
⸙ ${prefix}undawn Ratenya
⸙ ${prefix}genshin Ratenya
⸙ ${prefix}codm Ratenya
⸙ ${prefix}aov Ratenya

*MENU PENCARIAN*
 • ${prefix}ffid Id Game
 • ${prefix}mlid Id/Server
 • ${prefix}xnxx genre 

*PROSES/DONE MENU*
⸙ ${prefix}p < reply orderan >
⸙ ${prefix}d < reply orderan >
⸙ ${prefix}setp
⸙ ${prefix}updatep
⸙ ${prefix}delsetp
⸙ ${prefix}setd
⸙ ${prefix}updated
⸙ ${prefix}delsetd

*SETBOT MENU*
❒ ${prefix}setbot Teksnya
❒ ${prefix}updatesetbot TeksBaru
❒ ${prefix}delsetbot
❒ Bot = Untuk Respon Bot

*GROUP MENU*
 • ${prefix}welcome
 • ${prefix}left
 • ${prefix}setwelcome
 • ${prefix}updatewelcome
 • ${prefix}delwelcome
 • ${prefix}setleft
 • ${prefix}changeleft
 • ${prefix}delsetleft
 • ${prefix}linkgc
 • ${prefix}setppgc
 • ${prefix}setnamegc
 • ${prefix}setdesc
 • ${prefix}antilink
 • ${prefix}antilinkall
 • ${prefix}antilinkwame
 • ${prefix}antivirtex
 • ${prefix}antitoxic
 • ${prefix}open
 • ${prefix}close
 • ${prefix}boton
 • ${prefix}botoff
 • ${prefix}setopen
 • ${prefix}updateopen
 • ${prefix}delsetopen
 • ${prefix}setclose
 • ${prefix}updateclose
 • ${prefix}delsetclose
 • ${prefix}add
 • ${prefix}kick
 • ${prefix}promote
 • ${prefix}demote
 • ${prefix}afk
 • ${prefix}revoke
 • ${prefix}hidetag
 • ${prefix}listadmin
 • ${prefix}checksewa
 • ${prefix}addsewa
 • ${prefix}delsewa
 • ${prefix}down
 • ${prefix}jadian
 • ${prefix}jodohku

*MAIN MENU*
 • ${prefix}owner
 • ${prefix}sewabot
 • ${prefix}runtime`;
};

exports.ownmenu = (pushname, ownerNumber) => {
	return `\t\t\t\t*OWNERS MENU*
 • ${prefix}getlink idnya
 • ${prefix}setthumb
 • ${prefix}setvideo 
 • ${prefix}addsewa link waktu
 • ${prefix}listsewa
 • ${prefix}delsewa`;
};
