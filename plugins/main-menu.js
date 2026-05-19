const config = require('../config')
const { cmd, commands } = require('../command');
const path = require('path');
const fs = require('fs');
const { runtime } = require('../lib/functions')
const axios = require('axios')

// Small caps
const toSmallCaps = (text) => {
    if (!text) return '';
    const map = {
        a:'ᴀ',b:'ʙ',c:'ᴄ',d:'ᴅ',e:'ᴇ',f:'ғ',g:'ɢ',h:'ʜ',i:'ɪ',
        j:'ᴊ',k:'ᴋ',l:'ʟ',m:'ᴍ',n:'ɴ',o:'ᴏ',p:'ᴘ',q:'ǫ',r:'ʀ',
        s:'s',t:'ᴛ',u:'ᴜ',v:'ᴠ',w:'ᴡ',x:'x',y:'ʏ',z:'ᴢ'
    };
    return text.split('').map(c => map[c] || c).join('');
};

// Category format
const formatCategory = (category, cmds) => {
    const validCmds = cmds.filter(c => c.pattern && c.pattern.trim());
    if (!validCmds.length) return '';

    return `
▰▰▰『 ${toSmallCaps(category.toUpperCase())} 』▰▰▰
${validCmds.map(cmd => `➥ .${toSmallCaps(cmd.pattern)}`).join('\n')}
▰▰▰▰▰▰▰▰▰▰
`;
};

const isValidImageUrl = (url) => {
    return typeof url === 'string' && url.startsWith('http');
};

const NEWSLETTER_JID = "120363402493709861@newsletter";
const NEWSLETTER_NAME = "NAWAZ-MD";

cmd({
    pattern: "menu",
    alias: ["m","help","allmenu","fullmenu"],
    use: '.menu',
    desc: "Show all bot commands",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, reply, userConfig }) => {

    try {

        await conn.sendPresenceUpdate('composing', from);

        const allCommands = Object.values(commands);
        const categories = [...new Set(allCommands.map(c => c.category))]
            .filter(c => c && c !== 'undefined');

        let menuSections = '';

        for (const cat of categories) {
            const cmds = allCommands.filter(c => c.category === cat);
            menuSections += formatCategory(cat, cmds);
        }

        const BOT_NAME = userConfig?.BOT_NAME || config.BOT_NAME || "Bot";
        const OWNER_NAME = userConfig?.OWNER_NAME || config.OWNER_NAME || "Owner";
        const PREFIX = userConfig?.PREFIX || config.PREFIX || ".";
        const MODE = userConfig?.MODE || config.MODE || "private";
        const VERSION = userConfig?.VERSION || config.VERSION || "1.0.0";
        const DESCRIPTION = userConfig?.DESCRIPTION || config.DESCRIPTION || "";

        let dec = `
▰▰▰『 ${BOT_NAME} 』▰▰▰

👑 Owner : ${OWNER_NAME}
⚡ Commands : ${allCommands.length}
🚀 Runtime : ${runtime(process.uptime())}
📌 Prefix : ${PREFIX}
📡 Mode : ${MODE}
📦 Version : ${VERSION}

${menuSections}

> ${DESCRIPTION || ''}
`;

        let imageToUse = path.join(__dirname, '../lib/ERFAN.jpg');

        await conn.sendMessage(from, {
            image: { url: imageToUse },
            caption: dec,
            contextInfo: {
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: NEWSLETTER_JID,
                    newsletterName: NEWSLETTER_NAME,
                    serverMessageId: Date.now()
                }
            }
        }, { quoted: mek });

        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/zs739d' },
            mimetype: 'audio/mpeg',
            ptt: true,
            contextInfo: {
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: NEWSLETTER_JID,
                    newsletterName: NEWSLETTER_NAME,
                    serverMessageId: Date.now()
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("Error: " + e);
    }

});
