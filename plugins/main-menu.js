const config = require('../config')
const { cmd, commands } = require('../command');
const path = require('path');
const os = require("os")
const fs = require('fs');
const {runtime} = require('../lib/functions')
const axios = require('axios')

// 🔥 اپنا آڈیو URL یہاں لگاؤ
const AUDIO_URL = 'https://files.catbox.moe/x8nfyn'

// Small caps
const toSmallCaps = (text) => {
    if (!text || typeof text !== 'string') return '';
    const smallCapsMap = {
        'a': 'ᴀ','b':'ʙ','c':'ᴄ','d':'ᴅ','e':'ᴇ','f':'ғ','g':'ɢ','h':'ʜ','i':'ɪ',
        'j':'ᴊ','k':'ᴋ','l':'ʟ','m':'ᴍ','n':'ɴ','o':'ᴏ','p':'ᴘ','q':'ǫ','r':'ʀ',
        's':'s','t':'ᴛ','u':'ᴜ','v':'ᴠ','w':'ᴡ','x':'x','y':'ʏ','z':'ᴢ',
        'A':'ᴀ','B':'ʙ','C':'ᴄ','D':'ᴅ','E':'ᴇ','F':'ғ','G':'ɢ','H':'ʜ','I':'ɪ',
        'J':'ᴊ','K':'ᴋ','L':'ʟ','M':'ᴍ','N':'ɴ','O':'ᴏ','P':'ᴘ','Q':'ǫ','R':'ʀ',
        'S':'s','T':'ᴛ','U':'ᴜ','V':'ᴠ','W':'ᴡ','X':'x','Y':'ʏ','Z':'ᴢ'
    };
    return text.split('').map(c => smallCapsMap[c] || c).join('');
};

// Category format
const formatCategory = (category, cmds) => {

    const validCmds = cmds.filter(
        cmd => cmd.pattern && cmd.pattern.trim() !== ''
    );

    if (validCmds.length === 0) return '';

    let title = `\n▰▰▰『 ${toSmallCaps(category.toUpperCase())} 』▰▰▰\n`;

    let body = validCmds.map(cmd => {
        return `➥ .${toSmallCaps(cmd.pattern || '')}`;
    }).join('\n');

    let footer = `\n▰▰▰▰▰▰▰▰▰▰`;

    return `${title}${body}${footer}`;
};

// Image check
const isValidImageUrl = (url) => {
    if (!url || typeof url !== 'string' || url.trim() === '') return false;
    return ['.jpg','.jpeg','.png','.gif','.webp'].some(ext =>
        url.toLowerCase().endsWith(ext)
    );
};

cmd({
    pattern: "menu",
    alias: ["m","help","allmenu","fullmenu"],
    use: '.menu',
    desc: "Show all bot commands",
    category: "main",
    react: "⬇️",
    filename: __filename
},
async (conn, mek, m, { from, reply, userConfig }) => {

    try {

        await conn.sendPresenceUpdate('composing', from);

        let totalCommands = Object.keys(commands).length;

        const categories = [...new Set(Object.values(commands).map(c => c.category))]
            .filter(c => c && c !== 'undefined');

        const categorized = {};

        categories.forEach(cat => {
            const valid = Object.values(commands)
                .filter(c => c.category === cat && c.pattern);

            if (valid.length > 0) categorized[cat] = valid;
        });

        let menuSections = '';

        for (const [category, cmds] of Object.entries(categorized)) {
            menuSections += formatCategory(category, cmds);
        }

        const BOT_NAME = userConfig?.BOT_NAME || config.BOT_NAME || "Bot";
        const OWNER_NAME = userConfig?.OWNER_NAME || config.OWNER_NAME || "Owner";
        const PREFIX = userConfig?.PREFIX || config.PREFIX || ".";
        const MODE = userConfig?.MODE || config.MODE || "private";
        const VERSION = userConfig?.VERSION || config.VERSION || "1.0.0";
        const DESCRIPTION = userConfig?.DESCRIPTION || config.DESCRIPTION || "";

        const BOT_IMAGE =
            userConfig?.BOT_IMAGE ||
            config.BOT_IMAGE ||
            config.BOT_MEDIA_URL;

        let dec = `▰▰▰『 ${BOT_NAME} 』▰▰▰

╭─❍ ʙᴏᴛ ɪɴғᴏ
│ ➥ Owner : ${OWNER_NAME}
│ ➥ Commands : ${totalCommands}
│ ➥ Runtime : ${runtime(process.uptime())}
│ ➥ Prefix : ${PREFIX}
│ ➥ Mode : ${MODE}
│ ➥ Version : ${VERSION}
╰────────────

${menuSections}

▰▰▰▰▰▰▰▰▰▰
> ${DESCRIPTION || ''}`;

        let imageToUse = path.join(__dirname, '../lib/ERFAN.jpg');

        if (isValidImageUrl(BOT_IMAGE)) {
            try {
                await axios.head(BOT_IMAGE, { timeout: 3000 });
                imageToUse = BOT_IMAGE;
            } catch {}
        }

        // 📱 پہلے Menu Send ہوگا
        await conn.sendMessage(from, {
            image: { url: imageToUse },
            caption: dec,
            contextInfo: {
                isForwarded: true,
                forwardingScore: 999,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363402493709861@newsletter",
                    newsletterName: "NAWAZ-MD",
                    serverMessageId: Date.now()
                }
            }
        }, { quoted: mek });

        // 🔥 پھر Audio Send ہوگی
        await conn.sendMessage(from, {
            audio: { url: AUDIO_URL },
            mimetype: 'audio/mp4',
            ptt: true 
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }

});
