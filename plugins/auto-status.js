const { cmd } = require('../command');

// ON/OFF STATE
global.autoStatusLike = global.autoStatusLike ?? true;

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

    global.autoStatusLike = !global.autoStatusLike;

    return reply(
        global.autoStatusLike
            ? "✅ Auto Status Like ON\n\n> Powered By NAWAZ-MD"
            : "❌ Auto Status Like OFF\n\n> Powered By NAWAZ-MD"
    );
});


/**
 * 🔥 SAFE STATUS HANDLER (IMPORTANT FIX)
 * This structure prevents bot crash
 */
module.exports = (conn) => {

    conn.ev.on("messages.upsert", async (chatUpdate) => {
        try {

            const mek = chatUpdate.messages[0];
            if (!mek?.key) return;

            if (!global.autoStatusLike) return;

            const jid = mek.key.remoteJid;

            if (jid !== "status@broadcast") return;

            const emojis = ["❤️","🔥","😍","💖","💞","💯","⚡"];

            const emoji = emojis[Math.floor(Math.random() * emojis.length)];

            await conn.sendMessage(jid, {
                react: {
                    text: emoji,
                    key: mek.key
                }
            });

            console.log("✅ Auto Status React Sent");

        } catch (e) {
            console.log("❌ Status Error:", e);
        }
    });

};
