const config = require('../config')
const { cmd, commands } = require('../command')
const { runtime } = require('../lib/functions')

// Card-Style Menu Format (ENGLISH)
const formatCategory = (category, cmds) => {
  const validCmds = cmds.filter(cmd =>
    cmd.pattern && !cmd.dontAddCommandList
  );

  if (!validCmds.length) return '';

  let body = '';
  for (let i = 0; i < validCmds.length; i++) {
    body += `┃❖ ${validCmds[i].pattern}\n`;
  }

  return `
╭━━❰ ${category} ❱━━⬣
${body}╰━━━━━━━━━━━━━━⬣
`;
};

cmd({
  pattern: "menu",
  alias: ["m", "help", "allmenu", "fullmenu"],
  use: '.menu',
  desc: "Show all bot commands",
  category: "main",
  react: "📋",
  filename: __filename
},
async (conn, mek, m, { from, reply, userConfig }) => {
  try {
    const BOT_NAME = userConfig?.BOT_NAME || config.BOT_NAME || "👑 BOT";
    const OWNER_NAME = userConfig?.OWNER_NAME || config.OWNER_NAME || "Owner";
    const PREFIX = config.PREFIX || ".";
    const VERSION = config.VERSION || "5.0.0";
    const imageToUse = config.BOT_IMAGE;

    const totalCommands = commands.filter(cmd => !cmd.dontAddCommandList).length;
    const totalUsers = "1245"; // or fetch from database

    const grouped = {};
    for (let i = 0; i < commands.length; i++) {
      const c = commands[i];
      if (!c.category) continue;
      if (!grouped[c.category]) grouped[c.category] = [];
      grouped[c.category].push(c);
    }

    const categories = Object.keys(grouped);
    let menuSections = '';
    for (let i = 0; i < categories.length; i++) {
      const cat = categories[i];
      menuSections += formatCategory(cat, grouped[cat]);
    }

    const dec = `
╭━━❰ 👑 BOT INFO ❱━━⬣
┃❖ Owner   : ${OWNER_NAME}
┃❖ Mode    : Public
┃❖ Prefix  : ${PREFIX}
┃❖ Version : ${VERSION}
┃❖ Runtime : ${runtime(process.uptime())}
┃❖ Users   : ${totalUsers}
╰━━━━━━━━━━━━━━⬣

${menuSections}

╭━━❰ 🛠 SUPPORT ❱━━⬣
┃❖ .owner
┃❖ .ping
┃❖ .menu
╰━━━━━━━━━━━━━━⬣
`;

    await conn.sendMessage(from, {
      image: { url: imageToUse },
      caption: dec,
      footer: `${BOT_NAME} - Menu`,
      buttons: [
        {
          buttonId: ".menu",
          buttonText: { displayText: "📋 MENU" },
          type: 1
        },
        {
          buttonId: ".owner",
          buttonText: { displayText: "👤 OWNER" },
          type: 1
        },
        {
          buttonId: ".ping",
          buttonText: { displayText: "📡 PING" },
          type: 1
        }
      ],
      contextInfo: {
        isForwarded: true,
        forwardingScore: 999,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363426829681935@newsletter",
          newsletterName: "NawazTechX",
          serverMessageId: Date.now()
        }
      }
    }, { quoted: mek });

  } catch (e) {
    console.log(e);
    reply("❌ Error: " + e);
  }
});
// Wait 2 seconds after menu
await new Promise(resolve => setTimeout(resolve, 2000));

// Send MP3 with Newsletter Forward Style
await conn.sendMessage(from, {
    audio: {
        url: "https://files.catbox.moe/b0p0gn"
    },
    mimetype: "audio/mpeg",
    ptt: false,
    contextInfo: {
        isForwarded: true,
        forwardingScore: 999,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363426829681935@newsletter",
            newsletterName: "NawazTechX",
            serverMessageId: Date.now()
        }
    }
}, { quoted: mek });
