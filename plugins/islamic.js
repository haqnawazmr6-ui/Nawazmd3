const { cmd } = require('../command');

// ================= ISLAMIC COMMANDS ================= //

cmd({
    pattern: "quran",
    desc: "Quran Ayat"
}, async (conn, mek, m, { reply }) => {

reply("📖 اِنَّ اللّٰهَ مَعَ الصّٰبِرِيْنَ\n\nبے شک اللہ صبر کرنے والوں کے ساتھ ہے ❤️");

});

cmd({
    pattern: "hadith",
    desc: "Hadith"
}, async (conn, mek, m, { reply }) => {

reply("🌸 رسول ﷺ نے فرمایا:\n\nتم میں بہترین شخص وہ ہے جس کے اخلاق اچھے ہوں ❤️");

});

cmd({
    pattern: "dua",
    desc: "Islamic Dua"
}, async (conn, mek, m, { reply }) => {

reply("🤲 رَبِّ زِدْنِي عِلْمًا\n\nاے میرے رب! میرے علم میں اضافہ فرما ❤️");

});

cmd({
    pattern: "namaz",
    desc: "Namaz Reminder"
}, async (conn, mek, m, { reply }) => {

reply("🕌 نماز جنت کی کنجی ہے ❤️");

});

cmd({
    pattern: "kalima",
    desc: "Kalima Tayyaba"
}, async (conn, mek, m, { reply }) => {

reply("☪️ لَا إِلٰهَ إِلَّا اللّٰهُ مُحَمَّدٌ رَسُولُ اللّٰهِ ﷺ");

});

cmd({
    pattern: "surah",
    desc: "Surah Ikhlas"
}, async (conn, mek, m, { reply }) => {

reply("📖 قُلْ هُوَ اللّٰهُ أَحَدٌ\nاللّٰهُ الصَّمَدُ");

});

cmd({
    pattern: "azan",
    desc: "Azan Reminder"
}, async (conn, mek, m, { reply }) => {

reply("🔊 حَيَّ عَلَى الصَّلَاةِ ❤️");

});

cmd({
    pattern: "islam",
    desc: "Islam Message"
}, async (conn, mek, m, { reply }) => {

reply("☪️ اسلام امن اور محبت کا دین ہے ❤️");

});

cmd({
    pattern: "jumma",
    desc: "Jumma Mubarak"
}, async (conn, mek, m, { reply }) => {

reply("🌙 جمعہ مبارک ❤️\nدرود شریف پڑھتے رہیں");

});

cmd({
    pattern: "tasbeeh",
    desc: "Tasbeeh"
}, async (conn, mek, m, { reply }) => {

reply("📿 سُبْحَانَ اللّٰهِ\nالْحَمْدُ لِلّٰهِ\nاللّٰهُ أَكْبَرُ ❤️");

});
