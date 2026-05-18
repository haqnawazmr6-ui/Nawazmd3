const fs = require("fs");

module.exports = {
    name: "autoAntiDelete",

    async execute(sock, msg, store) {

        sock.ev.on("messages.update", async (updates) => {

            try {

                // SAFE CHECK
                if (!store || !store.messages) return;

                for (const update of updates) {

                    // MESSAGE DELETE DETECT
                    if (update.update.message === null) {

                        const key = update.key;

                        // GET OLD MESSAGE
                        const oldMsg =
                            store.messages[key.remoteJid]?.array?.find(
                                m => m.key.id === key.id
                            );

                        // SAFE CHECK
                        if (!oldMsg || !oldMsg.message) return;

                        const sender =
                            oldMsg.key.participant ||
                            oldMsg.key.remoteJid;

                        // BOT OWNER NUMBER
                        const ownerJid =
                            sock.user.id.split(":")[0] +
                            "@s.whatsapp.net";

                        // ================= TEXT =================

                        if (oldMsg.message?.conversation) {

                            await sock.sendMessage(ownerJid, {
                                text:
`🚨 *DELETED MESSAGE*

👤 *Sender:* ${sender}

💬 *Message:*
${oldMsg.message.conversation}`
                            });
                        }

                        // ============ EXTENDED TEXT =============

                        else if (oldMsg.message?.extendedTextMessage) {

                            await sock.sendMessage(ownerJid, {
                                text:
`🚨 *DELETED MESSAGE*

👤 *Sender:* ${sender}

💬 *Message:*
${oldMsg.message.extendedTextMessage.text}`
                            });
                        }

                        // ================= IMAGE =================

                        else if (oldMsg.message?.imageMessage) {

                            const buffer =
                                await sock.downloadMediaMessage(oldMsg);

                            await sock.sendMessage(ownerJid, {
                                image: buffer,
                                caption:
`🚨 *Deleted Image*

👤 Sender: ${sender}`
                            });
                        }

                        // ================= VIDEO =================

                        else if (oldMsg.message?.videoMessage) {

                            const buffer =
                                await sock.downloadMediaMessage(oldMsg);

                            await sock.sendMessage(ownerJid, {
                                video: buffer,
                                caption:
`🚨 *Deleted Video*

👤 Sender: ${sender}`
                            });
                        }

                        // ================= STICKER =================

                        else if (oldMsg.message?.stickerMessage) {

                            const buffer =
                                await sock.downloadMediaMessage(oldMsg);

                            await sock.sendMessage(ownerJid, {
                                sticker: buffer
                            });

                            await sock.sendMessage(ownerJid, {
                                text:
`🚨 *Deleted Sticker*

👤 Sender: ${sender}`
                            });
                        }

                        // ================= AUDIO =================

                        else if (oldMsg.message?.audioMessage) {

                            const buffer =
                                await sock.downloadMediaMessage(oldMsg);

                            await sock.sendMessage(ownerJid, {
                                audio: buffer,
                                mimetype: "audio/mp4",
                                ptt: true
                            });

                            await sock.sendMessage(ownerJid, {
                                text:
`🚨 *Deleted Audio*

👤 Sender: ${sender}`
                            });
                        }

                        // ================= DOCUMENT =================

                        else if (oldMsg.message?.documentMessage) {

                            const buffer =
                                await sock.downloadMediaMessage(oldMsg);

                            await sock.sendMessage(ownerJid, {
                                document: buffer,
                                mimetype:
                                    oldMsg.message.documentMessage.mimetype,
                                fileName:
                                    oldMsg.message.documentMessage.fileName ||
                                    "file"
                            });

                            await sock.sendMessage(ownerJid, {
                                text:
`🚨 *Deleted Document*

👤 Sender: ${sender}`
                            });
                        }

                        // ================= CONTACT =================

                        else if (oldMsg.message?.contactMessage) {

                            await sock.sendMessage(ownerJid, {
                                text:
`🚨 *Deleted Contact*

👤 Sender: ${sender}`
                            });
                        }

                        // ================= LOCATION =================

                        else if (oldMsg.message?.locationMessage) {

                            await sock.sendMessage(ownerJid, {
                                location: {
                                    degreesLatitude:
                                        oldMsg.message.locationMessage.degreesLatitude,
                                    degreesLongitude:
                                        oldMsg.message.locationMessage.degreesLongitude
                                }
                            });

                            await sock.sendMessage(ownerJid, {
                                text:
`🚨 *Deleted Location*

👤 Sender: ${sender}`
                            });
                        }

                    }
                }

            } catch (err) {

                console.log("ANTI DELETE ERROR:", err);

            }
        });
    }
};
