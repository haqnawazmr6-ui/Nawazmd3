const config = require('../config')
const { cmd, commands } = require('../command')
const { runtime } = require('../lib/functions')
const axios = require('axios')


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

pattern:"menu",
alias:["m","help","allmenu","fullmenu"],
use:".menu",
desc:"Show all bot commands",
category:"main",
react:"🖥️",
filename:__filename

},

async (conn, mek, m, {from, reply, userConfig}) => {


try{


const BOT_NAME = userConfig?.BOT_NAME || config.BOT_NAME || "Bot";
const OWNER_NAME = userConfig?.OWNER_NAME || config.OWNER_NAME || "Owner";

const PREFIX = config.PREFIX || ".";
const MODE = config.MODE || "private";
const VERSION = config.VERSION || "1.0.0";
const DESCRIPTION = config.DESCRIPTION || "";


const imageToUse = config.BOT_IMAGE;


// 🎵 DIRECT MP3 LINK

const SONG_URL = "https://files.catbox.moe/uql9w6";



let grouped = {};


for(let i=0;i<commands.length;i++){

let c = commands[i];

if(!c.category) continue;

if(!grouped[c.category])
grouped[c.category]=[];

grouped[c.category].push(c);

}



let menuSections="";


let categories = Object.keys(grouped);


for(let i=0;i<categories.length;i++){

menuSections += formatCategory(
categories[i],
grouped[categories[i]]
);

}



const menuText = `▰▰▰『 ${BOT_NAME} 』▰▰▰

╭─❍ ʙᴏᴛ ɪɴғᴏ
│ ➥ Owner : ${OWNER_NAME}
│ ➥ Commands : ${commands.length}
│ ➥ Runtime : ${runtime(process.uptime())}
│ ➥ Prefix : ${PREFIX}
│ ➥ Mode : ${MODE}
│ ➥ Version : ${VERSION}
╰────────────

${menuSections}

▰▰▰▰▰▰▰▰▰▰
> ${DESCRIPTION}`;




// MENU SEND

await conn.sendMessage(from,{


image:{
url:imageToUse
},

caption:menuText,

footer:`${BOT_NAME} Menu`,


contextInfo:{

isForwarded:true,

forwardingScore:999,

forwardedNewsletterMessageInfo:{

newsletterJid:"120363426829681935@newsletter",

newsletterName:"NawazTechX",

serverMessageId:Date.now()

}

}


},{quoted:mek});





// 2 SECOND WAIT

await new Promise(r=>setTimeout(r,2000));





// DOWNLOAD AUDIO FIRST

const audio = await axios.get(SONG_URL,{
responseType:"arraybuffer"
});




// SEND REAL FILE

await conn.sendMessage(from,{

audio:Buffer.from(audio.data),

mimetype:"audio/mpeg",

fileName:"NawazMD.mp3",

ptt:false


},{quoted:mek});





}catch(e){

console.log(e);

reply("Error : "+e);

}


});
