const { cmd } = require('../command');

cmd({
    pattern: "repo",
    desc: "Show server link",
    category: "main",
    react: "📦",
    filename: __filename
},
async (conn, mek, m, { from }) => {

    const serverLink = "https://nawazmd.vercel.app/";

    const message = `
✦✦✦✦✦✦✦✦✦✦
   📦 NAWAZ-MD REPO
✦✦✦✦✦✦✦✦✦✦

🌐 SERVER LINK:
🔗 ${serverLink}

⚡ Nawaz MD System
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
