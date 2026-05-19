const { cmd } = require('../command');

// ================= 50 FUN COMMANDS =================

// 1
cmd({ pattern: "joke", react: "😂", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"😂 Funny Joke Activated!"},{quoted:mek});
});

// 2
cmd({ pattern: "roast", react: "🔥", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🔥 Roast Mode ON!"},{quoted:mek});
});

// 3
cmd({ pattern: "truth", react: "😳", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"😳 Tell The Truth!"},{quoted:mek});
});

// 4
cmd({ pattern: "dare", react: "😈", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"😈 Dare Challenge!"},{quoted:mek});
});

// 5
cmd({ pattern: "love", react: "❤️", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"❤️ Love Meter 99%"},{quoted:mek});
});

// 6
cmd({ pattern: "iq", react: "🧠", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🧠 IQ Level: 150"},{quoted:mek});
});

// 7
cmd({ pattern: "simp", react: "🥺", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🥺 Simp Level High!"},{quoted:mek});
});

// 8
cmd({ pattern: "gay", react: "🌈", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🌈 Gay Percentage: 70%"},{quoted:mek});
});

// 9
cmd({ pattern: "luck", react: "🍀", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🍀 Lucky Day!"},{quoted:mek});
});

// 10
cmd({ pattern: "hack", react: "💻", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"💻 Fake Hacking Started!"},{quoted:mek});
});

// 11
cmd({ pattern: "slap", react: "👋", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"👋 Slapped!"},{quoted:mek});
});

// 12
cmd({ pattern: "hug", react: "🤗", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🤗 Hug Sent!"},{quoted:mek});
});

// 13
cmd({ pattern: "kiss", react: "😘", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"😘 Kiss Delivered!"},{quoted:mek});
});

// 14
cmd({ pattern: "angry", react: "😡", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"😡 Angry Mode!"},{quoted:mek});
});

// 15
cmd({ pattern: "dance", react: "💃", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"💃 Dance Started!"},{quoted:mek});
});

// 16
cmd({ pattern: "sleep", react: "😴", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"😴 Sleep Time!"},{quoted:mek});
});

// 17
cmd({ pattern: "ghost", react: "👻", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"👻 Ghost Appeared!"},{quoted:mek});
});

// 18
cmd({ pattern: "zombie", react: "🧟", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🧟 Zombie Attack!"},{quoted:mek});
});

// 19
cmd({ pattern: "rich", react: "💸", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"💸 Billionaire Loading!"},{quoted:mek});
});

// 20
cmd({ pattern: "poor", react: "🥲", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🥲 Wallet Empty!"},{quoted:mek});
});

// 21
cmd({ pattern: "moon", react: "🌙", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🌙 Moon is Beautiful!"},{quoted:mek});
});

// 22
cmd({ pattern: "star", react: "⭐", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"⭐ Star Mode Activated!"},{quoted:mek});
});

// 23
cmd({ pattern: "fire", react: "🔥", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🔥 Fire Fire!"},{quoted:mek});
});

// 24
cmd({ pattern: "cool", react: "😎", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"😎 Cool Level Max!"},{quoted:mek});
});

// 25
cmd({ pattern: "hot", react: "🥵", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🥵 Hotness Overloaded!"},{quoted:mek});
});

// 26
cmd({ pattern: "cute", react: "🥰", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🥰 Cute Meter Full!"},{quoted:mek});
});

// 27
cmd({ pattern: "cat", react: "🐱", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🐱 Meowww!"},{quoted:mek});
});

// 28
cmd({ pattern: "dog", react: "🐶", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🐶 Woof Woof!"},{quoted:mek});
});

// 29
cmd({ pattern: "snake", react: "🐍", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🐍 Snake Alert!"},{quoted:mek});
});

// 30
cmd({ pattern: "monkey", react: "🐒", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🐒 Monkey Jump!"},{quoted:mek});
});

// 31
cmd({ pattern: "pizza", react: "🍕", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🍕 Pizza Ready!"},{quoted:mek});
});

// 32
cmd({ pattern: "burger", react: "🍔", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🍔 Burger Time!"},{quoted:mek});
});

// 33
cmd({ pattern: "tea", react: "☕", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"☕ Chai Ready!"},{quoted:mek});
});

// 34
cmd({ pattern: "coffee", react: "☕", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"☕ Coffee Delivered!"},{quoted:mek});
});

// 35
cmd({ pattern: "rain", react: "🌧️", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🌧️ Rain Started!"},{quoted:mek});
});

// 36
cmd({ pattern: "bomb", react: "💣", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"💣 Boom Boom!"},{quoted:mek});
});

// 37
cmd({ pattern: "police", react: "🚔", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🚔 Police Arrived!"},{quoted:mek});
});

// 38
cmd({ pattern: "robot", react: "🤖", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🤖 Robot Online!"},{quoted:mek});
});

// 39
cmd({ pattern: "king", react: "👑", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"👑 King Mode!"},{quoted:mek});
});

// 40
cmd({ pattern: "queen", react: "👸", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"👸 Queen Mode!"},{quoted:mek});
});

// 41
cmd({ pattern: "devil", react: "😈", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"😈 Devil Activated!"},{quoted:mek});
});

// 42
cmd({ pattern: "angel", react: "😇", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"😇 Angel Energy!"},{quoted:mek});
});

// 43
cmd({ pattern: "happy", react: "😊", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"😊 Stay Happy!"},{quoted:mek});
});

// 44
cmd({ pattern: "sad", react: "😭", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"😭 Don't Be Sad!"},{quoted:mek});
});

// 45
cmd({ pattern: "fight", react: "🥊", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🥊 Fight Started!"},{quoted:mek});
});

// 46
cmd({ pattern: "admin", react: "👑", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"👑 Fake Admin Activated!"},{quoted:mek});
});

// 47
cmd({ pattern: "sigma", react: "😎", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"😎 Sigma Rule!"},{quoted:mek});
});

// 48
cmd({ pattern: "alpha", react: "🦁", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🦁 Alpha Energy!"},{quoted:mek});
});

// 49
cmd({ pattern: "beta", react: "🐼", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🐼 Beta Mode!"},{quoted:mek});
});

// 50
cmd({ pattern: "legend", react: "🏆", category: "fun", filename: __filename },
async(conn, mek, m, { from }) => {
await conn.sendMessage(from,{text:"🏆 Legendary User!"},{quoted:mek});
});
