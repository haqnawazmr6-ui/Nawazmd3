const { cmd } = require('../command');

cmd({
    pattern: "block",
    desc: "Blocks a person",
    category: "owner",
    react: "🚫",
    filename: __filename
},
async (conn, m, { q }) => {

    const botOwner = conn.user.id.split(":")[0] + "@s.whatsapp.net";

    if (m.sender !== botOwner) {
        return conn.sendMessage(m.chat, { text: "Only the bot owner can use this command." }, { quoted: m });
    }

    let jid;

    if (m.quoted) {
        jid = m.quoted.sender;
    } 
    else if (m.mentionedJid && m.mentionedJid.length > 0) {
        jid = m.mentionedJid[0];
    } 
    else if (q) {
        let num = q.replace(/[^0-9]/g, '');
        jid = num + "@s.whatsapp.net";
    } 
    else {
        return conn.sendMessage(m.chat, { text: "Please mention, reply or enter a number." }, { quoted: m });
    }

    try {
        await conn.updateBlockStatus(jid, "block");
        return conn.sendMessage(
            m.chat,
            { text: `Successfully blocked @${jid.split("@")[0]}`, mentions: [jid] },
            { quoted: m }
        );
    } catch (error) {
        console.log(error);
        return conn.sendMessage(m.chat, { text: "Failed to block user." }, { quoted: m });
    }
});


// UNBLOCK
cmd({
    pattern: "unblock",
    desc: "Unblocks a person",
    category: "owner",
    react: "🔓",
    filename: __filename
},
async (conn, m, { q }) => {

    const botOwner = conn.user.id.split(":")[0] + "@s.whatsapp.net";

    if (m.sender !== botOwner) {
        return conn.sendMessage(m.chat, { text: "Only the bot owner can use this command." }, { quoted: m });
    }

    let jid;

    if (m.quoted) {
        jid = m.quoted.sender;
    } 
    else if (m.mentionedJid && m.mentionedJid.length > 0) {
        jid = m.mentionedJid[0];
    } 
    else if (q) {
        let num = q.replace(/[^0-9]/g, '');
        jid = num + "@s.whatsapp.net";
    } 
    else {
        return conn.sendMessage(m.chat, { text: "Please mention, reply or enter a number." }, { quoted: m });
    }

    try {
        await conn.updateBlockStatus(jid, "unblock");
        return conn.sendMessage(
            m.chat,
            { text: `Successfully unblocked @${jid.split("@")[0]}`, mentions: [jid] },
            { quoted: m }
        );
    } catch (error) {
        console.log(error);
        return conn.sendMessage(m.chat, { text: "Failed to unblock user." }, { quoted: m });
    }
});
