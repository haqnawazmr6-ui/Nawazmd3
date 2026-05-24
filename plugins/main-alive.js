const config = require('../config')
const { cmd } = require('../command')

cmd({
    pattern: "alive",
    react: "⚡",
    alias: ["online"],
    desc: "Alive Check",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from }) => {

await conn.sendMessage(from, {
image: { url: "https://files.catbox.moe/rehpq1.png" },

caption: `> POWERED BY NAWAZ-MD ☠️`,

contextInfo: {
forwardingScore: 999,
isForwarded: true,

forwardedNewsletterMessageInfo: {
newsletterJid: "120363402493709861@newsletter",
newsletterName: "NAWAZ-MD",
serverMessageId: 143
}
}

}, { quoted: mek })

// 🎵 Audio Send After Image
await conn.sendMessage(from, {
audio: { url: "https://files.catbox.moe/gaae1e" },
mimetype: "audio/mp4",
ptt: false 
}, { quoted: mek })

})
