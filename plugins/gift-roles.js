const { cmd } = require('../command');

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const emojis = ["🔥","💖","👑","💎","😎","😈","😇","🖤","⚡","💥"];

// 🎬 LOCAL GIF VIDEOS (NO LINKS)
const giftVideos = [
    "./gifs/gift1.mp4",
    "./gifs/gift2.mp4",
    "./gifs/gift3.mp4",
    "./gifs/gift4.mp4",
    "./gifs/gift5.mp4"
];

function randomVideo() {
    return giftVideos[Math.floor(Math.random() * giftVideos.length)];
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

🎉 Enjoy your offline gift 🎉
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

        // 📩 TEXT
        await conn.sendMessage(from, {
            text,
            mentions: [user]
        });

        // 🎬 OFFLINE VIDEO GIF STYLE
        await conn.sendMessage(from, {
            video: { url: randomVideo() },
            gifPlayback: true,
            caption: "🎁 Your Offline Gift is Ready!"
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
