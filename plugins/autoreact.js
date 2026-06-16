const { cmd } = require('../command');

let autoReact = false;

// Heart reactions list (ROTATING)
const hearts = [
    "❤️", "💖", "💗", "💕", "💓",
    "💞", "💘", "💝", "💟"
];

let index = 0;

// ON/OFF COMMAND
cmd({
    pattern: "autoreact",
    desc: "Rotating Heart Reactions ON/OFF",
    category: "settings",
    react: "❤️",
    filename: __filename
},
async (conn, m, msg, { args, reply }) => {

    const action = (args[0] || "").toLowerCase();

    if (action === "on") {
        autoReact = true;
        return reply("❤️ Rotating Heart React ON");
    }

    if (action === "off") {
        autoReact = false;
        return reply("💔 Rotating Heart React OFF");
    }

    return reply("Use:\n.autoreact on\n.autoreact off");
});


// AUTO REACT SYSTEM (ROTATING HEARTS)
cmd({
    on: "body",
    dontAddCommandList: true,
    filename: __filename
},
async (conn, m) => {

    try {

        if (!autoReact) return;
        if (m.fromMe) return;

        // pick next heart emoji
        const emoji = hearts[index];

        // rotate index
        index = (index + 1) % hearts.length;

        await m.react(emoji);

    } catch (e) {
        console.log("AutoReact Error:", e);
    }

});
