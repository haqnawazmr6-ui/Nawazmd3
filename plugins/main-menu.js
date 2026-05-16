const config = require('../config')
const { cmd, commands } = require('../command');
const path = require('path');
const fs = require('fs');
const { runtime } = require('../lib/functions')

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

        // SAFE COMMAND LIST (NO CRASH FIX)
        let allCmds = Object.values(commands).filter(c => c && typeof c === 'object' && c.pattern);

        let totalCommands = allCmds.length;

        const categories = [...new Set(allCmds.map(c => c?.category))]
            .filter(c => c && c !== 'undefined');

        const categorized = {};

        categories.forEach(cat => {

            let cmds = allCmds.filter(c => c.category === cat && c.pattern);

            if (cmds.length) categorized[cat] = cmds;
        });

        let menuSections = '';

        for (let [cat, cmds] of Object.entries(categorized)) {
            menuSections += `
╭━━━❰ ${cat.toUpperCase()} ❱━━━⬣
${cmds.map(c => `┃ ✦ ${c.pattern}`).join('\n')}
╰━━━━━━━━━━━━━━━━━━⬣`;
        }

        const BOT_NAME = userConfig?.BOT_NAME || config.BOT_NAME || "Bot";
        const OWNER_NAME = userConfig?.OWNER_NAME || config.OWNER_NAME || "Owner";
        const PREFIX = userConfig?.PREFIX || config.PREFIX || ".";
        const MODE = userConfig?.MODE || config.MODE || "private";
        const VERSION = userConfig?.VERSION || config.VERSION || "1.0.0";
        const DESCRIPTION = userConfig?.DESCRIPTION || config.DESCRIPTION || "";

        const dec = `
┏━━━〔 🤖 ${BOT_NAME.toUpperCase()} MENU 〕━━━┓

┃ 👤 Owner   : ${OWNER_NAME}
┃ 📌 Prefix  : ${PREFIX}
┃ 📜 Commands: ${totalCommands}
┃ ⏱ Runtime  : ${runtime(process.uptime())}
┃ 🏷 Version : ${VERSION}
┃ ⚙️ Mode    : ${MODE}

┗━━━━━━━━━━━━━━━━━━━━━━┛

${menuSections}

┏━━━〔 ✨ DESCRIPTION 〕━━━┓
┃ ${DESCRIPTION || "Bot Menu"}
┗━━━━━━━━━━━━━━━━━━━━━━┛
`;

        // SAFE IMAGE LOAD (BOT DP + FALLBACK)
        let imageMsg = await conn.profilePictureUrl(conn.user.id, 'image')
            .catch(() => null);

        if (!imageMsg) {
            let imagePath = path.join(__dirname, '../lib/jawadmd.jpg');
            imageMsg = fs.existsSync(imagePath)
                ? fs.readFileSync(imagePath)
                : null;
        }

        await conn.sendMessage(from, {
            image: imageMsg,
            caption: dec,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363402493709861@newsletter',
                    newsletterName: "𝙉𝘼𝙒𝘼𝙕 𝙈𝘿",
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("Error: " + e.message);
    }
});
