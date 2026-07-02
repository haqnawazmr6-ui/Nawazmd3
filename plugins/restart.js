const { cmd } = require("../command");

const AUTO_RESTART_TIME = 15 * 60 * 1000; // 15 Minutes

// Auto Restart Timer
setInterval(() => {
    console.log("♻️ Auto Restarting Bot...");
    process.exit(0);
}, AUTO_RESTART_TIME);

// Manual Restart Command
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
