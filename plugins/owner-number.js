const { cmd } = require('../command');

cmd({
    pattern: "owner",
    alias: ["creator", "dev"],
    desc: "Show owner contact",
    category: "main",
    react: "👤",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {

    try {

        // 👇 یہاں اپنا نمبر change کرنا ہے
        const ownerNumber = "923178856224";
        const ownerName = "Nawaz Tech";

        let text = `╔════════════════════╗
👑 OWNER INFO
╚════════════════════╝

👤 Name : ${ownerName}
📞 Number : wa.me/${ownerNumber}

━━━━━━━━━━━━━━
🤖 NAWAZ TECH MD
`;

        await conn.sendMessage(from, {
            text: text,
            contextInfo: {
                externalAdReply: {
                    title: ownerName,
                    body: "Tap to contact owner",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    sourceUrl: `https://wa.me/${ownerNumber}`
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("Error: " + e);
    }

});
