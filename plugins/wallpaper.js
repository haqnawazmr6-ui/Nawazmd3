const { cmd } = require("../command");
const axios = require("axios");

cmd({
    pattern: "wallpaper",
    desc: "Send random wallpaper",
    category: "media",
    react: "🔞",
    filename: __filename
},
async (conn, mek, m, { reply }) => {

    try {

        // Random wallpaper API
        let url = "https://source.unsplash.com/random/1080x1920?nature,wallpaper";

        await conn.sendMessage(m.chat, {
            image: { url: url },
            caption: "🖼️ Wallpaper\n⚡ Powered by NAWAZ-MD"
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("❌ Wallpaper fetch error");
    }

});
