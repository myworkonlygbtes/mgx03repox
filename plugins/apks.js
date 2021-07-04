const XTroid = require('../events');
const axios = require('axios');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const fs = require('fs');


if (Config.WORKTYPE == 'private') {

   XTroid.addCommand({pattern: 'apkmod', fromMe: true}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☣️ *APK COMMANDS* ☣️ 〙\n┗━━━━━━━━━━━━━━━━━━━\nAplicaciones Full\n┠⊷️ ↘️ Nova Launcher:\n     *.nova*\n\n┠⊷️ ↘️ CM Launcher:\n     *.cml*\n\n┠⊷️ ↘️ Apex Launcher:\n     *.apex*\n\n\n┠⊷️ ↘️ Kinemaster:\n     *.kinemaster*\n\n┠⊷️ ↘️ PicsArt Gold:\n     *.picsart*\n\n┠⊷️ ↘️ Canva Pro:\n     *.canva*\n\n┠⊷️ ↘️ Ligthrom:\n     *.lightroom*\n\n┠⊷️ ↘️ Photoshop Express:\n     *.pshop*\n\n┠⊷️ ↘️ Snapseed:\n     *.snaps*\n\n┠⊷️ ↘️ Retouch:\n     *.retouch*\n\n\n┠⊷️ ↘️ Vanced Manager:\n     *.vanced*\n\n┠⊷️ ↘️ Crunchyroll:\n     *.crunchy*\n\n┠⊷️ ↘️ Freezer Mod:\n     *.freez*\n\n┠⊷️ ↘️ Deezer Premium:\n     *.deezer*\n\n┠⊷️ ↘️ RadioBox:\n     *.rbox*\n\n┠⊷️ ↘️ Mx Player Pro:\n     *.mxpro*\n\n┠⊷️ ↘️ Power AMP:\n     *.amp*\n\n┠⊷️ ↘️ JetAudio:\n     *.jetau*\n\n\n┠⊷️ ↘️ ExpressVpn:\n     *.xpress*\n\n┠⊷️ ↘️ Hospot Shield:\n     *.hshield*\n\n┠⊷️ ↘️ TurboVpn:\n     *.Turbo*\n\n┠⊷️ ↘️ File Manager:\n     *.flmanager*\n\n┠⊷️ ↘️ CallRecorder:\n     *.callr*\n\n┠⊷️ ↘️ FingScanner:\n     *.fing*\n\n┠⊷️ ↘️ Shazam Encore:\n     *.shazam*\n\n┠⊷️ ↘️ QR Scanner Pro:\n     *.qrcode*\n\n┠⊷️ ↘️ Screen Recorder:\n     *.srecorder*\n\n┠⊷️ ↘️ TikTok Mod:\n     *.tiktok*\n\n┠⊷️ ↘️ Photomath:\n     *.pmath*\n\n┠⊷️ ↘️ WhatsApp Plus:\n     *.waplus*\n\n┏━━━━━━━━━━━━━━━━━━━\n  *Public Bot* 😉\n┗━━━━━━━━━━━━━━━━━━━\n');
   }));

   XTroid.addCommand({pattern: 'fatp', fromMe: false}, (async (message, match) => {        
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/apk/FATP.mp3"),
            MessageType.audio, 
            {mimetype: Mimetype.mp4Audio}
        )
   }));

   XTroid.addCommand({pattern: 'nova', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *NOVA LAUNCHER* 💎\npremium unlocked .\n📌 bit.ly/drknova');
   }));

   XTroid.addCommand({pattern: 'cml', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CM LAUNCHER* 💎\npremium unlocked.\n😞 No disponible en este momento.');
   }));

   XTroid.addCommand({pattern: 'apex', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *APEX LAUNCHER* 💎\npremium unlocked.\n📌 bit.ly/drkapex');
   }));

   XTroid.addCommand({pattern: 'kinemaster', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *KINEMASTER MOD* 💎\npremium unlocked.\n👉https://bit.ly/2RSyFVr.\n pass: 3456');
   }));

   XTroid.addCommand({pattern: 'inshot', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *INSHOT MOD* 💎\npremium unlocked.\n👉https://bit.ly/3zyNjlZ');
   }));

   XTroid.addCommand({pattern: 'alight', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *ALIGHT MOTION MOD* 💎\npremium unlocked.\n👉https://bit.ly/3cHUBdg');
   }));

   XTroid.addCommand({pattern: 'capcut', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CAP CUT MOD* 💎\npremium unlocked.\n👉https://bit.ly/3pSSlFu');
   }));
   XTroid.addCommand({pattern: 'picsart', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *PICSART GOLD* 💎\npremium unlocked.\n📌 bit.ly/drkpicsart');
   }));

   XTroid.addCommand({pattern: 'canva', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CANVA PRO* 💎\npremium unlocked.\n📌 bit.ly/canvapro');
   }));

   XTroid.addCommand({pattern: 'lightr', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *LIGTHROM* 💎\npremium unlocked.\n📌 bit.ly/drklightr');
   }));

   XTroid.addCommand({pattern: 'pshop', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOSHOP EXPRESS* 💎\npremium unlocked.\n📌 bit.ly/drkphotoshop');
   }));

   XTroid.addCommand({pattern: 'snaps', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *SNAPSEED* 💎\npremium unlocked.\n📌 bit.ly/drksnaps');
   }));

   XTroid.addCommand({pattern: 'retouch', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *RETOUCH* 💎\npremium unlocked.\n📌 bit.ly/drkretouch');
   }));

   XTroid.addCommand({pattern: 'vanced', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *VANCED MANAGER* 💎\nyoutube vanced.\n📌 bit.ly/drkytubev');
   }));

   XTroid.addCommand({pattern: 'freez', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *FREEZER MOD* 💎\nPremium Unlocked.\n📌 bit.ly/drkfreezer');
   }));

   XTroid.addCommand({pattern: 'deezer', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *DEEZER MOD* 💎\npremium unlocked.\n📌 bit.ly/drkdeezer');
   }));

   XTroid.addCommand({pattern: 'rbox', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *RADIO BOX* 💎\npremium unlocked.\n📌 bit.ly/drkradiobox');
   }));

   XTroid.addCommand({pattern: 'mxpro', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *MX PLAYER PRO* 💎\npremium unlocked.\n⚠️ Versión Premium.\n📌 bit.ly/drkmxplayer');
   }));

   XTroid.addCommand({pattern: 'amp', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *POWERAMP* 💎\npremium unlocked.\n📌 bit.ly/drkampplayer');
   }));

   XTroid.addCommand({pattern: 'jetau', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *JetAudio* 💎\npremium unlocked.\n📌 bit.ly/drkjetau');
   }));

   XTroid.addCommand({pattern: 'xpress', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *EXPRESS VPN* 💎\npremium unlocked.\n📌 bit.ly/drkXpress');
   }));

   XTroid.addCommand({pattern: 'hshield', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *HOSPOT SHIELD VPN* 💎\npremium unlocked.\n📌 bit.ly/drkHShield');
   }));

   XTroid.addCommand({pattern: 'avguard', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *TURBO VPN* 💎\npremium unlocked.\n📌 bit.ly/drkguard');
   }));

   XTroid.addCommand({pattern: 'flmanager', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *FILE MANAGER* 💎\npremium unlocked.\n📌 bit.ly/drkesfile');
   }));

   XTroid.addCommand({pattern: 'callr', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CALL RECORDER* 💎\npremium unlocked.\n📌 bit.ly/drkcallr');
   }));

   XTroid.addCommand({pattern: 'fing', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *FING SCANNER* 💎\npremium unlocked.\n📌 bit.ly/drkfing');
   }));

   XTroid.addCommand({pattern: 'shazam', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *SHAZAM ENCORE* 💎\npremium unlocked.\n📌 bit.ly/drkshaz');
   }));

   XTroid.addCommand({pattern: 'qrcode', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *QR CODE SCANER* 💎\npremium unlocked.\n📌 bit.ly/drkqrscanner');
   }));

   XTroid.addCommand({pattern: 'srecorder', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *SCREEN RECORDER* 💎\npremium unlocked.\n📌 bit.ly/drkgrabr');
   }));

   XTroid.addCommand({pattern: 'tiktok', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *TIKTOK MOD* 💎\npremium unlocked.\n📌 bit.ly/drktiktok');
   }));

   XTroid.addCommand({pattern: 'pmath', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOMATH* 💎\npremium unlocked.\n📌 bit.ly/drkphotomath');
   }));

   XTroid.addCommand({pattern: 'waplus', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *WHATSAPP PLUS* 💎\nwhattsapp mod.\n📌 bit.ly/drkWaPlus');
   }));
}

