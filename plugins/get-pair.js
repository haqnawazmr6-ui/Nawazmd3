const { cmd } = require('../command');
const axios = require('axios');

const API_BASE_URL = 'https://nawazmd.vercel.app';

cmd({
    pattern: "pair",
    alias: ["getpair", "clonebot"],
    react: "⏳",
    desc: "Get pairing code for NAWAZ-MD bot",
    category: "owner",
    use: ".pair 923xxxxxxxxx",
    filename: __filename
},
async (conn, mek, m, { q, reply, react, senderNumber }) => {

    try {

        await react('⏳');

        // Number handle
        const phoneNumber = q
            ? q.replace(/[^0-9]/g, '')
            : senderNumber.replace(/[^0-9]/g, '');

        if (!phoneNumber || phoneNumber.length < 10) {
            await react('❌');
            return reply("❌ Valid number bhejo\nExample: .pair 923xxxxxxxxx");
        }

        // Get servers
        const { data } = await axios.get(`${API_BASE_URL}/servers`, {
            timeout: 10000
        });

        if (!data?.servers?.length) {
            await react('❌');
            return reply("❌ Server list not found");
        }

        const server = data.servers[Math.floor(Math.random() * data.servers.length)];

        // Get pairing code
        const res = await axios.get(`${server.url}/code`, {
            params: { number: phoneNumber },
            timeout: 20000
        });

        if (!res.data?.code) {
            await react('❌');
            return reply("❌ Pair code not received");
        }

        const code = res.data.code;

        await react('✅');

        await reply(
`╭━━〔 NAWAZ-MD PAIR CODE 〕━━⬣
┃ 🔑 Code: *${code}*
┃ 🌐 Server: *${server.name}*
╰━━━━━━━━━━━━━━━━━━⬣

📱 WhatsApp > Linked Devices > Link Device > Enter Code

> Powered By NAWAZ-MD`
        );

    } catch (e) {
        console.log("Pair Error:", e);
        await react('❌');
        reply("❌ Error while getting pair code");
    }
});
