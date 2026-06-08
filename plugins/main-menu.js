const config = require('../config')
const { cmd, commands } = require('../command');
const path = require('path');
const os = require("os")
const fs = require('fs');
const { runtime } = require('../lib/functions')
const axios = require('axios')

// Category format
const formatCategory = (category, cmds) => {

    const validCmds = cmds.filter(cmd => cmd.pattern && cmd.pattern.trim() !== '');
    if (validCmds.length === 0) return '';

    let title = `\n▰▰▰『 ${category.toUpperCase()} 』▰▰▰\n`;

    let body = validCmds.map(cmd => `➥ .${cmd.pattern || ''}`).join('\n');

    let footer = `\n▰▰▰▰▰▰▰▰▰▰`;

    return `${title}${body}${footer}`;
};

// Image check
const isValidImageUrl = (url) => {
    if (!url || typeof url !== 'string' || url.trim() === '') return false;
    return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].some(ext =>
        url.toLowerCase().endsWith(ext)
    );
};

cmd({
    pattern: "menu",
    alias: ["m", "help", "allmenu", "fullmenu"],
    use: '.menu',
    desc: "Show all bot commands",
    category: "main",
    react: "🖥️",
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

        // 🔥 YAHAN APNI DP KA URL LAGA DO
        const DEFAULT_MENU_IMAGE = "https://files.catbox.moe/an67z4.png";

        let imageToUse = BOT_IMAGE || DEFAULT_MENU_IMAGE;

        // invalid URL fallback
        if (!isValidImageUrl(imageToUse)) {
            imageToUse = DEFAULT_MENU_IMAGE;
        }

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

        await conn.sendMessage(from, {
            image: { url: imageToUse },
            caption: dec,
            footer: `${BOT_NAME} Menu`,
            buttons: [
                {
                    buttonId: ".menu",
                    buttonText: { displayText: "📜 MENU" },
                    type: 1
                },
                {
                    buttonId: ".owner",
                    buttonText: { displayText: "👤 OWNER" },
                    type: 1
                },
                {
                    buttonId: ".ping",
                    buttonText: { displayText: "⚡ PING" },
                    type: 1
                }
            ],
            headerType: 4,
            contextInfo: {
                isForwarded: true,
                forwardingScore: 999,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363426829681935@newsletter",
                    newsletterName: "NawazTechX",
                    serverMessageId: Date.now()
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }

});
