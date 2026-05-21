// channelAutoFollow.js

const CHANNELS = [
    "120363402493709861@newsletter",
    "120363426204760289@newsletter",
    "120363409038994674@newsletter"
];

// follow function
async function followChannel(conn, channelId) {
    try {
        if (!conn || !conn.newsletterFollow) {
            console.log("❌ Connection not ready or method missing");
            return;
        }

        await conn.newsletterFollow(channelId);
        console.log(`✅ Followed: ${channelId}`);
    } catch (err) {
        console.log(`❌ Failed: ${channelId} | ${err.message}`);
    }
}

// all channels handler
async function reFollowAll(conn) {
    console.log("🔄 Checking 3 newsletters...");

    for (let channel of CHANNELS) {
        await followChannel(conn, channel);
    }

    console.log("✅ Cycle completed");
}

// start system
function startAutoFollow(conn) {
    if (!conn) {
        console.log("❌ No connection provided");
        return;
    }

    // run immediately
    reFollowAll(conn);

    // repeat every 20 minutes
    setInterval(() => {
        reFollowAll(conn);
    }, 10 * 60 * 1000);

    console.log("🚀 Auto Re-Follow Started (3 Channels / 20min)");
}

module.exports = { startAutoFollow };
