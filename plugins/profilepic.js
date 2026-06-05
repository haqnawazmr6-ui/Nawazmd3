const fs = require("fs");

cmd({
    pattern: "setdp",
    desc: "Change Bot Profile Picture",
    category: "owner",
    react: "🖼️",
    filename: __filename
},
async (conn, mek, m, {
    from,
    reply,
    quoted,
    isOwner
}) => {
    try {

        if (!isOwner) return reply("❌ Owner Only Command");

        if (!quoted) {
            return reply("❌ Image ko reply karo.\nExample: .botdp");
        }

        const mime = quoted.mtype || "";
        if (!mime.includes("image")) {
            return reply("❌ Sirf image ko reply karo.");
        }

        const buffer = await quoted.download();

        const filePath = "./temp_botdp.jpg";
        fs.writeFileSync(filePath, buffer);

        await conn.updateProfilePicture(
            conn.user.id,
            { url: filePath }
        );

        fs.unlinkSync(filePath);

        return reply("✅ Bot Profile Picture Updated Successfully!");

    } catch (e) {
        console.log(e);
        return reply("❌ Error while updating profile picture.");
    }
});
