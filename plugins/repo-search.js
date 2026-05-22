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
🌐 SERVER LINK:

🔗 ${serverLink}

━━━━━━━━━━━━━━
⚡ Power by Nawaz MD
`;

    await conn.sendMessage(from, {
        text: message
    }, { quoted: mek });

});
