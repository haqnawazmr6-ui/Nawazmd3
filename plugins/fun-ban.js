const { cmd } = require("../command");

// ================= FAKE WHATSAPP BAN =================
cmd({
    pattern: "waban",
    desc: "واٹس ایپ فیک بین سسٹم",
    category: "fun",
    react: "🚫",
    filename: __filename
}, async (conn, mek, m, { reply, q }) => {

    if (!q) return reply("❌ نمبر لکھو مثال: waban +923001234567");

    reply(`⚠️ واٹس ایپ سیکیورٹی سسٹم چیک کر رہا ہے...\n📱 نمبر: ${q}\n⏳ تھوڑی دیر انتظار کریں...`);

    setTimeout(() => {
        conn.sendMessage(m.chat, {
            text:
`🚫 *واٹس ایپ سیکیورٹی الرٹ*

📱 نمبر: ${q}
❌ اسٹیٹس: *بین کر دیا گیا*
⛔ وجہ: مشکوک سرگرمی

🔒 اکاؤنٹ 24 گھنٹے کے لیے محدود کر دیا گیا ہے۔

⚠️ یہ ایک آٹومیٹڈ سسٹم میسج ہے۔`
        }, { quoted: m });
    }, 5000);
});


// ================= FAKE TIKTOK BAN =================
cmd({
    pattern: "ttban",
    desc: "ٹک ٹاک فیک بین سسٹم",
    category: "fun",
    react: "🎵",
    filename: __filename
}, async (conn, mek, m, { reply, q }) => {

    if (!q) return reply("❌ یوزر نمبر یا آئی ڈی لکھو مثال: ttban +923001234567");

    reply(`🎵 ٹک ٹاک سیکیورٹی سسٹم چیک کر رہا ہے...\n👤 یوزر: ${q}\n⏳ انتظار کریں...`);

    setTimeout(() => {
        conn.sendMessage(m.chat, {
            text:
`🎵 *ٹک ٹاک سیکیورٹی سینٹر*

👤 یوزر: ${q}
🚫 اسٹیٹس: *اکاؤنٹ بین*
⛔ وجہ: کمیونٹی گائیڈ لائنز کی خلاف ورزی

📉 اپیل: دستیاب نہیں

⚠️ یہ ایک آٹومیٹڈ انفورسمنٹ سسٹم ہے۔`
        }, { quoted: m });
    }, 5000);
});
