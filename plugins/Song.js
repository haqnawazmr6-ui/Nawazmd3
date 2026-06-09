const { cmd } = require("../command");
const axios = require("axios");

cmd({
    pattern: "play",
    desc: "YouTube music downloader",
    category: "music",
    react: "🎧",
    filename: __filename
},
async (conn, mek, m, { from, args, reply }) => {

    try {

        if (!args[0]) {
            return reply("❌ Song name likho\nExample: .play faded");
        }

        let query = encodeURIComponent(args.join(" "));

        let api = `https://api-xemoz-official.my.id/api/donwloader/ytplay.php?q=${query}`;

        let { data } = await axios.get(api, { timeout: 15000 });

        if (!data?.status) {
            return reply("❌ Song not found");
        }

        const result = data.result;

        if (!result?.download?.audio) {
            return reply("❌ Audio not found");
        }

        let title = result.title || "Unknown";
        let channel = result.channel || "Unknown";
        let duration = result.duration || "00:00";
        let thumb = result.thumbnail;
        let audioUrl = result.download.audio;

        let text = `┏━━━━━━━━━━━━━━━━━━━━┓
┃ ⚡ 𝗡𝗔𝗪𝗔𝗭 𝗠𝗗 ⚡
┗━━━━━━━━━━━━━━━━━━━━┛

🎧 SONG DETECTED

❯ 🎶 ${title}
❯ 👤 ${channel}
❯ ⏱ ${duration}

⬇️ Downloading...
[■■■■■■■■■■] 100%

🚀 Audio Ready
━━━━━━━━━━━━━━━━`;

        // 📌 IMAGE + NEWSLETTER STYLE
        await conn.sendMessage(from, {
            image: { url: thumb },
            caption: text,
            contextInfo: {
                isForwarded: true,
                forwardingScore: 999,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363426829681935@newsletter",
                    newsletterName: "NawazTechX",
                    serverMessageId: Date.now()
                }
            }
        }, { quoted: mek });

        // 📌 AUDIO + NEWSLETTER STYLE
        await conn.sendMessage(from, {
            audio: { url: audioUrl },
            mimetype: "audio/mp4",
            ptt: false,
            contextInfo: {
                isForwarded: true,
                forwardingScore: 999,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363426829681935@newsletter",
                    newsletterName: "NawazTechX",
                    serverMessageId: Date.now()
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("❌ Error in play command");
    }

});
