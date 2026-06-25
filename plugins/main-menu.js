const config = require('../config')
const { cmd, commands } = require('../command')
const { runtime } = require('../lib/functions')


// Category format
const formatCategory = (category, cmds) => {

    const validCmds = cmds.filter(cmd => cmd.pattern);

    if (!validCmds.length) return '';

    let title = `\n▰▰▰『 ${category.toUpperCase()} 』▰▰▰\n`;

    let body = '';

    for (let i = 0; i < validCmds.length; i++) {
        body += `➥ .${validCmds[i].pattern}\n`;
    }

    return `${title}${body}\n▰▰▰▰▰▰▰▰▰▰`;
};



cmd({

pattern: "menu",
alias: ["m", "help", "allmenu", "fullmenu"],
use: '.menu',
desc: "Show all bot commands",
category: "main",
react: "🖥️",
filename: __filename

},

async (conn, mek, m, { from, reply, userConfig }) => {


try {


const BOT_NAME = userConfig?.BOT_NAME || config.BOT_NAME || "Bot";
const OWNER_NAME = userConfig?.OWNER_NAME || config.OWNER_NAME || "Owner";
const PREFIX = config.PREFIX || ".";
const MODE = config.MODE || "private";
const VERSION = config.VERSION || "1.0.0";
const DESCRIPTION = config.DESCRIPTION || "";


const imageToUse = config.BOT_IMAGE;


const totalCommands = commands.length;



const grouped = {};

for (let i = 0; i < commands.length; i++) {

const c = commands[i];

if (!c.category) continue;

if (!grouped[c.category])
grouped[c.category] = [];

grouped[c.category].push(c);

}



const categories = Object.keys(grouped);


let menuSections = '';

for (let i = 0; i < categories.length; i++) {

const cat = categories[i];

menuSections += formatCategory(cat, grouped[cat]);

}



const dec = `▰▰▰『 ${BOT_NAME} 』▰▰▰

╭─❍ ʙᴏᴛ ɪɴғᴏ
│ ➥ Owner : ${OWNER_NAME}
│ ➥ Commands : ${totalCommands}
│ ➥ Runtime : ${runtime(process.uptime())}
│ ➥ Prefix : ${PREFIX}
│ ➥ Mode : ${MODE}
│ ➥ Version : ${VERSION}
╰────────────

${menuSections}

▰▰▰▰▰▰▰▰▰▰
> ${DESCRIPTION}`;



await conn.sendMessage(from, {


image: {
url: imageToUse
},

caption: dec,

footer: `${BOT_NAME} Menu`,


buttons: [

{
buttonId: ".menu",
buttonText: {
displayText: "📜 MENU"
},
type: 1
},

{
buttonId: ".owner",
buttonText: {
displayText: "👤 OWNER"
},
type: 1
},

{
buttonId: ".ping",
buttonText: {
displayText: "⚡ PING"
},
type: 1
}

],



// NEWSLETTER FORWARD STYLE

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

reply("Error: " + e);

}


});
