const { cmd } = require('../command');

cmd({
    pattern: "allgroupforward",
    desc: "Forward replied message to all groups (safe broadcast)",
    category: "owner",
    react: "📢",
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply, isCreator, args }) => {

    try {

        // ONLY OWNER CHECK
        if (!isCreator) return reply("❌ Only owner can use this command");

        // LIMIT (default 2)
        let limit = parseInt(args[0]) || 2;
        if (limit > 3) limit = 3;

        // CHECK REPLY MESSAGE
        if (!quoted) return reply("❌ Reply to a message (text/image/video)");

        // GET ALL GROUPS
        let chats = await conn.groupFetchAllParticipating();
        let groups = Object.entries(chats).map(v => v[0]);

        let success = 0;

        for (let gid of groups) {

            try {

                for (let i = 0; i < limit; i++) {

                    await conn.forwardMessage(gid, quoted.message || quoted, {
                        contextInfo: { forwardingScore: 999 }
                    });

                    await new Promise(r => setTimeout(r, 1500)); // safe delay
                }

                success++;

            } catch (e) {
                console.log("Group forward error:", e);
            }
        }

        reply(`✅ Forward completed!\n📦 Groups: ${success}\n🔁 Per group: ${limit}`);

    } catch (e) {
        console.log(e);
        reply("❌ Error in allgroupforward command");
    }

});
