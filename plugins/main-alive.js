const { cmd } = require('../command');

cmd({
    pattern: "alive",
    alias: ["live"],
    desc: "Check uptime and system status",
    category: "main",
    react: "🟢",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {

        await conn.sendMessage(from, { react: { text: '⏳', key: m.key } });

        await new Promise(r => setTimeout(r, 700));

        const formatUptime = (seconds) => {
            const days = Math.floor(seconds / (3600 * 24));
            const hours = Math.floor((seconds % (3600 * 24)) / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secs = Math.floor(seconds % 60);

            let timeString = '';
            if (days) timeString += `${days}d `;
            if (hours) timeString += `${hours}h `;
            if (minutes) timeString += `${minutes}m `;
            if (!timeString) timeString = `${secs}s`;

            return timeString.trim();
        };

        const uptime = formatUptime(process.uptime());

        const status = `
╔═━──────━▒ ۞ ▒━──────━═╗
        🟢 NAWAZ MD LIVE
╚═━──────━▒ ۞ ▒━──────━═╝

🤖 Bot Status : ONLINE
⏱ Uptime     : ${uptime}
⚡ System     : Stable
📡 Mode       : Active

> Powered by Nawaz MD
`;

        await conn.sendMessage(from, {
            text: status,

            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,

                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363402493709861@newsletter",
                    newsletterName: "NAWAZ MD LIVE",
                    serverMessageId: 1
                }
            }

        }, { quoted: mek });

        await conn.sendMessage(from, {
            react: { text: '✅', key: m.key }
        });

    } catch (e) {
        console.log("Alive Error:", e);
        await conn.sendMessage(from, { react: { text: '❌', key: m.key } });
        reply("❌ Error in alive command");
    }
});
