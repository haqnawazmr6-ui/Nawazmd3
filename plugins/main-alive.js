cmd({
  pattern: "alive",
  desc: "Check bot status",
  category: "main",
  react: "💖"
},
async (conn, mek, m, { reply }) => {

const start = Date.now();

const msg = `💖 ━━━〔 LIVE 〕━━━ 💖

🤖 𝙉𝘼𝙒𝘼𝘡-𝙈𝘿
💫 System Online

⏱️ Ping : ${Date.now() - start} ms

💖 ━━━━━━━━━━━━━ 💖`;

return reply(msg);

});
