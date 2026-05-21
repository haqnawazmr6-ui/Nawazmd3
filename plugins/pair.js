const { cmd } = require('../command');
const axios = require('axios');

const API = 'https://nawazmd.vercel.app';

cmd({
    pattern: "pair",
    react: "⏳",
    desc: "Get pairing code",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { q, reply, react, senderNumber }) => {

    try {

        await react('⏳');

        const number = (q || senderNumber)
            .replace(/[^0-9]/g, '');

        if (!number || number.length < 10) {
            await react('❌');
            return reply("❌ Valid number send karo\nExample: .pair 923xxxxxxxxx");
        }

        // DIRECT WORKING REQUEST
        const { data } = await axios.get(`${API}/code`, {
            params: { number },
            timeout: 20000
        });

        if (!data || !data.code) {
            await react('❌');
            return reply("❌ Pair code not received");
        }

        await react('✅');

        return reply(
`╭━━〔 NAWAZ-MD PAIR CODE 〕━━⬣
┃ 🔑 Code: *${data.code}*
╰━━━━━━━━━━━━━━━━━━⬣

📱 WhatsApp > Linked Devices > Link Device

> Powered By NAWAZ-MD`
        );

    } catch (err) {
        console.log("Pair Error:", err.message);
        await react('❌');
        reply("❌ Server error / API down");
    }
});
