const fs = require("fs");
const path = require("path");

cmd({
    pattern: "setdp",
    desc: "Change Menu Image",
    category: "owner",
    react: "🖼️",
    filename: __filename
},
async (conn, mek, m, { quoted, reply, isOwner }) => {

    if (!isOwner) return reply("Owner Only");

    if (!quoted) return reply("Image ko reply karo");

    const buffer = await quoted.download();

    const savePath = path.join(__dirname, "../lib/ERFAN.jpg");

    fs.writeFileSync(savePath, buffer);

    return reply("✅ Menu DP Updated Successfully");
});
