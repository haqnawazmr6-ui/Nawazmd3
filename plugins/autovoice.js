module.exports = (sock) => {

    sock.ev.on("messages.upsert", async ({ messages }) => {

        const msg = messages[0];
        if (!msg.message) return;
        if (msg.key.fromMe) return;

        const jid = msg.key.remoteJid;

        const text =
            msg.message.conversation ||
            msg.message.extendedTextMessage?.text || "";

        if (!text) return;

        const lower = text.toLowerCase();

        let voiceText = null;

        // ONLY these replies
        if (lower === "hi" || lower === "hello") {
            voiceText = "Hello Nawaz MD";
        }

        else if (lower === "haye" || lower === "hey") {
            voiceText = "Hey Nawaz MD";
        }

        else if (lower === "i love you") {
            voiceText = "I love you Nawaz MD";
        }

        // ignore everything else
        if (!voiceText) return;

        const audioUrl =
            `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(voiceText)}&tl=en&client=tw-ob`;

        await sock.sendMessage(jid, {
            audio: { url: audioUrl },
            mimetype: "audio/mpeg",
            ptt: true
        });

    });

};
