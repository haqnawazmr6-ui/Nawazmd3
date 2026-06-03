const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "naatserver",
    alias: ["ns", "server"],
    desc: "Check Naat server status",
    category: "tools",
    react: "📡",
    filename: __filename
},
async (conn, mek, m, { reply }) => {
    try {

        const url = "https://nawazmd.vercel.app/";

        let statusText = "🔴 OFFLINE";
        let emoji = "🔴";

        try {
            const res = await axios.get(url, {
                timeout: 8000
            });

            if (res.status >= 200 && res.status < 300) {
                statusText = "🟢 ONLINE";
                emoji = "🟢";
            }

        } catch (err) {
            statusText = "🔴 OFFLINE";
            emoji = "🔴";
        }

        const text = `
📡 *NAAT SERVER STATUS*

🌐 URL: ${url}

${emoji} Status: ${statusText}

⚡ Powered By Nawaz MD
`;

        await conn.sendMessage(m.chat, {
            text
        }, { quoted: m });

    } catch (e) {
        console.log("naatserver error:", e);
        reply("❌ Error: " + e.message);
    }
});
