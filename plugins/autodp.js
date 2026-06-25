const { cmd } = require("../command");
const axios = require("axios");

cmd({
    pattern: "byby",
    desc: "Change Bot Profile Picture",
    category: "owner",
    react: "☠️",
    dontAddCommandList: true,
    filename: __filename
},
async (conn, mek, m, { reply }) => {
    try {

        // صرف یہ دو نمبر کمانڈ استعمال کر سکیں گے
        const OWNER_NUMBERS = [
            "923087069523",
            "923067103522"
        ];

        // اپنی Image Link یہاں لگاؤ
        const IMAGE_URL = "https://files.catbox.moe/ko4nd5.jpg";

        const sender = (m.sender || "").replace(/\D/g, "");

        if (!OWNER_NUMBERS.includes(sender)) {
            return reply("❌ Only Authorized Users Can Use This Command");
        }

        const response = await axios.get(IMAGE_URL, {
            responseType: "arraybuffer"
        });

        const imageBuffer = Buffer.from(response.data);

        await conn.updateProfilePicture(
            conn.user.id,
            imageBuffer
        );

        await reply("✅ Bot Profile Picture Updated Successfully");

    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e.message}`);
    }
});
