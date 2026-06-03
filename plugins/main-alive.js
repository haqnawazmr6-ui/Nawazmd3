const config = require('../config');
const { cmd, commands } = require('../command');

// ===================== ALIVE =====================
cmd({
    pattern: "alive",
    alias: ["live","update"],
    desc: "Check bot status.",
    category: "main",
    react: "⚡",
    filename: __filename
},

async (conn, mek, m, { from, sender, reply }) => {

    try {

        const reactionEmojis = ['🔥','⚡','🚀','💥','🎯','🎉'];
        const reactionEmoji = reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];

        await conn.sendMessage(from, {
            react: { text: "⚡", key: mek.key }
        });

        const text = `
⚡ 𝗡𝗔𝗪𝗔𝗭-𝗠𝗗 𝗔𝗟𝗜𝗩𝗘

🔥 Status: Active & Running ${reactionEmoji}
`.trim();

        await conn.sendMessage(from, {
            text,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363426829681935@newsletter',
                    newsletterName: "NawazTechX",
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        reply(`Error: ${e.message}`);
    }
});
