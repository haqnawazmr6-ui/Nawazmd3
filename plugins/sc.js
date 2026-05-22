const { cmd } = require('../command');

cmd({
    pattern: "sc",
    desc: "Show owner & server tabs",
    category: "main",
    react: "⚙️",
    filename: __filename
},
async (conn, mek, m, { from }) => {

    const ownerNumber = "923161483125";
    const serverLink = "https://nawazmd.vercel.app/";

    const message = `
🤖 NAWAZ-MD INFO

Choose a tab:
`;

    await conn.sendMessage(from, {
        text: message,
        buttons: [
            {
                buttonId: `tab1_owner_${ownerNumber}`,
                buttonText: { displayText: "📌 TAB ONE" },
                type: 1
            },
            {
                buttonId: `tab2_server_${serverLink}`,
                buttonText: { displayText: "📌 TAB TWO" },
                type: 1
            }
        ],
        headerType: 1
    }, { quoted: mek });
});
