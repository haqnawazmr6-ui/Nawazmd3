const { cmd } = require('../command');

cmd({
    pattern: "aimenu",
    react: "🤖",
    category: "ai",
    filename: __filename
},
async (conn, mek, m, { from, pushname }) => {

const menu = `
╭━━〔 🤖 AI MENU 🤖 〕━━⬣
┃
┃ 👋 Hello ${pushname}
┃
┣━━〔 AI COMMANDS 〕━━⬣
┃
┃ 💬 .ai <question>
┃ 💬 .gpt <question>
┃ 💬 .blackbox <question>
┃ 💬 .gemini <question>
┃
┣━━〔 IMAGE AI 〕━━⬣
┃
┃ 🖼️ .geminiimg <prompt>
┃ 🖼️ .seaart <prompt>
┃ 🖼️ .nanobanana <prompt>
┃ 🖼️ .imagine <prompt>
┃
┣━━〔 SEARCH TOOLS 〕━━⬣
┃
┃ 🔍 .google <text>
┃ 🔍 .yts <text>
┃ 🔍 .wiki <text>
┃
┣━━〔 GROUP SECURITY 〕━━⬣
┃
┃ 🛡️ .antibot on
┃ 🛡️ .antibot off
┃ 🛡️ .antilink on
┃ 🛡️ .antilink off
┃
┣━━〔 OWNER TOOLS 〕━━⬣
┃
┃ ⚡ .restart
┃ ⚡ .ping
┃ ⚡ .alive
┃
╰━━━━━━━━━━━━━━⬣

> POWERED BY NawazTechX 👾
`;

await conn.sendMessage(from, {
    image: { url: 'https://files.catbox.moe/f2qbux.png' },
    caption: menu
}, { quoted: mek });

});
