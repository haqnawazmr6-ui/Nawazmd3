const { cmd } = require("../command");

cmd({
    pattern: "sand",
    desc: "Send custom video",
    category: "media",
    react: "🎬",
    filename: __filename
},
async (conn, mek, m, { reply }) => {
    try {

        await conn.sendMessage(
            m.chat,
            {
                video: {
                    url: "https://files.catbox.moe/e3yubm.mp4"
                },
                mimetype: "video/mp4",
                caption: "🎥 Here is your video"
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e.message}`);
    }
});