else if (Config.WORKTYPE == 'public') {

   XTroid.addCommand({pattern: 'apkmod', fromMe: false}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☣️ *APK COMANDOS* ☣️ 〙\n┗━━━━━━━━━━━━━━━━━━━\nAplicaciones Full\n┠⊷️ ↘️ Nova Launcher:\n     *.nova*\n\n┠⊷️ ↘️ CM Launcher:\n     *.cml*\n\n┠⊷️ ↘️ Apex Launcher:\n     *.apex*\n\n\n┠⊷️ ↘️ Kinemaster:\n     *.kinemaster*\n\n┠⊷️ ↘️ PicsArt Gold:\n     *.picsart*\n\n┠⊷️ ↘️ Canva Pro:\n     *.canva*\n\n┠⊷️ ↘️ Ligthrom:\n     *.lightroom*\n\n┠⊷️ ↘️ Photoshop Express:\n     *.pshop*\n\n┠⊷️ ↘️ Snapseed:\n     *.snaps*\n\n┠⊷️ ↘️ Retouch:\n     *.retouch*\n\n\n┠⊷️ ↘️ Vanced Manager:\n     *.vanced*\n\n┠⊷️ ↘️ Crunchyroll:\n     *.crunchy*\n\n┠⊷️ ↘️ Freezer Mod:\n     *.freez*\n\n┠⊷️ ↘️ Deezer Premium:\n     *.deezer*\n\n┠⊷️ ↘️ RadioBox:\n     *.rbox*\n\n┠⊷️ ↘️ Mx Player Pro:\n     *.mxpro*\n\n┠⊷️ ↘️ Power AMP:\n     *.amp*\n\n┠⊷️ ↘️ JetAudio:\n     *.jetau*\n\n\n┠⊷️ ↘️ ExpressVpn:\n     *.xpress*\n\n┠⊷️ ↘️ Hospot Shield:\n     *.hshield*\n\n┠⊷️ ↘️ TurboVpn:\n     *.Turbo*\n\n┠⊷️ ↘️ File Manager:\n     *.flmanager*\n\n┠⊷️ ↘️ CallRecorder:\n     *.callr*\n\n┠⊷️ ↘️ FingScanner:\n     *.fing*\n\n┠⊷️ ↘️ Shazam Encore:\n     *.shazam*\n\n┠⊷️ ↘️ QR Scanner Pro:\n     *.qrcode*\n\n┠⊷️ ↘️ Screen Recorder:\n     *.srecorder*\n\n┠⊷️ ↘️ TikTok Mod:\n     *.tiktok*\n\n┠⊷️ ↘️ Photomath:\n     *.pmath*\n\n┠⊷️ ↘️ WhatsApp Plus:\n     *.waplus*\n\n┏━━━━━━━━━━━━━━━━━━━\n  *Public Bot* 😉\n┗━━━━━━━━━━━━━━━━━━━\n');
   }));
    
   XTroid.addCommand({pattern: 'fatp', fromMe: false}, (async (message, match) => {        
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/apk/FATP.mp3"),
            MessageType.audio, 
            {mimetype: Mimetype.mp4Audio}
        )
   }));

   XTroid.addCommand({pattern: 'nova', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *NOVA LAUNCHER* 💎\npremium unlocked.\n📌 bit.ly/drknova');
   }));

   XTroid.addCommand({pattern: 'cml', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CM LAUNCHER* 💎\npremium unlocked.\n😞 No disponible en este momento.');
   }));

   XTroid.addCommand({pattern: 'apex', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *APEX LAUNCHER* 💎\npremium unlocked.\n📌 bit.ly/drkapex');
   }));

   XTroid.addCommand({pattern: 'kinemaster', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *KINEMASTER MOD* 💎\npremium unlocked.\n👉https://bit.ly/2RSyFVr.');
   }));

