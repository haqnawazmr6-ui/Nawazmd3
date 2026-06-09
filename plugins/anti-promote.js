const { cmd } = require("../command");

async function blockPromote(sock, m, from, quoted, isGroup) {
  if (!isGroup) return;

  let user =
    quoted?.sender ||
    m.mentionedJid?.[0] ||
    m.message?.extendedTextMessage?.contextInfo?.participant;

  if (!user) return;

  // FORCE DEMOTE (if somehow promoted)
  try {
    await sock.groupParticipantsUpdate(from, [user], "demote");
  } catch (e) {}
}

// BLOCK .promote
cmd({
  pattern: "promote",
  category: "system",
  filename: __filename
}, async (sock, m, msg, ctx) => {
  await blockPromote(sock, m, ctx.from, ctx.quoted, ctx.isGroup);
  return m.reply("⛔ Promote disabled");
});


// BLOCK .p (THIS IS YOUR MAIN ISSUE FIX)
cmd({
  pattern: "p",
  category: "system",
  filename: __filename
}, async (sock, m, msg, ctx) => {
  await blockPromote(sock, m, ctx.from, ctx.quoted, ctx.isGroup);
  return m.reply("⛔ P promote disabled");
});
