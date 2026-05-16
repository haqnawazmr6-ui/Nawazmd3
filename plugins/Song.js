const { cmd } = require('../command');
const axios = require('axios');
const yts = require('yt-search');

cmd({
    pattern: "song",
    alias: ["play", "music", "audio", "aa"],
    desc: "Download YouTube song",
    category: "download",
    react: "🎧",
    filename: __filename
}, async (conn, mek, m, { from, reply, text }) => {

    try {

        if (!text) {
            return reply("❌ Please provide song name\nExample: .song Shape of You");
        }

        const search = await yts(text);
        const vid = search?.videos?.[0];

        if (!vid) {
            return reply("❌ No song found!");
        }

        const caption = `
*╭ׂ┄─ NAWAZ MD ─┄*
*│ 🎵 Title:* ${vid.title}
*│ 📀 Quality:* 128kbps
*│ 📁 Format:* mp3
*│ ⚙️ Status:* Downloading...
*╰────────────────*
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ NAWAZ MD
`;

        await conn.sendMessage(from, {
            image: { url: vid.thumbnail },
            caption
        }, { quoted: mek });

        const apiUrl = `https://eliteprotech-apis.zone.id/ytmp3?url=${encodeURIComponent(vid.url)}`;
        const res = await axios.get(apiUrl, { timeout: 30000 });

        const audioUrl = res?.data?.result?.download;

        if (!audioUrl) {
            return reply("❌ API Error! Please try again later.");
        }

        const audioRes = await axios.get(audioUrl, {
            responseType: "arraybuffer",
            timeout: 60000
        });

        const audioBuffer = Buffer.from(audioRes.data);

        await conn.sendMessage(from, {
            audio: audioBuffer,
            mimetype: "audio/mpeg",
            fileName: `${vid.title}.mp3`,
            ptt: false,

            // 📢 NEWSLETTER STYLE FORWARD LOOK
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363402493709861@newsletter',
                    newsletterName: "Nawaz MD",
                    serverMessageId: 143
                }
            }

        }, { quoted: mek });

        await conn.sendMessage(from, { react: { text: '✅', key: m.key } });

    } catch (err) {
        console.log("SONG ERROR:", err.message);
        reply("❌ API Error! Please try again later.");
    }
});
