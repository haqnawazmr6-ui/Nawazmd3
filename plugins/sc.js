const { cmd } = require('../command');

cmd({
    pattern: "sc",
    desc: "Show bot info",
    category: "main",
    react: "⚙️",
    filename: __filename
},
async (conn, mek, m, { from }) => {

    const ownerNumber = "923087069523";
    const serverLink = "https://nawazmd.vercel.app/";

    const message = `
🤖 NAWAZ-MD INFO

👤 OWNER:
${ownerNumber}

🌐 SERVER:
${serverLink}

━━━━━━━━━━━━━━
⚡ Power by Nawaz MD
`;

    await conn.sendMessage(from, { text: message }, { quoted: mek });

});
