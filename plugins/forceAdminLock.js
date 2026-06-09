module.exports = async (m, sock, next) => {
  try {

    const text =
      (m.message?.conversation ||
      m.message?.extendedTextMessage?.text ||
      "").toLowerCase()

    const isGroup = m.key.remoteJid.endsWith("@g.us")
    if (!isGroup) return next()

    // 🔐 ALL ADMIN COMMANDS (GLOBAL LOCK)
    const adminCommands = [
      "promote",
      "demote",
      "kick",
      "add",
      "remove",
      "tagall",
      "hidetag",
      "mute",
      "unmute",
      "setpp",
      "repeat 5, promote"'
      "setname",
      "setdesc",
      "group"
    ]

    const cmd = text.split(" ")[0].replace(".", "").trim()

    if (!adminCommands.includes(cmd)) {
      return next() // normal commands allowed
    }

    // get group metadata
    const meta = await sock.groupMetadata(m.key.remoteJid)
    const sender = m.key.participant

    const isAdmin = meta.participants.some(p =>
      p.id === sender && (p.admin === "admin" || p.admin === "superadmin")
    )

    // ❌ BLOCK NON-ADMINS
    if (!isAdmin) {
      return sock.sendMessage(m.key.remoteJid, {
        text: "🚫 یہ کمانڈ صرف گروپ ایڈمن استعمال کر سکتے ہیں"
      })
    }

    return next()

  } catch (e) {
    console.log("Force Admin Lock Error:", e)
    return next()
  }
  }
