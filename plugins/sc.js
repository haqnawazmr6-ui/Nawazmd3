const { cmd } = require('../command');

cmd({
    pattern: "sc",
    desc: "Show bot info",
    category: "main",
    react: "⚙️",
    filename: __filename
},
async (conn, mek, m, { from }) => {

    const botLink = "https://nawazmd.vercel.app/";

    const message = `
✦══════════════════════✦
     📢 NAWAZ-MD NEWS
✦══════════════════════✦

🤖 BOT INFORMATION

🌐 BOT LINK:
${botLink}

━━━━━━━━━━━━━━

⚡ Powered by Nawaz MD
✦══════════════════════✦
`.trim();

    await conn.sendMessage(from, {
        text: message,
        contextInfo: {
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363426829681935@newsletter",
                newsletterName: "NAWAZ-MD UPDATES",
                serverMessageId: 1
            }
        }
    }, { quoted: mek });

});
