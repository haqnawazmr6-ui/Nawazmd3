const { cmd } = require("../command");

cmd({
    pattern: "wallpaper",
    desc: "Send random wallpaper (stable)",
    category: "media",
    react: "🔞",
    filename: __filename
},
async (conn, mek, m, { reply }) => {

    try {

        // Fully stable random image (no API, no redirect issue)
        let url = `https://picsum.photos/1080/1920?random=${Date.now()}`;

        await conn.sendMessage(m.chat, {
            image: { url },
            caption: "🖼️  Wallpaper\n⚡ Powered by NAWAZ-MD"
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("❌ Wallpaper load failed, try again");
    }

});
