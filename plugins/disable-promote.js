const { cmd } = require("../command");

cmd({
  pattern: "promote",
  desc: "SYSTEM OVERRIDE - Disable all promote actions",
  category: "system",
  react: "⛔",
  filename: __filename
}, async (sock, m, msg, { isGroup }) => {

  try {
    if (!isGroup) return;

    // HARD BLOCK (no action at all)
    return m.reply("⛔ Promote system is disabled by admin");

  } catch (e) {
    console.log(e);
  }
});
