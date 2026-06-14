const { cmd } = require('../command');

cmd({
    pattern: "alive",
    alias: ["status", "runtime"],
    desc: "Alive message with video",
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

        // 🔥 ALIVE TEXT (HACKER STYLE)
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

        // 🎥 VIDEO LINK (YAHAN APNA LINK DAALNA HAI)
        const videoLink = "https://your-video-link.mp4";

        // 1️⃣ ALIVE MESSAGE SEND
        await conn.sendMessage(from, {
            text: text,
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

        // 2️⃣ VIDEO AUTO SEND AFTER ALIVE
        await conn.sendMessage(from, {
            video: { url: videoLink },
            caption: `
╔════════════╗
🎥 LIVE VIDEO
╚════════════╝

🤖 NAWAZ TECH MD
`,
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        conn.sendMessage(from, { text: "❌ Error in alive command" });
    }

});
