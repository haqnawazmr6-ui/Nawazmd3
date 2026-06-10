const { cmd } = require('../command');

cmd({
pattern: "owner",
desc: "Get owner number",
category: "main",
react: "💀",
filename: __filename
}, async (sock, m, msg, { from }) => {
try {

const OWNER_NUMBER = "923087069523";
const OWNER_NAME = "Nawaz Tech";
const TEAM_NAME = "NAWAZ TECH MD";

await sock.sendPresenceUpdate("composing", from);

const vcard =
  'BEGIN:VCARD\n' +
  'VERSION:3.0\n' +
  `FN:${OWNER_NAME}\n` +
  `ORG:${TEAM_NAME};\n` +
  `TEL;type=CELL;type=VOICE;waid=${OWNER_NUMBER}:+${OWNER_NUMBER}\n` +
  'END:VCARD';

// 📌 CONTACT (same style + only newsletter added)
await sock.sendMessage(from, {
  contacts: {
    displayName: OWNER_NAME,
    contacts: [{ vcard }]
  },
  contextInfo: {
    isForwarded: true,
    forwardingScore: 999,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363426829681935@newsletter",
      newsletterName: "NawazTechX",
      serverMessageId: Date.now()
    }
  }
});

// 📌 REACTION
await sock.sendMessage(from, {
  react: { text: "💓", key: m.key }
});

} catch (e) {
console.error(e);
}
});
