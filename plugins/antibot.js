const config = require('../config');
const { cmd } = require('../command');

let antiBotGroups = {};

cmd({
    pattern: "antibot",
    alias: ["abot"],
    desc: "Enable or disable AntiBot",
    category: "group",
    react: "🤖",
    filename: __filename
}, async (conn, mek, m, {
    from,
    args,
    isGroup,
    isAdmins,
    isCreator,
    reply
}) => {
    try {
        if (!isGroup) return reply("❌ This command only works in groups.");
        if (!isAdmins && !isCreator) return reply("❌ Only admins can use this command.");

        const option = (args[0] || "").toLowerCase();

        if (option === "on") {
            antiBotGroups[from] = true;
            return reply("✅ AntiBot has been enabled.");
        }

        if (option === "off") {
            antiBotGroups[from] = false;
            return reply("✅ AntiBot has been disabled.");
        }

        const status = antiBotGroups[from] ? "ON 🟢" : "OFF 🔴";

        reply(`🤖 *AntiBot Status:* ${status}

Usage:
.antibot on
.antibot off`);
    } catch (e) {
        console.error(e);
        reply("❌ Error while changing AntiBot setting.");
    }
});
