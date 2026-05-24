const { cmd } = require("../command")
const gplay = require("google-play-scraper")

cmd({
    pattern: "app",
    alias: ["playstore", "apksearch"],
    desc: "Search apps from Play Store",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, args, reply }) => {

    try {

        if (!args[0]) {
            return reply("❌ App name likho\nExample: .app whatsapp")
        }

        let query = args.join(" ")

        let result = await gplay.search({
            term: query,
            num: 1
        })

        if (!result || result.length === 0) {
            return reply("❌ Koi app nahi mili")
        }

        let app = result[0]

        let msg = `
╭━━━〔 📱 PLAY STORE APP 〕━━━⬣
┃
┃ 📌 Name: ${app.title}
┃ 👨‍💻 Developer: ${app.developer}
┃ ⭐ Rating: ${app.score || "N/A"}
┃
┃ 🔗 Link:
┃ https://play.google.com/store/apps/details?id=${app.appId}
┃
╰━━━━━━━━━━━━━━⬣

⚡ Power By Nawaz Ahmedi 🤖
`

        reply(msg)

    } catch (e) {
        console.log(e)
        reply("❌ Error aa gaya")
    }

})
