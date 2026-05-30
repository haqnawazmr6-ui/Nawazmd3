const { cmd } = require('../command')
const axios = require('axios')
const yts = require('yt-search')

cmd({
    pattern: "song",
    alias: ["play", "music", "audio", "aa"],
    desc: "Download YouTube Song",
    category: "download",
    react: "🎵",
    filename: __filename
}, async (conn, mek, m, { from, reply, text }) => {

    try {

        if (!text) {
            return reply("❌ Please Give Me A Song Name")
        }

        const search = await yts(text)

        if (!search.videos || search.videos.length === 0) {
            return reply("❌ Song Not Found")
        }

        const vid = search.videos[0]

        const caption = `
╭━❰ 🎵 SONG DOWNLOADER ❱━╮
┃
┃ 🎧 ${vid.title}
┃ ⏱ ${vid.timestamp}
┃ 👀 ${vid.views} Views
┃ 📀 MP3 Audio
┃
┃ ⚡ Downloading Now...
╰━━━━━━━━━━━━━━━━━━━╯

> Powered By NAWAZ-MD
`

        await conn.sendMessage(
            from,
            {
                image: { url: vid.thumbnail },
                caption
            },
            { quoted: mek }
        )

        const apiUrl = `https://api.azbry.com/api/download/ytmp3?url=${encodeURIComponent(vid.url)}`

        const response = await axios.get(apiUrl, {
            timeout: 60000
        })

        const audioUrl =
            response.data?.result?.download ||
            response.data?.result?.url ||
            response.data?.download ||
            response.data?.url ||
            response.data?.audio

        if (!audioUrl) {
            console.log(response.data)
            return reply("❌ Download Link Not Found")
        }

        const audio = await axios.get(audioUrl, {
            responseType: "arraybuffer",
            timeout: 120000
        })

        await conn.sendMessage(
            from,
            {
                audio: Buffer.from(audio.data),
                mimetype: "audio/mpeg",
                fileName: `${vid.title}.mp3`,
                ptt: false
            },
            { quoted: mek }
        )

        await conn.sendMessage(from, {
            react: {
                text: "✅",
                key: m.key
            }
        })

    } catch (err) {

        console.log("SONG ERROR:", err)

        await conn.sendMessage(from, {
            react: {
                text: "❌",
                key: m.key
            }
        })

        return reply("❌ Failed To Download Song")
    }
})
