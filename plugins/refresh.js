// ======================================
//      NAWAZ-MD AUTO REFRESH
// ======================================

console.log("♻️ AUTO REFRESH SYSTEM ENABLED")

setInterval(() => {

    console.log("🔄 REFRESHING BOT CACHE...")

    // Clear require cache
    Object.keys(require.cache).forEach((key) => {
        delete require.cache[key]
    })

    // Garbage Collector
    if (global.gc) {
        global.gc()
    }

    console.log("✅ BOT REFRESH COMPLETE")

}, 20 * 60 * 1000)


// Error Protection
process.on("uncaughtException", (err) => {
    console.log("❌ ERROR:", err.message)
})

process.on("unhandledRejection", (err) => {
    console.log("❌ REJECTION:", err)
})

console.log("🚀 NAWAZ-MD PROTECTION ACTIVE")