XTroid.addCommand({pattern: 'inshot', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *INSHOT MOD* 💎\npremium unlocked.\n👉https://bit.ly/3zyNjlZ');
   }));

XTroid.addCommand({pattern: 'alight', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *ALIGHT MOTION MOD* 💎\npremium unlocked.\n👉https://bit.ly/3cHUBdg');
   }));

XTroid.addCommand({pattern: 'capcut', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CAP CUT MOD* 💎\npremium unlocked.\n👉https://bit.ly/3pSSlFu');
   }));
   XTroid.addCommand({pattern: 'picsart', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *PICSART GOLD* 💎\npremium unlocked.\n📌 bit.ly/drkpicsart');
   }));

   XTroid.addCommand({pattern: 'canva', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CANVA PRO* 💎\npremium unlocked.\n📌 bit.ly/canvapro');
   }));

   XTroid.addCommand({pattern: 'lightr', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *LIGTHROM* 💎\npremium unlocked.\n📌 bit.ly/drklightr');
   }));

   XTroid.addCommand({pattern: 'pshop', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOSHOP EXPRESS* 💎\npremium unlocked.\n📌 bit.ly/drkphotoshop');
   }));

   XTroid.addCommand({pattern: 'snaps', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *SNAPSEED* 💎\npremium unlocked.\n📌 bit.ly/drksnaps');
   }));

   XTroid.addCommand({pattern: 'retouch', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *RETOUCH* 💎\npremium unlocked.\n📌 bit.ly/drkretouch');
   }));

   XTroid.addCommand({pattern: 'vanced', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *VANCED MANAGER* 💎\nYouTube Premium  YouTube Music.\n📌 bit.ly/drkytubev');
   }));

   XTroid.addCommand({pattern: 'crunchy', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        var chyroll = await axios.get('https://gitlab.com/DrkBotPublic/botarchives/-/raw/master/Sin_t%C3%ADtulo_2_540p.mp4', { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(chyroll.data), MessageType.video, {mimetype: Mimetype.mp4})
        await message.sendMessage('🔰 *CRUNCHYROLL(vrv)* 🔰\n💳 *BIN:* 55703976xxx62xxx\n📫 *Codigo Postal:* 10080, 10090\n *Ip:* USA 🇺🇸');
   }));

   XTroid.addCommand({pattern: 'freez', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *FREEZER MOD* 💎\npremium unlocked - spotify\n📌 bit.ly/drkfreezer');
   }));

   XTroid.addCommand({pattern: 'deezer', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *DEEZER MOD* 💎\npremium unlocked.\n📌 bit.ly/drkdeezer');
   }));

   XTroid.addCommand({pattern: 'rbox', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *RADIO BOX* 💎\npremium unlocked.\n📌 bit.ly/drkradiobox');
   }));

   XTroid.addCommand({pattern: 'mxpro', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *MX PLAYER PRO* 💎\npremium unlocked.\n📌 bit.ly/drkmxplayer');
   }));

   XTroid.addCommand({pattern: 'amp', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *POWERAMP* 💎\npremium unlocked.\n📌 bit.ly/drkampplayer');
   }));

   XTroid.addCommand({pattern: 'jetau', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *JetAudio* 💎\npremium unlocked.\n📌 bit.ly/drkjetau');
   }));

   XTroid.addCommand({pattern: 'xpress', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *EXPRESS VPN* 💎\npremium unlocked.\n📌 bit.ly/drkXpress');
   }));

   XTroid.addCommand({pattern: 'hshield', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *HOSPOT SHIELD VPN* 💎\npremium unlocked.\n📌 bit.ly/drkHShield');
   }));

   XTroid.addCommand({pattern: 'avguard', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *TURBO VPN* 💎\npremium unlocked.\n📌 bit.ly/drkguard');
   }));

   XTroid.addCommand({pattern: 'flmanager', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *FILE MANAGER* 💎\npremium unlocked.\n📌 bit.ly/drkesfile');
   }));

   XTroid.addCommand({pattern: 'callr', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CALL RECORDER* 💎\npremium unlocked.\n📌 bit.ly/drkcallr');
   }));

   XTroid.addCommand({pattern: 'fing', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *FING SCANNER* 💎\npremium unlocked.\n📌 bit.ly/drkfing');
   }));

   XTroid.addCommand({pattern: 'shazam', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *SHAZAM ENCORE* 💎\npremium unlocked.\n📌 bit.ly/drkshaz');
   }));

   XTroid.addCommand({pattern: 'qrcode', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *QR CODE SCANER* 💎\npremium unlocked.\n📌 bit.ly/drkqrscanner');
   }));

   XTroid.addCommand({pattern: 'screen recorder', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *SCREEN RECORDER* 💎\npremium unlocked.\n📌 bit.ly/drkgrabr');
   }));

   XTroid.addCommand({pattern: 'tiktok', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *TIKTOK MOD* 💎\npremium unlocked.\n📌 bit.ly/drktiktok');
   }));

   XTroid.addCommand({pattern: 'pmath', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOMATH* 💎\npremium unlocked.\n📌 bit.ly/drkphotomath');
   }));

   XTroid.addCommand({pattern: 'waplus', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *WHATSAPP PLUS* 💎\nmhatsapp mod.\n📌 bit.ly/drkWaPlus');
   }));
}
