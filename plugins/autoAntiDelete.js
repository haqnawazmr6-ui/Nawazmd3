module.exports = {
    name: "autoDelete",

    async execute(sock, store) {

        sock.ev.on("messages.upsert", async ({ messages }) => {
            try {

                for (const msg of messages) {

                    if (!msg.message) continue;

                    const jid = msg.key.remoteJid;
                    const id = msg.key.id;

                    // check if sender is paired user
                    global.pairedUsers = global.pairedUsers || {};

                    const senderJid = msg.key.participant || jid;

                    if (!global.pairedUsers[senderJid]) continue;

                    // detect delete (simplified)
                    const isDeleted = msg.message.protocolMessage?.type === 0;
                    if (!isDeleted) continue;

                    const oldMsg = store?.messages?.[jid]?.get(id);
                    if (!oldMsg) continue;

                    let content =
                        oldMsg.message?.conversation ||
                        oldMsg.message?.extendedTextMessage?.text ||
                        "📎 Media/File";

                    // 🔥 SEND TO SAME PAIRING USER
                    await sock.sendMessage(senderJid, {
                        text:
`🚨 ANTI-DELETE LOG

💬 MESSAGE:
${content}`
                    });

                }

            } catch (e) {
                console.log("Error:", e);
            }
        });

    }
};
