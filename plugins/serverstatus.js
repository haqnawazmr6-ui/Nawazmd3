const { cmd } = require('../command.js');
const axios = require('axios');

// ============================================================
//  UTILITY: Get status emoji based on active user count
// ============================================================
function getCountStatus(count) {
    if (count === 50) return '🔴';
    if (count >= 40) return '🟣';
    if (count >= 30) return '🟡';
    if (count >= 20) return '🟠';
    if (count >= 10) return '🔵';
    return '🟢';
}

// ============================================================
//  COMMAND: status
// ============================================================
cmd({
    pattern     : "status",
    alias       : ["serverstatus", "stats", "servers"],
    react       : "📊",
    desc        : "Check server status and active users",
    category    : "owner",
    use         : ".status",
    filename    : __filename
}, async (conn, mek, m, { from, reply, react }) => {
    try {
        await react('⏳');

        // --------------------------------------------------------
        // 1. Fetch server list from base API
        // --------------------------------------------------------
        const serversResponse = await axios.get(
            'https://nawazmd.vercel.app/api/servers',
            { timeout: 10000 }
        );

        if (!serversResponse.data || !serversResponse.data.servers) {
            await react('❌');
            return reply("❌ Failed to fetch server list.");
        }

        const servers = serversResponse.data.servers;

        // --------------------------------------------------------
        // 2. Check each server's /active endpoint
        // --------------------------------------------------------
        let serverStatus   = [];
        let totalActive    = 0;
        let totalLimit     = 0;
        let onlineServers  = 0;
        let offlineServers = 0;

        for (let i = 0; i < servers.length; i++) {
            const server = servers[i];

            try {
                const statusResponse = await axios.get(
                    `${server.url}/active`,
                    { timeout: 8000 }
                );

                if (statusResponse.data && !statusResponse.data.error) {
                    const count       = statusResponse.data.count || 0;
                    const limit       = statusResponse.data.limit || 50;
                    const statusEmoji = getCountStatus(count);

                    serverStatus.push({
                        server : server.id,
                        name   : server.name,
                        count  : count,
                        limit  : limit,
                        status : `${statusEmoji} ONLINE`
                    });

                    totalActive += count;
                    totalLimit  += limit;
                    onlineServers++;
                } else {
                    serverStatus.push({
                        server : server.id,
                        name   : server.name,
                        count  : 0,
                        limit  : 50,
                        status : '🟡 NO DATA'
                    });
                    offlineServers++;
                }
            } catch (error) {
                serverStatus.push({
                    server : server.id,
                    name   : server.name,
                    count  : 0,
                    limit  : 50,
                    status : '🔴 OFFLINE'
                });
                offlineServers++;
            }
        }

        await react('✅');

        // --------------------------------------------------------
        // 3. Build status message (NEW STYLISH LAYOUT)
        // --------------------------------------------------------
        let statusMessage = `╭━━━SERVER STATUS━━━⊷\n`;
        statusMessage   += `┃ 🌐 Total Servers : ${servers.length}\n`;
        statusMessage   += `┃ ✅ Online        : ${onlineServers}\n`;
        statusMessage   += `┃ ❌ Offline       : ${offlineServers}\n`;
        statusMessage   += `┃ 👥 Active Users  : ${totalActive}/${totalLimit}\n`;
        statusMessage   += `┣━━━━━━━━━━━━━━━━━━━━━━\n`;

        serverStatus.forEach((s) => {
            const statusIcon = s.status.split(' ')[0];
            const statusText = s.status.split(' ')[1];
            statusMessage   += `┃ 🖥 ${s.name}\n`;
            statusMessage   += `┃ 👤 ${s.count}/${s.limit}\n`;
            statusMessage   += `┃ ${statusIcon} ${statusText}\n`;
            statusMessage   += `┣━━━━━━━━━━━━━━━━━━━━━━\n`;
        });

        statusMessage += `╰━━━━━━━━━━━━━━━━━━━━━━⊷`;

        await reply(statusMessage);

    } catch (error) {
        console.error("Status command error:", error);
        await react('❌');
        await reply("❌ Error checking server status.");
    }
});
