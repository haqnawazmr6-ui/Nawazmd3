cmd({
    pattern: "alive",
    alias: ["ping", "status"],
    desc: "Check if bot is alive",
    category: "utility",
    react: "💚",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        await conn.sendMessage(from, { react: { text: '💚', key: m.key } });
        
        const uptime = runtime(process.uptime());
        
        const aliveMsg = `🤖 *Bot Is Alive Since ${uptime}*`;
        
        await conn.sendMessage(from, { 
            text: aliveMsg,
            contextInfo: {
                isForwarded: true,
                forwardingScore: 999,
                mentionedJid: [m.sender]
            }
        }, { quoted: mek });
        
        await conn.sendMessage(from, { react: { text: '✅', key: m.key } });

    } catch (e) {
        console.error("Error in alive command:", e);
        await conn.sendMessage(from, { react: { text: '❌', key: m.key } });
        await reply(`❌ Error: ${e.message}`);
    }
});
