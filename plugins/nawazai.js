const { cmd } = require('../command');

// 🍌 NANOBANANA
cmd({
    pattern: "nanobanana",
    react: "🍌",
    category: "ai",
    filename: __filename
},
async (conn, mek, m, { from, text }) => {

    if (!text) return conn.sendMessage(from, { text: "❌ Prompt لکھو!" }, { quoted: mek });

    let result = `🍌 NanoBanana AI:\n\n${text}\n\n(Free demo mode - API not connected)`;

    await conn.sendMessage(from, { text: result }, { quoted: mek });
});


// 💻 BLACKBOX
cmd({
    pattern: "blackbox",
    react: "💻",
    category: "ai",
    filename: __filename
},
async (conn, mek, m, { from, text }) => {

    if (!text) return conn.sendMessage(from, { text: "❌ Question لکھو!" }, { quoted: mek });

    let result = `💻 Blackbox AI:\n\n${text}\n\n(Free demo mode - API not connected)`;

    await conn.sendMessage(from, { text: result }, { quoted: mek });
});


// 🖼️ GEMINI IMAGE
cmd({
    pattern: "geminiimg",
    react: "🖼️",
    category: "ai",
    filename: __filename
},
async (conn, mek, m, { from, text }) => {

    if (!text) return conn.sendMessage(from, { text: "❌ Image prompt لکھو!" }, { quoted: mek });

    let result = `🖼️ Gemini Image AI:\n\nPrompt: ${text}\n\n(Free demo mode - API not connected)`;

    await conn.sendMessage(from, { text: result }, { quoted: mek });
});


// 🎨 SEAART
cmd({
    pattern: "seaart",
    react: "🎨",
    category: "ai",
    filename: __filename
},
async (conn, mek, m, { from, text }) => {

    if (!text) return conn.sendMessage(from, { text: "❌ Prompt لکھو!" }, { quoted: mek });

    let result = `🎨 SeaArt AI:\n\nPrompt: ${text}\n\n(Free demo mode - API not connected)`;

    await conn.sendMessage(from, { text: result }, { quoted: mek });
});
