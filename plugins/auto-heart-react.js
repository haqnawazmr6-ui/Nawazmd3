const { cmd } = require('../command');

// enabled chats storage
const reactionEnabledChats = new Map();

// YOUR EMOJI LIST
const REACTIONS = [
    "💟","🧡","💛","💚","💙","🤎","🖤","🤍",
    "💔","💗","💕","❤️","❣️"
];

// TOGGLE COMMAND
cmd({
    pattern: "autoreact",
    desc: "Enable/Disable auto reaction system",
    category: "owner",
    react: "💟",
    filename: __filename
},
async (conn, m, msg, { from, reply }) => {

    const current = reactionEnabledChats.get(from) || false;
    reactionEnabledChats.set(from, !current);

    if (!current) {
        reply("💟 Auto Reaction ENABLED");
    } else {
        reply("❌ Auto Reaction DISABLED");
    }
});


// AUTO REACTION ENGINE
cmd({
    on: "messages.upsert",
    filename: __filename
},
async (conn, data) => {

    try {

        const msg = data.messages?.[0];
        if (!msg || !msg.message) return;

        const chat = msg.key.remoteJid;

        // check if enabled
        if (!reactionEnabledChats.get(chat)) return;

        // ignore bot messages
        if (msg.key.fromMe) return;

        if (chat === "status@broadcast") return;

        // pick random emoji
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
