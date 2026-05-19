const { cmd } = require('../command');

//================ FAKE HACKER COMMANDS ================//

cmd({
    pattern: "hack1",
    desc: "Fake Hacker Command",
    category: "fun",
    react: "💻",
    filename: __filename
},
async(conn, mek, m) => {
    await conn.sendMessage(mek.chat, {
        text: "💻 Fake Hacker Mode Activated..."
    }, { quoted: mek });
});

cmd({
    pattern: "hack2",
    desc: "Fake Hacker Command",
    category: "fun",
    react: "🛰️",
    filename: __filename
},
async(conn, mek, m) => {
    await conn.sendMessage(mek.chat, {
        text: "🛰️ Target IP Tracking Started..."
    }, { quoted: mek });
});

cmd({
    pattern: "hack3",
    desc: "Fake Hacker Command",
    category: "fun",
    react: "🔓",
    filename: __filename
},
async(conn, mek, m) => {
    await conn.sendMessage(mek.chat, {
        text: "🔓 Firewall Bypass Success..."
    }, { quoted: mek });
});

cmd({
    pattern: "hack4",
    desc: "Fake Hacker Command",
    category: "fun",
    react: "📂",
    filename: __filename
},
async(conn, mek, m) => {
    await conn.sendMessage(mek.chat, {
        text: "📂 Secret Files Access Granted..."
    }, { quoted: mek });
});

cmd({
    pattern: "hack5",
    desc: "Fake Hacker Command",
    category: "fun",
    react: "⚠️",
    filename: __filename
},
async(conn, mek, m) => {
    await conn.sendMessage(mek.chat, {
        text: "⚠️ System Security Weak Detected..."
    }, { quoted: mek });
});

cmd({
    pattern: "hack6",
    desc: "Fake Hacker Command",
    category: "fun",
    react: "📶",
    filename: __filename
},
async(conn, mek, m) => {
    await conn.sendMessage(mek.chat, {
        text: "📶 WiFi Password Cracked Successfully..."
    }, { quoted: mek });
});

cmd({
    pattern: "hack7",
    desc: "Fake Hacker Command",
    category: "fun",
    react: "📡",
    filename: __filename
},
async(conn, mek, m) => {
    await conn.sendMessage(mek.chat, {
        text: "📡 Satellite Connection Established..."
    }, { quoted: mek });
});

cmd({
    pattern: "hack8",
    desc: "Fake Hacker Command",
    category: "fun",
    react: "🧠",
    filename: __filename
},
async(conn, mek, m) => {
    await conn.sendMessage(mek.chat, {
        text: "🧠 AI Hacker Brain Enabled..."
    }, { quoted: mek });
});

cmd({
    pattern: "hack9",
    desc: "Fake Hacker Command",
    category: "fun",
    react: "💣",
    filename: __filename
},
async(conn, mek, m) => {
    await conn.sendMessage(mek.chat, {
        text: "💣 Virus Uploading 1%..."
    }, { quoted: mek });
});

cmd({
    pattern: "hack10",
    desc: "Fake Hacker Command",
    category: "fun",
    react: "☠️",
    filename: __filename
},
async(conn, mek, m) => {
    await conn.sendMessage(mek.chat, {
        text: "☠️ Virus Upload Completed 100%..."
    }, { quoted: mek });
});

cmd({
    pattern: "hack11",
    desc: "Fake Hacker Command",
    category: "fun",
    react: "🔍",
    filename: __filename
},
async(conn, mek, m) => {
    await conn.sendMessage(mek.chat, {
        text: "🔍 Searching Hidden Database..."
    }, { quoted: mek });
});

cmd({
    pattern: "hack12",
    desc: "Fake Hacker Command",
    category: "fun",
    react: "🖥️",
    filename: __filename
},
async(conn, mek, m) => {
    await conn.sendMessage(mek.chat, {
        text: "🖥️ Hacker Terminal Opened..."
    }, { quoted: mek });
});

cmd({
    pattern: "hack13",
    desc: "Fake Hacker Command",
    category: "fun",
    react: "📲",
    filename: __filename
},
async(conn, mek, m) => {
    await conn.sendMessage(mek.chat, {
        text: "📲 Device Remote Control Enabled..."
    }, { quoted: mek });
});

cmd({
    pattern: "hack14",
    desc: "Fake Hacker Command",
    category: "fun",
    react: "🛡️",
    filename: __filename
},
async(conn, mek, m) => {
    await conn.sendMessage(mek.chat, {
        text: "🛡️ Antivirus Disabled Successfully..."
    }, { quoted: mek });
});

cmd({
    pattern: "hack15",
    desc: "Fake Hacker Command",
    category: "fun",
    react: "🌐",
    filename: __filename
},
async(conn, mek, m) => {
    await conn.sendMessage(mek.chat, {
        text: "🌐 Dark Web Connection Successful..."
    }, { quoted: mek });
});

cmd({
    pattern: "hack16",
    desc: "Fake Hacker Command",
    category: "fun",
    react: "🔑",
    filename: __filename
},
async(conn, mek, m) => {
    await conn.sendMessage(mek.chat, {
        text: "🔑 Password Decryption Started..."
    }, { quoted: mek });
});

cmd({
    pattern: "hack17",
    desc: "Fake Hacker Command",
    category: "fun",
    react: "📤",
    filename: __filename
},
async(conn, mek, m) => {
    await conn.sendMessage(mek.chat, {
        text: "📤 Sending Fake Hack Logs..."
    }, { quoted: mek });
});

cmd({
    pattern: "hack18",
    desc: "Fake Hacker Command",
    category: "fun",
    react: "⚡",
    filename: __filename
},
async(conn, mek, m) => {
    await conn.sendMessage(mek.chat, {
        text: "⚡ Super Hacker Power Enabled..."
    }, { quoted: mek });
});

cmd({
    pattern: "hack19",
    desc: "Fake Hacker Command",
    category: "fun",
    react: "👁️",
    filename: __filename
},
async(conn, mek, m) => {
    await conn.sendMessage(mek.chat, {
        text: "👁️ Camera Access Granted..."
    }, { quoted: mek });
});

cmd({
    pattern: "hack20",
    desc: "Fake Hacker Command",
    category: "fun",
    react: "🚀",
    filename: __filename
},
async(conn, mek, m) => {
    await conn.sendMessage(mek.chat, {
        text: "🚀 Mission Completed Successfully..."
    }, { quoted: mek });
});
