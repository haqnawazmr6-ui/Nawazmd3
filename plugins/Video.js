const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "video",
    alias: ["video", "videodl"],
    react: "🎬",
    desc: "NAWAZ-MD Video Downloader",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {

    try {

        if (!q) {
            return reply("*❌ Please provide a video URL!*");
        }

        // API URL
        const api = `https://nawazmd.vercel.app/api?url=${encodeURIComponent(q)}`;

        // Fetch Data
        const response = await axios.get(api);
        const data = response.data;

        // Check Video
        if (!data || !data.video) {
            return reply("*❌ Video not found!*");
        }

        // Send Reaction
        await conn.sendMessage(from, {
            react: {
                text: "⬇️",
                key: mek.key
            }
        });

        // Send Video
        await conn.sendMessage(from, {
            video: { url: data.video },
            mimetype: "video/mp4",
            caption:
`╭━━━〔 *NAWAZ-MD* 〕━━━⊷
┃ 🎬 *VIDEO DOWNLOADED*
┃
┃ ⚡ Powered By NAWAZ-MD
┃ 🚀 Fast Video Downloader
╰━━━━━━━━━━━━━━⊷`
        }, { quoted: mek });

    } catch (e) {
        console.log(e);

        reply(
`╭━━━〔 *NAWAZ-MD ERROR* 〕━━━⊷
┃ ❌ Failed to fetch video
┃ 🔌 API Down or Invalid Link
╰━━━━━━━━━━━━━━⊷`
        );
    }
});
