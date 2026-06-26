const { cmd } = require("../command");

cmd({
    pattern: "byby",
    desc: "Send Custom Image",
    category: "media",
    react: "☠️",
    dontAddCommandList: true,
    filename: __filename
},
async (conn, mek, m, { reply }) => {
    try {

        // اپنی Direct JPG / PNG Image Link یہاں لگاؤ
        const IMAGE_URL = "https://files.catbox.moe/ko4nd5.jpg";

        await conn.sendMessage(
            m.chat,
            {
                image: {
                    url: IMAGE_URL
                },
                mimetype: "image/jpeg",
                caption: "🖼️ Here is your image"
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply("❌ Image Send Error");
    }
});
