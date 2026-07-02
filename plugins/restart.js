const { cmd } = require("../command");

cmd({
    pattern: "restart",
    alias: ["reset"],
    desc: "Restart Bot",
    category: "owner",
    react: "♻️",
    filename: __filename
},
async (conn, mek, m, { reply, isOwner }) => {
    try {

        if (!isOwner) return reply("❌ This command is only for the bot owner.");

        reply("♻️ Restarting bot...");

        setTimeout(() => {
            process.exit(0);
        }, 2000);

    } catch (e) {
        console.log(e);
        reply("❌ Restart failed.");
    }
});
