const { cmd } = require('../command');

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const emojis = ["🔥","💖","👑","💎","😎","😈","😇","🖤","⚡","💥"];

// 🎁 MULTIPLE GIFT STICKERS (add your own .webp files here)
const giftStickers = [
    "./stickers/gift1.webp",
    "./stickers/gift2.webp",
    "./stickers/gift3.webp",
    "./stickers/gift4.webp",
    "./stickers/gift5.webp"
];

function randomSticker() {
    return giftStickers[Math.floor(Math.random() * giftStickers.length)];
}

function getEmoji(role) {
    if (["girl","queen","princess"].includes(role)) return "💖";
    if (["king","boss","vip"].includes(role)) return "👑";
    if (role === "rich") return "💎";
    if (role === "mafia") return "🖤";
    if (role === "angel") return "😇";
    if (role === "devil") return "😈";
    return emojis[Math.floor(Math.random() * emojis.length)];
}

function build(role, emoji, percent, user) {
    return `
🎁 ${emoji} ${role.toUpperCase()} GIFT RESULT 🎁

👤 User: @${(user || "").split('@')[0]}

⚡ Power: ${percent}%
🔥 Status: EXTREME FIRE

🎉 You received a random gift 🎉
`;
}

const roles = [
"girl","boy","king","queen","rich","cute","hot","legend","mafia","hero",
"villain","smart","lazy","angel","devil","vip","boss","hacker","sigma","alpha",
"doctor","teacher","detective","wizard","prince","princess","ghost","pro","master","beta"
];

roles.forEach((role) => {

cmd({
    pattern: role,
    category: "fun",
    react: "🎁",
    filename: __filename
},
async (conn, mek, m, { from }) => {

    try {

        const user = m.sender;
        const percent = random(60, 100);
        const emoji = getEmoji(role);

        const text = build(role, emoji, percent, user);

        // 📩 text message
        await conn.sendMessage(from, {
            text,
            mentions: [user]
        });

        // 🎁 RANDOM STICKER (EVERY TIME DIFFERENT)
        await conn.sendMessage(from, {
            sticker: { url: randomSticker() }
        });

        // 🔥 reaction
        await conn.sendMessage(from, {
            react: {
                text: "🎁",
                key: m.key
            }
        });

    } catch (e) {
        console.log(e);
    }

});

});
