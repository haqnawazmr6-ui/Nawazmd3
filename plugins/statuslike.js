const { cmd } = require('../command');

// AUTO STATUS LIKE ALWAYS ON
let autoStatusLike = true;

cmd({
    pattern: "statuslike",
    alias: ["autostatus", "statusreact"],
    desc: "Check Auto Status Like Status",
    category: "auto",
    react: "❤️",
    filename: __filename
},
async (conn, mek, m, { reply }) => {

    if (autoStatusLike) {
        reply("✅ Auto Status Like Already ON\n\n> Powered By NAWAZ-MD");
    } else {
        reply("❌ Auto Status Like OFF\n\n> Powered By NAWAZ-MD");
    }
});

// AUTO STATUS REACT SYSTEM

module.exports = {
    async before(m, { conn }) {

        try {

            if (!autoStatusLike) return;

            if (m.key && m.key.remoteJid === "status@broadcast") {

                const emojis = [
                    "❤️",
                    "🔥",
                    "😍",
                    "💖",
                    "💕",
                    "💞"
                ];

                const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

                await conn.sendMessage(
                    m.key.remoteJid,
                    {
                        react: {
                            text: randomEmoji,
                            key: m.key
                        }
                    }
                );

                console.log("✅ Status Liked Automatically | Powered By NAWAZ-MD");

            }

        } catch (e) {
            console.log("Status React Error:", e);
        }
    }
};
