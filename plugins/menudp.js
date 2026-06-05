const fs = require("fs");
const path = require("path");
const { cmd } = require("../command");

cmd({
    pattern: "menudp",
    desc: "Change Menu Image (Bot Menu DP)",
    category: "owner",
    react: "🖼️",
    filename: __filename
},
async (conn, mek, m, { quoted, reply, isOwner }) => {

    try {

        if (!isOwner) {
            return reply("❌ Owner only command");
        }

        if (!quoted) {
            return reply("❌ Please reply to an image");
        }

        const mime = quoted.mtype || quoted.message?.imageMessage?.mimetype || "";

        if (!mime.includes("image")) {
            return reply("❌ Only image is allowed");
        }

        const buffer = await quoted.download();

        if (!buffer) {
            return reply("❌ Image download failed");
        }

        const savePath = path.join(__dirname, "../lib/ERFAN.jpg");

        fs.writeFileSync(savePath, buffer);

        return reply("✅ Menu DP Updated Successfully!");

    } catch (error) {
        console.log(error);
        return reply("❌ Error while updating Menu DP");
    }

});
