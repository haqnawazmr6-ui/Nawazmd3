const { cmd } = require('../command');

cmd({
    pattern: "alive",
    desc: "Premium alive",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from }) => {

    const reacts = ["💎","⚡","🔥","🚀","👑","✨","🌟","💠","🎯","🛸"];
    const randomReact = reacts[Math.floor(Math.random() * reacts.length)];

    await conn.sendMessage(from, {
        react: { text: randomReact, key: m.key }
    });

    await conn.sendMessage(from, {
        text: " > POWERED BY NAWAZ MD",
        contextInfo: {
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363402493709861@newsletter",
                newsletterName: "NAWAZ-MD",
                serverMessageId: Math.floor(Math.random() * 999999)
            }
        }
    }, { quoted: mek });

});
