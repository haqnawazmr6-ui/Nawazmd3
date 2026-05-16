const config = require('../config')
const { cmd, commands } = require('../command');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const { runtime } = require('../lib/functions')

// 🎵 AUDIO URL (YAHAN APNA LINK LAGAO)
const MENU_AUDIO_URL = "https://files.catbox.moe/zs739d";

// small caps
const toSmallCaps = (text) => {
    if (!text || typeof text !== 'string') return '';

    const map = {
        a:'ᴀ',b:'ʙ',c:'ᴄ',d:'ᴅ',e:'ᴇ',f:'ғ',g:'ɢ',h:'ʜ',i:'ɪ',
        j:'ᴊ',k:'ᴋ',l:'ʟ',m:'ᴍ',n:'ɴ',o:'ᴏ',p:'ᴘ',q:'ǫ',r:'ʀ',
        s:'s',t:'ᴛ',u:'ᴜ',v:'ᴠ',w:'ᴡ',x:'x',y:'ʏ',z:'ᴢ'
    };

    return text.split('').map(c => map[c] || c).join('');
};

// category format (same style)
const formatCategory = (cat, cmds) => {

    const valid = cmds.filter(c => c.pattern && c.pattern.trim() !== '');
    if (!valid.length) return '';

    return `
╭──────────────❍
│ 『 ${toSmallCaps(cat.toUpperCase())} 』
${valid.map(c => `│ ✦ ${toSmallCaps(c.pattern)}`).join('\n')}
╰──────────────❍`;
};

// image check
const isValidImageUrl = (url) => {
    if (!url || typeof url !== 'string') return false;
    return url.match(/\.(jpg|jpeg|png|gif|webp)$/i);
};

cmd({
    pattern: "menu",
    alias: ["m","help","allmenu","fullmenu"],
    desc: "menu",
    category: "main",
    react: "⚡",
    filename: __filename
},

async (conn, mek, m, { from, reply, userConfig }) => {

    try {

        await conn.sendPresenceUpdate('composing', from);

        let totalCommands = Object.values(commands).filter(c => c.pattern).length;

        const categories = [...new Set(Object.values(commands).map(c => c.category))]
        .filter(c => c && c !== 'undefined');

        const categorized = {};

        categories.forEach(cat => {
            let cmds = Object.values(commands)
            .filter(c => c.category === cat && c.pattern);

            if (cmds.length) categorized[cat] = cmds;
        });

        let menuSections = '';
        for (let [cat, cmds] of Object.entries(categorized)) {
            menuSections += formatCategory(cat, cmds);
        }

        const BOT_NAME = userConfig?.BOT_NAME || config.BOT_NAME || "Bot";
        const OWNER_NAME = userConfig?.OWNER_NAME || config.OWNER_NAME || "Owner";
        const PREFIX = userConfig?.PREFIX || config.PREFIX || ".";
        const MODE = userConfig?.MODE || config.MODE || "private";
        const VERSION = userConfig?.VERSION || config.VERSION || "1.0.0";
        const DESCRIPTION = userConfig?.DESCRIPTION || config.DESCRIPTION || "";

        const BOT_IMAGE = userConfig?.BOT_IMAGE || config.BOT_IMAGE;

        let dec = `
╭═══════════════❍
│      ⚡ ${BOT_NAME} ⚡
╰═══════════════❍

┌─❍ BOT INFO ❍
│ 🤖 Owner : ${OWNER_NAME}
│ 📜 Commands : ${totalCommands}
│ ⏱ Runtime : ${runtime(process.uptime())}
│ 📦 Prefix : ${PREFIX}
│ ⚙️ Mode : ${MODE}
│ 🏷 Version : ${VERSION}
└──────────────❍

${menuSections}

╭──────────────❍
│ ✨ ${DESCRIPTION || ''}
╰──────────────❍
`;

        let imagePath = path.join(__dirname, '../lib/jawadmd.jpg');

        let imageMsg = fs.existsSync(imagePath)
            ? fs.readFileSync(imagePath)
            : { url: imagePath };

        // 🖼 MENU FIRST (AS YOU WANT)
        await conn.sendMessage(from, {
            image: imageMsg,
            caption: dec,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363402493709861@newsletter',
                    newsletterName: BOT_NAME,
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // 🎵 AUDIO AFTER MENU
        if (MENU_AUDIO_URL && MENU_AUDIO_URL.startsWith("http")) {
            await conn.sendMessage(from, {
                audio: { url: MENU_AUDIO_URL },
                mimetype: 'audio/mp4',
                ptt: false 
            }, { quoted: mek });
        }

    } catch (e) {
        console.log(e);
        reply("Error: " + e);
    }
});
