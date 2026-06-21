const { cmd } = require('../command');

cmd({
    pattern: "alive",
    alias: ["status", "runtime"],
    desc: "Alive message",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from }) => {

    try {

        let text = `🟢 NAWAZ MD ONLINE ⚡ BOT ACTIVE ✔`;

        const imageLink = "https://files.catbox.moe/an67z4.png";

        await conn.sendMessage(from, {
            image: { url: imageLink },
            caption: text,
            contextInfo: {
                isForwarded: true,
                forwardingScore: 999,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363426829681935@newsletter",
                    newsletterName: "NAWAZ TECH MD",
                    serverMessageId: Date.now().toString()
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        conn.sendMessage(from, { text: "❌ Error in alive command" });
    }

});
