const { cmd } = require('../command');

// 🔒 BLOCK COMMAND
cmd({
    pattern: "block",
    desc: "Block any number (global)",
    category: "owner",
    react: "🚫",
    filename: __filename
},
async (conn, m, { q }) => {

    try {

        const botOwner = conn.user.id.split(":")[0] + "@s.whatsapp.net";

        if (m.sender !== botOwner) {
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

        await conn.updateBlockStatus(jid, "block");

        return conn.sendMessage(m.chat, {
            text: `🚫 Number Blocked Successfully\n📵 ${num}`
        }, { quoted: m });

    } catch (e) {
        console.log(e);
        conn.sendMessage(m.chat, {
            text: "❌ Error while blocking number"
        }, { quoted: m });
    }

});


// 🔓 UNBLOCK COMMAND
cmd({
    pattern: "unblock",
    desc: "Unblock any number (global)",
    category: "owner",
    react: "🔓",
    filename: __filename
},
async (conn, m, { q }) => {

    try {

        const botOwner = conn.user.id.split(":")[0] + "@s.whatsapp.net";

        if (m.sender !== botOwner) {
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

        await conn.updateBlockStatus(jid, "unblock");

        return conn.sendMessage(m.chat, {
            text: `🔓 Number Unblocked Successfully\n📲 ${num}`
        }, { quoted: m });

    } catch (e) {
        console.log(e);
        conn.sendMessage(m.chat, {
            text: "❌ Error while unblocking number"
        }, { quoted: m });
    }

});
