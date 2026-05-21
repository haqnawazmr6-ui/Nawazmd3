const { cmd } = require('../command');

// ON/OFF STATE
let autoStatusLike = true;

/**
 * COMMAND: Toggle Status Like
 */
cmd({
    pattern: "statuslike",
    alias: ["autostatus", "statusreact"],
    desc: "Toggle Auto Status Like",
    category: "auto",
    react: "❤️",
    filename: __filename
},
async (conn, mek, m, { reply }) => {

    autoStatusLike = !autoStatusLike;

    if (autoStatusLike) {
        return reply("✅ Auto Status Like ON\n\n> Powered By NAWAZ-MD");
    } else {
        return reply("❌ Auto Status Like OFF\n\n> Powered By NAWAZ-MD");
    }
});


/**
 * AUTO STATUS REACT HANDLER
 * This runs in background (no command needed)
 */
module.exports = async (conn, m) => {

    try {

        if (!autoStatusLike) return;

        if (!m.key) return;

        // Detect WhatsApp Status Broadcast
        if (m.key.remoteJid === 'status@broadcast') {

            const emojis = [
                "❤️",
                "🔥",
                "😍",
                "💖",
                "💕",
                "💞",
                "💓"
            ];

            const emoji = emojis[Math.floor(Math.random() * emojis.length)];

            await conn.sendMessage(m.key.remoteJid, {
                react: {
                    text: emoji,
                    key: m.key
                }
            });

            console.log("✅ Status React Sent");

        }

    } catch (error) {
        console.log("❌ Status React Error:", error);
    }
};
