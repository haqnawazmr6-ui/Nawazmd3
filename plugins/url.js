const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

// upload to catbox
async function uploadToCatbox(filePath) {
    const form = new FormData();
    form.append("fileToUpload", fs.createReadStream(filePath));

    const res = await axios.post("https://catbox.moe/user/api.php", form, {
        headers: form.getHeaders()
    });

    return res.data;
}

cmd({
    pattern: "url",
    desc: "Convert replied media (image/audio/video/sticker) into URL",
    category: "tools",
    react: "🔗",
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply }) => {

    try {

        if (!quoted) {
            return reply("❌ Please reply to an image, video, audio, or sticker");
        }

        // download media safely
        let mediaPath = await conn.downloadMediaMessage(quoted, "file");

        if (!mediaPath) {
            return reply("❌ Media download failed");
        }

        // upload to catbox
        let url = await uploadToCatbox(mediaPath);

        // delete temp file
        fs.unlinkSync(mediaPath);

        if (!url || typeof url !== "string") {
            return reply("❌ Upload failed, no URL received");
        }

        return reply(`🔗 *MEDIA URL GENERATED:*\n\n${url}`);

    } catch (e) {
        console.log(e);
        return reply("❌ Error: " + (e.message || e));
    }

});
