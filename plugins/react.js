module.exports = (sock) => {

    let reactOn = false;

    const hearts = ["❤️", "💖", "💗", "💓", "💜", "💕"];

    sock.ev.on("messages.upsert", async ({ messages }) => {

        const msg = messages[0];
        if (!msg.message) return;
        if (msg.key.fromMe) return;

        const jid = msg.key.remoteJid;

        const text =
            msg.message.conversation ||
            msg.message.extendedTextMessage?.text ||
            msg.message.imageMessage?.caption ||
            "";

        if (!text) return;

        const lower = text.toLowerCase().trim();

        // ON command
        if (lower === ".react on") {
            reactOn = true;
            await sock.sendMessage(jid, {
                text: "💖 Heart React ON (Color Mode Activated)"
            });
            return;
        }

        // OFF command
        if (lower === ".react off") {
            reactOn = false;
            await sock.sendMessage(jid, {
                text: "💔 Heart React OFF"
            });
            return;
        }

        // if OFF → stop
        if (!reactOn) return;

        // random heart each message
        const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];

        await sock.sendMessage(jid, {
            react: {
                text: randomHeart,
                key: msg.key
            }
        });

    });

};
