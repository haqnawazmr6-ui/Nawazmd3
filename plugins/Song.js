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
╔═━──────━▒ ۞ ▒━──────━═╗
        🎧 NAWAZ MD
╚═━──────━▒ ۞ ▒━──────━═╝

🎵 Title   : ${vid.title}
⏱ Duration: ${vid.timestamp}
👁 Views   : ${vid.views}
📀 Quality : 128kbps MP3
⚡ Status  : Audio Loading...
`;

        // THUMBNAIL MESSAGE (NEWSLETTER STYLE LOOK)
        await conn.sendMessage(from, {
            image: { url: vid.thumbnail },
            caption,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363402493709861@newsletter",
                    newsletterName: "NAWAZ MD MUSIC",
                    serverMessageId: 1
                },
                externalAdReply: {
                    title: "🎧 NAWAZ MD MUSIC",
                    body: vid.title,
                    thumbnailUrl: vid.thumbnail,
                    sourceUrl: vid.url,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    showAdAttribution: false
                }
            }
        }, { quoted: mek });

        const apiUrl = `https://eliteprotech-apis.zone.id/ytmp3?url=${encodeURIComponent(vid.url)}`;

        const res = await axios.get(apiUrl, { timeout: 30000 });

        const audioUrl = res?.data?.result?.download;

        if (!audioUrl) {
            return reply("❌ API Error! Please try again later.");
        }

        // AUDIO MESSAGE (NEWSLETTER FORWARDED LOOK)
        await conn.sendMessage(from, {
            audio: { url: audioUrl },
            mimetype: "audio/mpeg",
            fileName: `${vid.title}.mp3`,
            ptt: false,

            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363402493709861@newsletter",
                    newsletterName: "NAWAZ MD MUSIC",
                    serverMessageId: 1
                },
                externalAdReply: {
                    title: vid.title,
                    body: "🎶 Nawaz MD Music Player",
                    thumbnailUrl: vid.thumbnail,
                    sourceUrl: vid.url,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    showAdAttribution: false
                }
            }

        }, { quoted: mek });

        await conn.sendMessage(from, {
            react: {
                text: '🎵',
                key: m.key
            }
        });

    } catch (err) {
        console.log("SONG ERROR:", err);
        reply("❌ API Error! Please try again later.");
    }
});
