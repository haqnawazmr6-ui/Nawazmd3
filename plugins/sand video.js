const { cmd } = require("../command");

cmd({
    pattern: "sand",
    desc: "Send random video",
    category: "media",
    react: "🙈",
    dontAddCommandList: true,
    filename: __filename
},
async (conn, mek, m, { reply }) => {
    try {

        const videos = [
            "https://files.catbox.moe/e3yubm.mp4",
            "https://files.catbox.moe/v73ynj.mp4",
            "https://files.catbox.moe/wl6qs3.mp4",
            "https://files.catbox.moe/62gbdz.mp4"
        ];

        const randomVideo = videos[Math.floor(Math.random() * videos.length)];

        await conn.sendMessage(
            m.chat,
            {
                video: {
                    url: randomVideo
                },
                mimetype: "video/mp4",
                caption: "🎬 Random Video"
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e.message}`);
    }
});
