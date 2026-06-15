const { cmd } = require('../command');

// ONLY YOUR PROVIDED EMOJIS
const REACTIONS = [
    "💟","🧡","💛","💚","💙","🤎","🤎","🖤","🤍",
    "💔","💗","💕","❤️","❣️"
];

// AUTO REACTION (ALWAYS ON)
cmd({
    on: "messages.upsert",
    filename: __filename
},
async (conn, data) => {

    try {

        const msg = data.messages?.[0];
        if (!msg || !msg.message) return;

        const chat = msg.key.remoteJid;

        // ignore bot messages
        if (msg.key.fromMe) return;

        // ignore status
        if (chat === "status@broadcast") return;

        // pick from ONLY given list
        const emoji = REACTIONS[Math.floor(Math.random() * REACTIONS.length)];

        await conn.sendMessage(chat, {
            react: {
                text: emoji,
                key: msg.key
            }
        });

    } catch (e) {
        console.log("Auto Reaction Error:", e);
    }

});
