const { cmd } = require('../command');

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const emojis = ["🔥","💖","👑","💎","😎","😈","😇","🖤","⚡","💥"];

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
${emoji} ${role.toUpperCase()} FIRE RESULT ${emoji}

╭──────────────╮
   NAWAZ MD SYSTEM
╰──────────────╯

👤 User : @${user.split('@')[0]}

⚡ Power : ${percent}%
🔥 Level : EXTREME FIRE

━━━━━━━━━━━━━━
👑 NAWAZ MD
━━━━━━━━━━━━━━
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
    react: "🔥",
    filename: __filename
},
async (conn, mek, m, { from }) => {

    try {

        const user = m.sender;
        const percent = random(60, 100);

        const emoji = getEmoji(role);

        const text = build(role, emoji, percent, user);

        await conn.sendMessage(from, {
            text,
            mentions: [user],
            contextInfo: {
                isForwarded: true,
                forwardingScore: 999,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363426829681935@newsletter",
                    newsletterName: "NAWAZ MD",
                    serverMessageId: Date.now()
                }
            }
        });

    } catch (e) {
        console.log(e);
    }

});

});
