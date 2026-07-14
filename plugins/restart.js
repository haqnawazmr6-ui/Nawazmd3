const { cmd } = require("../command");

const AUTO_RESTART_TIME = 5 * 60 * 60 * 1000; // 5 Hours

// Auto Restart Timer
setInterval(() => {
    console.log("♻️ Auto Restarting Bot...");
    process.exit(0);
}, AUTO_RESTART_TIME);

