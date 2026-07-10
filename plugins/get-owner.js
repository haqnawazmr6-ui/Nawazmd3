const { cmd } = require('../command');

cmd({
    pattern: "owner",
    desc: "Show Owner Telegram",
    category: "main",
    react: "💀",
    filename: __filename
}, async (sock, m, msg, { from }) => {
    try {

        const TELEGRAM = "https://t.me/nawazmdowner";

        await sock.sendPresenceUpdate("composing", from);

        await sock.sendMessage(from, {
            text: `╭──〔 👑 *OWNER* 〕──⬣
│
│ 🔗 *Telegram:*
│ ${TELEGRAM}
│
╰────────────⬣`,
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

        await sock.sendMessage(from, {
            react: {
                text: "☠️",
                key: m.key
            }
        });

    } catch (e) {
        console.error(e);
    }
});
