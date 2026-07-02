const { cmd } = require("../command");

cmd({
    pattern: "restart",
    desc: "Restart Bot",
    category: "system",
    react: "♻️",
    filename: __filename
},
async (conn, mek, m, { reply }) => {
    try {

        await reply("♻️ Restarting bot...");

        setTimeout(() => {
            process.exit(0);
        }, 2000);

    } catch (e) {
        console.log(e);
        reply("❌ Restart failed.");
    }
});
