/* # Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved ©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('ttp');
const ANIM = "Get random anime waifu wallpapers"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'ttp ?(.*)', fromMe: true, desc: Lang.TTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/ttp?file&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    Asena.addCommand({ pattern: 'attp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var ttinullimage = await axios.get(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })

    }));
    
        Asena.addCommand({ pattern: 'a2tp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var ttinullimage = await axios.get(`https://lolhuman.herokuapp.com/api/attp2?apikey=e1ee2b3d3b00e58f2511ad95&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })

    }));
    
    

        Asena.addCommand({ pattern: 'aatp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/flamingtext/vampire?text=${encodeURIComponent(match[1])}&apikey=${Config.CCN}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png })

    }));
    
            Asena.addCommand({ pattern: 'abtp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/flamingtext/alien?text=${encodeURIComponent(match[1])}&apikey=${Config.CCN}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png })

    }));
            Asena.addCommand({ pattern: 'actp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/flamingtext/sound?text=${encodeURIComponent(match[1])}&apikey=${Config.CCN}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png })

    }));
             Asena.addCommand({ pattern: 'adtp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/flamingtext/blackbird?text=${encodeURIComponent(match[1])}&apikey=${Config.CCN}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png })

    }));   


}

// ##############################################################################################################################################################################################################################################################
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'ttp ?(.*)', fromMe: false, desc: Lang.TTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/ttp?file&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

    }));


    Asena.addCommand({ pattern: 'attp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);

     var ttinullimage = await axios.get(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })

    }));
            Asena.addCommand({ pattern: 'a2tp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var ttinullimage = await axios.get(`https://lolhuman.herokuapp.com/api/attp2?apikey=e1ee2b3d3b00e58f2511ad95&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })

    }));
    
            Asena.addCommand({ pattern: 'aatp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/flamingtext/vampire?text=${encodeURIComponent(match[1])}&apikey=${Config.CCN}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png })

    }));

            Asena.addCommand({ pattern: 'abtp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/flamingtext/alien?text=${encodeURIComponent(match[1])}&apikey=${Config.CCN}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png })

    }));
            Asena.addCommand({ pattern: 'actp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/flamingtext/sound?text=${encodeURIComponent(match[1])}&apikey=${Config.CCN}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png })

    }));
            Asena.addCommand({ pattern: 'adtp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/flamingtext/blackbird?text=${encodeURIComponent(match[1])}&apikey=${Config.CCN}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png })

    }));

}
