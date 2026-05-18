module.exports = {
    name: "autoAntiDelete",

    async execute(sock, msg, store) {

        sock.ev.on("messages.update", async (updates) => {
            try {

                if (!store || !store.messages) return;

                const botJid = sock.user.id; // 👈 bot کا اپنا inbox

                for (const update of updates) {

                    const isDeleted =
                        update.update?.messageStubType === 68 ||
                        update.update?.type === "revoke";

                    if (!isDeleted) continue;

                    const jid = update.key.remoteJid;
                    const msgId = update.key.id;

                    const oldMsg = store.messages[jid]?.[msgId];

                    if (!oldMsg) continue;

                    // message extract
                    let content =
                        oldMsg.message?.conversation ||
                        oldMsg.message?.extendedTextMessage?.text ||
                        oldMsg.message?.imageMessage?.caption ||
                        oldMsg.message?.videoMessage?.caption ||
                        oldMsg.message?.documentMessage?.caption ||
                        "Media/File/Sticker Message";

                    // type detect
                    let type = "TEXT";

                    if (oldMsg.message?.imageMessage) type = "IMAGE";
                    else if (oldMsg.message?.videoMessage) type = "VIDEO";
                    else if (oldMsg.message?.audioMessage) type = "AUDIO";
                    else if (oldMsg.message?.documentMessage) type = "FILE";
                    else if (oldMsg.message?.stickerMessage) type = "STICKER";

                    await sock.sendMessage(botJid, {
                        text:
`🚨 ANTI-DELETE LOG

📍 CHAT: ${jid}
📦 TYPE: ${type}
💬 MESSAGE:

${content}

🕒 STATUS: Deleted Message Recovered`
                    });

                }

            } catch (err) {
                console.log("AntiDelete Error:", err);
            }
        });
    }
};
