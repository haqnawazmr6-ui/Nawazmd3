const { cmd } = require("../command");
const axios = require("axios");

cmd({
    pattern: "url2",
    desc: "Get image URL from replied DP/image",
    category: "tools",
    react: "🔗",
    filename: __filename
},
async (conn, mek, m, { quoted, reply }) => {

    try {

        if (!quoted) {
            return reply("❌ Image ko reply karo");
        }

        const mime = quoted.mtype || "";

        if (!mime.includes("image")) {
            return reply("❌ Sirf image reply karo");
        }

        const buffer = await quoted.download();

        if (!buffer) return reply("❌ Download failed");

        // Upload to catbox
        const FormData = require("form-data");
        const form = new FormData();

        form.append("file", buffer, "image.jpg");

        const { data } = await axios.post("https://catbox.moe/user/api.php", form, {
            headers: form.getHeaders()
        });

        if (!data) return reply("❌ Upload failed");

        return reply(`🔗 *IMAGE URL:*\n\n${data}`);

    } catch (e) {
        console.log(e);
        reply("❌ Error while getting URL");
    }

});
