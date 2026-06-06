const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

// upload to uguu (stable)
async function uploadToUguu(filePath) {
    const form = new FormData();
    form.append("files[]", fs.createReadStream(filePath));

    const res = await axios.post("https://uguu.se/upload.php", form, {
        headers: {
            ...form.getHeaders(),
            "User-Agent": "Mozilla/5.0"
        },
        maxBodyLength: Infinity
    });

    if (res.data && res.data.files && res.data.files[0]) {
        return res.data.files[0].url;
    }

    throw new Error("Upload failed");
}

cmd({
    pattern: "Nurl",
    desc: "Convert replied media (image/audio/video/sticker) into URL",
    category: "tools",
    react: "🔗",
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply }) => {

    try {

        if (!quoted) {
            return reply("❌ Please reply to an image, audio, video, or sticker");
        }

        // download media
        let mediaPath = await conn.downloadMediaMessage(quoted, "file");

        if (!mediaPath) {
            return reply("❌ Media download failed");
        }

        // upload to uguu
        let url = await uploadToUguu(mediaPath);

        // delete temp file
        fs.unlinkSync(mediaPath);

        return reply(`🔗 *MEDIA URL GENERATED:*\n\n${url}`);

    } catch (e) {
        console.log(e);
        return reply("❌ Error: " + (e.message || e));
    }

});
