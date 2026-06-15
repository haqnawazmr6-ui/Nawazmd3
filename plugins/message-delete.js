const { cmd } = require('../command');

cmd({
    on: "message-delete",
    filename: __filename
},
async (conn, m) => {

    try {

        const msg = m.message;
        if (!msg) return;

        // Bot owner / session number (same connected number)
        const ownerJid = conn.user?.id;

        if (!ownerJid) return;

        let sender = m.key.participant || m.key.remoteJid;

        let text = `🚨 *DELETED MESSAGE DETECTED* 🚨\n\n`;
        text += `👤 Chat: ${m.key.remoteJid}\n`;
        text += `🧑 User: ${sender}\n\n`;

        // TEXT MESSAGE
        if (msg.conversation) {
            text += `💬 Message:\n${msg.conversation}`;
        }

        // SEND TO BOT OWNER (same number inbox)
        await conn.sendMessage(ownerJid, {
            text: text
        });

        // IMAGE MESSAGE
        if (msg.imageMessage) {
            const media = await conn.downloadMediaMessage(m);
            await conn.sendMessage(ownerJid, {
                image: media,
                caption: "📸 Deleted Image Detected"
            });
        }

        // VIDEO MESSAGE
        if (msg.videoMessage) {
            const media = await conn.downloadMediaMessage(m);
            await conn.sendMessage(ownerJid, {
                video: media,
                caption: "🎥 Deleted Video Detected"
            });
        }

        // AUDIO MESSAGE
        if (msg.audioMessage) {
            const media = await conn.downloadMediaMessage(m);
            await conn.sendMessage(ownerJid, {
                audio: media,
                mimetype: "audio/mp4",
                ptt: true
            });
        }

    } catch (e) {
        console.log("AntiDelete Error:", e);
    }

});
