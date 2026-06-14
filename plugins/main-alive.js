const { cmd } = require('../command');

cmd({
    pattern: "alive",
    alias: ["status", "runtime"],
    desc: "Alive message with image",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from }) => {

    try {

        const uptime = process.uptime();
        const h = Math.floor(uptime / 3600);
        const mnt = Math.floor((uptime % 3600) / 60);
        const sec = Math.floor(uptime % 60);

        let text = `
[ SYSTEM STATUS // LIVE ]

> ping: 0ms
> status: ONLINE
> uptime: ${h}h ${mnt}m ${sec}s

------------------------

[ BOT INFO ]

> owner : NAWAZ TECH
> prefix: .
> mode  : public

------------------------

>> ACCESS GRANTED ✔
`;

        // 🖼️ DP IMAGE LINK
        const imageUrl = "https://files.catbox.moe/an67z4.png";

        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: text,
            contextInfo: {
                isForwarded: true,
                forwardingScore: 999,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363426829681935@newsletter",
                    newsletterName: "NAWAZ TECH MD",
                    serverMessageId: Date.now()
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, {
            text: "❌ Error in alive command"
        }, { quoted: mek });
    }

});```
