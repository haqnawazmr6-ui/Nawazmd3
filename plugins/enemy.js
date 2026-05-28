const { cmd } = require('../command');

/////////////////////////////
// 👾 ENEMY CORE SYSTEM
/////////////////////////////

cmd({
    pattern: "enemy",
    react: "⚔️",
    desc: "Create enemy",
    category: "enemy",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {

    let name = args.join(" ");
    if (!name) return reply("❌ Enemy name لکھو!");

    let hp = Math.floor(Math.random() * 100) + 50;

    reply(`⚔️ *ENEMY CREATED*\n\n👤 Name: ${name}\n❤️ HP: ${hp}`);
});


cmd({
    pattern: "attack",
    react: "💥",
    category: "enemy",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {

    let target = args.join(" ");
    if (!target) return reply("❌ Enemy select کرو!");

    let dmg = Math.floor(Math.random() * 100);

    reply(`💥 Attack on ${target}\n🔥 Damage: ${dmg}`);
});


cmd({
    pattern: "defend",
    react: "🛡️",
    category: "enemy",
    filename: __filename
}, async (conn, mek, m, { reply }) => {

    reply(`🛡️ Defense Activated!\nBlock Power: ${Math.floor(Math.random()*100)}%`);
});


cmd({
    pattern: "summonboss",
    react: "👾",
    category: "enemy",
    filename: __filename
}, async (conn, mek, m, { reply }) => {

    let boss = ["Dark King", "Cyber Beast", "Shadow Ninja"][Math.floor(Math.random()*3)];

    reply(`👾 BOSS APPEARED!\n💀 ${boss}\n🔥 HP: ${Math.floor(Math.random()*300)+200}`);
});


cmd({
    pattern: "powerup",
    react: "⚡",
    category: "enemy",
    filename: __filename
}, async (conn, mek, m, { reply }) => {

    reply(`⚡ Power Boost +${Math.floor(Math.random()*100)}%`);
});


cmd({
    pattern: "enemyai",
    react: "🧠",
    category: "enemy",
    filename: __filename
}, async (conn, mek, m, { reply }) => {

    reply(`🧠 Enemy AI Level: ${Math.floor(Math.random()*10)+1}/10`);
});


cmd({
    pattern: "bleed",
    react: "🩸",
    category: "enemy",
    filename: __filename
}, async (conn, mek, m, { reply }) => {

    reply(`🩸 Enemy is bleeding...`);
});


cmd({
    pattern: "explosion",
    react: "💣",
    category: "enemy",
    filename: __filename
}, async (conn, mek, m, { reply }) => {

    reply(`💣 Explosion Damage: ${Math.floor(Math.random()*200)}`);
});


cmd({
    pattern: "freeze",
    react: "🧊",
    category: "enemy",
    filename: __filename
}, async (conn, mek, m, { reply }) => {

    reply(`🧊 Enemy frozen for 2 turns`);
});


cmd({
    pattern: "burn",
    react: "🔥",
    category: "enemy",
    filename: __filename
}, async (conn, mek, m, { reply }) => {

    reply(`🔥 Enemy is burning`);
});


cmd({
    pattern: "shieldbreak",
    react: "🧿",
    category: "enemy",
    filename: __filename
}, async (conn, mek, m, { reply }) => {

    reply(`🧿 Enemy shield broken`);
});


cmd({
    pattern: "escape",
    react: "🏃",
    category: "enemy",
    filename: __filename
}, async (conn, mek, m, { reply }) => {

    reply(`🏃 You escaped successfully`);
});


cmd({
    pattern: "kill",
    react: "☠️",
    category: "enemy",
    filename: __filename
}, async (conn, mek, m, { reply }) => {

    reply(`☠️ Enemy eliminated`);
});


cmd({
    pattern: "heal",
    react: "🧬",
    category: "enemy",
    filename: __filename
}, async (conn, mek, m, { reply }) => {

    reply(`🧬 You healed +${Math.floor(Math.random()*100)} HP`);
});


cmd({
    pattern: "duel",
    react: "⚔️",
    category: "enemy",
    filename: __filename
}, async (conn, mek, m, { reply }) => {

    reply(`⚔️ Duel Result: ${Math.random() > 0.5 ? "YOU WIN" : "ENEMY WIN"}`);
});


cmd({
    pattern: "headshot",
    react: "🎯",
    category: "enemy",
    filename: __filename
}, async (conn, mek, m, { reply }) => {

    reply(`🎯 HEADSHOT! Critical Damage`);
});


cmd({
    pattern: "trap",
    react: "🧨",
    category: "enemy",
    filename: __filename
}, async (conn, mek, m, { reply }) => {

    reply(`🧨 Enemy trapped for 1 turn`);
});


cmd({
    pattern: "victory",
    react: "👑",
    category: "enemy",
    filename: __filename
}, async (conn, mek, m, { reply }) => {

    reply(`👑 VICTORY! All enemies defeated`);
});
