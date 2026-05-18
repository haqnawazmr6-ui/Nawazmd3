// ======================================
//        MINI BOT AUTO RESTART
// ======================================

console.log("MINI BOT AUTO RESTART ENABLED")

setInterval(async () => {

    console.log("MINI BOT RESTARTING...")

    process.exit(1)

}, 5 * 60 * 1000)
