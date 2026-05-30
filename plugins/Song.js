const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "song",
    alias: ["play", "music"],
    desc: "Search and download songs from YouTube",
    category: "download",
    react: "🎧"
},
async (conn, mek, m, { q, reply }) => {
    try {

        // If no query given
        if (!q) {
            return reply("❌ Please enter a song name\nExample: .song Dil Mera Dil");
        }

        // 🎧 Searching UI
        reply(`
╔═══✦🎧 SONG SEARCHING ✦═══╗

🔎 Query: ${q}

╚══════════════════════╝
`);

        // 1. Search API
        let search = await axios.get(`https://api.lyrics.ovh/suggest/${encodeURIComponent(q)}`);

        let result = search.data.data[0];
        if (!result) return reply("❌ No song found");

        let title = result.title;
        let artist = result.artist.name;

        // 2. YouTube link (placeholder)
        let ytLink = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`;

        // 3. MP3 API
        let api = `https://api.azbry.com/api/download/ytmp3?url=${encodeURIComponent(ytLink)}`;

        let res = await axios.get(api);
        let audioUrl = res.data?.result?.download;

        if (!audioUrl) return reply("❌ Audio not found");

        // 4. Send audio
        await conn.sendMessage(mek.chat, {
            audio: { url: audioUrl },
            mimetype: "audio/mpeg"
        }, { quoted: mek });

        // 🎧 Final message
        reply(`
╔═══✦🎧 SONG DOWNLOADED ✦═══╗

🎵 Title  : ${title}
👤 Artist : ${artist}

╔══════════════════════╗
👑 Powered By Nawaz MD
╚══════════════════════╝
`);

    } catch (e) {
        console.log(e);
        reply("❌ Error occurred");
    }
});
