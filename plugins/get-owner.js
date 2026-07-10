const { cmd } = require("../command");

cmd({
    pattern: "king",
    alias: ["owner1", "owner2"],
    desc: "Owner Telegram",
    category: "main",
    react: "💀",
    filename: __filename
}, async (sock, m, msg, { from }) => {
    try {

        const TELEGRAM = "https://t.me/nawazmdowner";

        await sock.sendPresenceUpdate("composing", from);

        await sock.sendMessage(from, {
            text: `╭━━〔 👑 𝗢𝗪𝗡𝗘𝗥 〕━━⬣
┃
┃ 🔗 *Telegram*
┃ ${TELEGRAM}
┃
┃ 💬 Contact me on Telegram
┃ For Support & Help
┃
╰━━━━━━━━━━━━━━⬣`,
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
