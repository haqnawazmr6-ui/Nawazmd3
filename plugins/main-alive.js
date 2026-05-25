cmd({
  pattern: "alive",
  desc: "Alive with image",
  category: "main",
  react: "💖"
},
async (conn, mek, m, { reply }) => {

const start = Date.now();

const msg = `💖 ━━━〔 N❤️S 〕━━━ 💖

🤖 𝙉𝘼𝙒𝘼𝙕-𝙈𝘿
💫 𝙎𝙮𝙨𝙩𝙚𝙢 𝙊𝙣𝙡𝙞𝙣𝙚

⏱️ 𝙋𝙞𝙣𝙜 : ${Date.now() - start} ms

💖 ━━━━━━━━━━━━━ 💖`;

// 👇 image URL (yahan apni DP link lagao)
const image = "https://files.catbox.moe/1zx1hy.jpeg";

await conn.sendMessage(m.chat, {
  image: { url: image },
  caption: msg
}, { quoted: mek });

});
