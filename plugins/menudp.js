const fs = require("fs");
const path = require("path");
const { cmd } = require("../command");

const DB_PATH = path.join(__dirname, "../lib/menu_dp.json");

const loadDB = () => {
    if (!fs.existsSync(DB_PATH)) return {};
    return JSON.parse(fs.readFileSync(DB_PATH));
};

const saveDB = (data) => {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};

cmd({
    pattern: "menudp",
    desc: "Set personal menu image",
    category: "owner",
    react: "🖼️",
    filename: __filename
},
async (conn, mek, m, { quoted, reply, sender, isOwner }) => {

    try {

        if (!quoted) {
            return reply("❌ Image ko reply karo");
        }

        const mime = quoted.mtype || "";

        if (!mime.includes("image")) {
            return reply("❌ Sirf image allow hai");
        }

        const buffer = await quoted.download();

        if (!buffer) return reply("❌ Image download failed");

        const db = loadDB();

        db[sender] = buffer.toString("base64");

        saveDB(db);

        return reply("✅ Your Personal Menu DP Saved!");

    } catch (e) {
        console.log(e);
        return reply("❌ Error saving DP");
    }

});
