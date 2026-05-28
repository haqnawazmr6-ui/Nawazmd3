const { cmd } = require('../command');

/////////////////////////////
// ⚔️ ATTACK CORE SYSTEM
/////////////////////////////

cmd({
    pattern: "attack",
    react: "💥",
    desc: "Basic attack command",
    category: "attack",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {

    let target = args.join(" ");
    if (!target) return reply("❌ Target لکھو!");

    let dmg = Math.floor(Math.random() * 100);

    reply(`💥 ATTACK!\n🎯 Target: ${target}\n🔥 Damage: ${dmg}`);
});

cmd({
    pattern: "strongattack",
    react: "⚔️",
    category: "attack",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {

    let target = args.join(" ");
    let dmg = Math.floor(Math.random() * 150);

    reply(`⚔️ STRONG ATTACK!\n🎯 ${target}\n🔥 Damage: ${dmg}`);
});

cmd({
    pattern: "powerattack",
    react: "⚡",
    category: "attack",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {

    let target = args.join(" ");
    let dmg = Math.floor(Math.random() * 200);

    reply(`⚡ POWER ATTACK!\n🎯 ${target}\n🔥 Damage: ${dmg}`);
});

cmd({
    pattern: "headshot",
    react: "🎯",
    category: "attack",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {

    let target = args.join(" ");

    reply(`🎯 HEADSHOT!\n💀 ${target} got critical damage!`);
});

cmd({
    pattern: "doubleattack",
    react: "💢",
    category: "attack",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {

    let target = args.join(" ");

    reply(`💢 DOUBLE ATTACK!\n🎯 ${target}\n🔥 2x Damage Applied`);
});

cmd({
    pattern: "fireattack",
    react: "🔥",
    category: "attack",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {

    let target = args.join(" ");

    reply(`🔥 FIRE ATTACK!\n🎯 ${target} is burning`);
});

cmd({
    pattern: "iceattack",
    react: "🧊",
    category: "attack",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {

    let target = args.join(" ");

    reply(`🧊 ICE ATTACK!\n🎯 ${target} frozen`);
});

cmd({
    pattern: "poisonattack",
    react: "☠️",
    category: "attack",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {

    let target = args.join(" ");

    reply(`☠️ POISON ATTACK!\n🎯 ${target} poisoned`);
});

cmd({
    pattern: "explosionattack",
    react: "💣",
    category: "attack",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {

    let target = args.join(" ");

    reply(`💣 EXPLOSION ATTACK!\n🔥 Massive damage on ${target}`);
});

cmd({
    pattern: "sniperattack",
    react: "🔫",
    category: "attack",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {

    let target = args.join(" ");

    reply(`🔫 SNIPER ATTACK!\n🎯 One shot on ${target}`);
});

cmd({
    pattern: "rageattack",
    react: "😡",
    category: "attack",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {

    let target = args.join(" ");

    reply(`😡 RAGE ATTACK!\n🔥 Unstoppable damage on ${target}`);
});

cmd({
    pattern: "shadowattack",
    react: "🌑",
    category: "attack",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {

    let target = args.join(" ");

    reply(`🌑 SHADOW ATTACK!\n🎯 ${target} attacked silently`);
});

cmd({
    pattern: "lightningattack",
    react: "⚡",
    category: "attack",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {

    let target = args.join(" ");

    reply(`⚡ LIGHTNING ATTACK!\n🔥 Shock damage to ${target}`);
});

cmd({
    pattern: "ultimateattack",
    react: "👑",
    category: "attack",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {

    let target = args.join(" ");

    reply(`👑 ULTIMATE ATTACK!\n💀 ${target} DESTROYED`);
});

cmd({
    pattern: "comboattack",
    react: "🤜🤛",
    category: "attack",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {

    let target = args.join(" ");

    reply(`🤜🤛 COMBO ATTACK!\n🔥 Multiple hits on ${target}`);
});
