const { cmd } = require('../command');

cmd({
    pattern: "alive",
    desc: "Bot speed check",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from }) => {

    const start = Date.now();

    await conn.sendMessage(from, { react: { text: "⏳", key: m.key } });

    const end = Date.now();
    const speed = end - start;

    const msg = `
╭━━━〔 NAWAZ MD 〕━━━╮
┃  ${speed} ms
╰━━━━━━━━━━━━━━━╯
`;

    await conn.sendMessage(from, {
        text: msg,
        contextInfo: {
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363402493709861@newsletter",
                newsletterName: "NAWAZ-MD",
                serverMessageId: Date.now()
            }
        }
    }, { quoted: mek });

    await conn.sendMessage(from, { react: { text: "✅", key: m.key } });

});
