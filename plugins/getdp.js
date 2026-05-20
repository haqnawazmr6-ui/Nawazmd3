const { cmd } = require('../command');

cmd({
    pattern: "gtdp",
    alias: ["getdp", "dp"],
    desc: "Download profile picture of tagged/replied user or number",
    category: "tools",
    react: "🖼️",
    filename: __filename
},
async (conn, mek, m, {
    from,
    q,
    reply
}) => {
    try {

        let jid;

        // Reply user
        if (m.quoted) {
            jid = m.quoted.sender;
        }

        // Mention user
        else if (m.mentionedJid && m.mentionedJid[0]) {
            jid = m.mentionedJid[0];
        }

        // Number input
        else if (q) {
            let num = q.replace(/[^0-9]/g, '');

            if (!num.startsWith('92')) {
                return reply('❌ Number 92 se start hona chahiye\n\nExample:\n.gtdp 923001234567');
            }

            jid = num + "@s.whatsapp.net";
        }

        else {
            return reply(
`📌 *Use Example:*

.gtdp 923001234567

ya kisi message reply kar ke:
.gtdp`
            );
        }

        // Get profile picture
        let pp;

        try {
            pp = await conn.profilePictureUrl(jid, 'image');
        } catch {
            return reply("❌ User ki profile picture nahi mili ya private hai.");
        }

        // Send image
        await conn.sendMessage(from, {
            image: { url: pp },
            caption: `🖼️ *Profile Picture Downloaded Successfully*`
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e.message}`);
    }
});
