const { cmd } = require("../command");

cmd({
  pattern: "promote",
  desc: "Completely disable promote system",
  category: "system",
  react: "⛔",
  filename: __filename
}, async (sock, m, msg, { from, quoted, isGroup }) => {

  try {
    if (!isGroup) return;

    let user =
      quoted?.sender ||
      m.mentionedJid?.[0] ||
      m.message?.extendedTextMessage?.contextInfo?.participant;

    if (!user) return m.reply("❌ Reply or mention user");

    // STEP 1: try promote (if any old plugin triggers)
    try {
      await sock.groupParticipantsUpdate(from, [user], "promote");
    } catch (e) {
      console.log("Promote blocked:", e);
    }

    // STEP 2: instantly demote (force cancel promote)
    setTimeout(async () => {
      try {
        await sock.groupParticipantsUpdate(from, [user], "demote");
      } catch (e) {
        console.log("Auto demote error:", e);
      }
    }, 500);

    return m.reply("⛔ Promote system disabled (no admin allowed)");

  } catch (e) {
    console.log(e);
  }
});
