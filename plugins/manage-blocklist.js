const { cmd } = require('../command');

// 🔒 BLOCK COMMAND
cmd({
    pattern: "block",
    desc: "Block any number",
    category: "owner",
    react: "🚫",
    filename: __filename
},
async (conn, m, { q }) => {

    try {

        const owner = conn.user.id.split(":")[0] + "@s.whatsapp.net";

        if (m.sender !== owner) {
            return conn.sendMessage(m.chat, {
                text: "❌ Only owner can use this command."
            }, { quoted: m });
        }

        if (!q) {
            return conn.sendMessage(m.chat, {
                text: "❌ Usage: block 923xxxxxxxxx"
            }, { quoted: m });
        }

        let num = q.replace(/[^0-9]/g, '');
        let jid = num + "@s.whatsapp.net";

        // ✅ BLOCK USER
        await conn.updateBlockStatus(jid, "block");

        return conn.sendMessage(m.chat, {
            text: `🚫 Blocked Successfully\n📵 ${num}`
        }, { quoted: m });

    } catch (e) {
        console.log("BLOCK ERROR:", e);
        conn.sendMessage(m.chat, {
            text: "❌ Block failed"
        }, { quoted: m });
    }

});


// 🔓 UNBLOCK COMMAND
cmd({
    pattern: "unblock",
    desc: "Unblock any number",
    category: "owner",
    react: "🔓",
    filename: __filename
},
async (conn, m, { q }) => {

    try {

        const owner = conn.user.id.split(":")[0] + "@s.whatsapp.net";

        if (m.sender !== owner) {
            return conn.sendMessage(m.chat, {
                text: "❌ Only owner can use this command."
            }, { quoted: m });
        }

        if (!q) {
            return conn.sendMessage(m.chat, {
                text: "❌ Usage: unblock 923xxxxxxxxx"
            }, { quoted: m });
        }

        let num = q.replace(/[^0-9]/g, '');
        let jid = num + "@s.whatsapp.net";

        // ✅ UNBLOCK USER
        await conn.updateBlockStatus(jid, "unblock");

        return conn.sendMessage(m.chat, {
            text: `🔓 Unblocked Successfully\n📲 ${num}`
        }, { quoted: m });

    } catch (e) {
        console.log("UNBLOCK ERROR:", e);
        conn.sendMessage(m.chat, {
            text: "❌ Unblock failed"
        }, { quoted: m });
    }

});
