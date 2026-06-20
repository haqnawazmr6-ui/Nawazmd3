const { cmd } = require('../command');
const axios = require('axios');

const API_BASE_URL = 'https://nawazmd.vercel.app/api';

cmd({
    pattern: "pair",
    alias: ["getpair", "clonebot"],
    react: "🔐",
    desc: "Get pairing code for NAWAZ-MD bot",
    category: "owner",
    use: ".pair 923XXXXXXXXX",
    filename: __filename
}, async (conn, mek, m, { senderNumber, reply, react, q }) => {

    try {
        await react('⏳');

        const phoneNumber = (q || senderNumber || "")
            .toString()
            .replace(/[^0-9]/g, '');

        if (!phoneNumber || phoneNumber.length < 10 || phoneNumber.length > 15) {
            await react('❌');
            return reply("❌ Invalid number!\nExample: .pair 923001234567");
        }

        const serversResponse = await axios.get(`${API_BASE_URL}/servers`, {
            timeout: 10000
        });

        const servers = serversResponse?.data?.servers;

        if (!Array.isArray(servers) || servers.length === 0) {
            await react('❌');
            return reply("❌ No servers available right now.");
        }

        const randomServer = servers[Math.floor(Math.random() * servers.length)];

        if (!randomServer?.url) {
            await react('❌');
            return reply("❌ Server configuration error.");
        }

        const response = await axios.get(`${randomServer.url}/code`, {
            params: { number: phoneNumber },
            timeout: 20000
        });

        const pairingCode = response?.data?.code;

        if (!pairingCode) {
            await react('❌');
            return reply("❌ Failed to generate pairing code. Try again later.");
        }

        await react('✅');

        // =========================
        // ONLY DECORATION UPDATED (YOUR STYLE)
        // =========================
        const text = `
┌──────────────────────┐
│   NAWAZ MD PAIR BOT  │
├──────────────────────┤
│ 📱 ${phoneNumber}          
│ 🔐 READY             
├──────────────────────┤
│ 🔑 ${pairingCode}            
└──────────────────────┘
        `.trim();

        await conn.sendMessage(m.chat, {
            text,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363426829681935@newsletter',
                    newsletterName: "NawazTechX",
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // RAW CODE MESSAGE (UNCHANGED)
        await conn.sendMessage(m.chat, {
            text: ` ${pairingCode}`,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363426829681935@newsletter',
                    newsletterName: "NawazTechX",
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Pair command error:", error);
        await react('❌');
        return reply("❌ Server error! Please try again later.");
    }
});
