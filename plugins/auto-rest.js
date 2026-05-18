// ======================================
//        MINI BOT AUTO RESTART
// ======================================

console.log("MINI BOT AUTO RESTART ENABLED")

setInterval(async () => {

    console.log("MINI BOT RESTARTING...")

    process.exit(1)

}, 10 * 60 * 1000)
