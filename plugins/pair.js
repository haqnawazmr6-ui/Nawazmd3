const { cmd } = require('../command');
const axios = require('axios');

// API base URL
const API_BASE_URL = 'https://nawazmd.vercel.app/api';

cmd({
    pattern: "pair",
    alias: ["getpair", "clonebot"],
    react: "✅",
    desc: "Get pairing code for NAWAZ-MD bot",
    category: "owner",
    use: ".pair 923427582XXX",
    filename: __filename
}, async (conn, mek, m, { senderNumber, reply, react, q }) => {
    try {
        await react('⏳');

        // Safe phone number extraction
        const phoneNumber = (q || senderNumber || "")
            .toString()
            .replace(/[^0-9]/g, '');

        // Validate number
        if (!phoneNumber || phoneNumber.length < 10 || phoneNumber.length > 15) {
            await react('❌');
            return reply("❌ Invalid number!\nExample: .pair 923001234567");
        }

        // Fetch servers
        const serversResponse = await axios.get(`${API_BASE_URL}/servers`, {
            timeout: 10000
        });

        const servers = serversResponse?.data?.servers;

        if (!Array.isArray(servers) || servers.length === 0) {
            await react('❌');
            return reply("❌ No servers available right now.");
        }

        // Pick safe random server
        const randomServer = servers[Math.floor(Math.random() * servers.length)];

        if (!randomServer?.url) {
            await react('❌');
            return reply("❌ Server configuration error.");
        }

        // Get pairing code
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

        // SINGLE CLEAN RESPONSE (no spam)
        return reply(
`🔐 *NAWAZ-MD PAIR CODE*

*${pairingCode}*

📱 Steps:
1. Open WhatsApp
2. Go to Linked Devices
3. Tap Link Device
4. Enter the code

> Server: ${randomServer.name || "Unknown"}`
        );

    } catch (error) {
        console.error("Pair command error:", error);
        await react('❌');
        return reply("❌ Server error! Please try again later.");
    }
});
