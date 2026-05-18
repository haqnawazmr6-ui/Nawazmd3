const { cmd } = require('../command');

// ================= CORE ISLAM =================

const islam = {
islam: "☪️ اسلام امن اور انسانیت کا دین ہے",
iman: "ایمان کے 6 ارکان ہیں",
kalima: "لا الہ الا اللہ محمد رسول اللہ ﷺ",
allah: "اللہ ہر چیز پر قادر ہے",
prophet: "حضرت محمد ﷺ آخری نبی ہیں",
quran: "قرآن اللہ کا کلام ہے",
hadith: "حدیث نبی ﷺ کا قول ہے",
deen: "اسلام مکمل دین ہے",
tawheed: "توحید اللہ کی وحدانیت ہے",
shahada: "کلمہ شہادت ایمان کی بنیاد ہے",
masjid: "مسجد عبادت کی جگہ ہے",
ummah: "امت مسلمہ ایک ہے",
sunnah: "سنت نبی ﷺ کا طریقہ ہے",
zakat: "زکوٰۃ فرض ہے",
hajj: "حج اسلام کا رکن ہے",
ramadan: "رمضان برکتوں کا مہینہ ہے",
eid: "عید خوشی کا دن ہے",
jannah: "جنت ایمان والوں کا گھر ہے",
jahannam: "جہنم گناہگاروں کے لیے ہے",
peace: "اسلام کا مطلب ہی امن ہے"
};

Object.keys(islam).forEach(cmdName => {
cmd({ pattern: cmdName, category: "islam" }, async (conn, m) => {
return conn.sendMessage(m.from, { text: islam[cmdName] });
});
});

// ================= DUAS =================

const duas = [
"اللهم اغفر لي",
"ربنا آتنا في الدنيا حسنة",
"اللهم اهدنا الصراط المستقيم",
"اللهم ارحمنا",
"اللهم بارك لنا",
"اللهم عافنا",
"اللهم اجعلنا من الصالحين",
"اللهم احفظنا",
"اللهم انصرنا",
"اللهم ارزقنا",
"اللهم ثبت قلوبنا",
"اللهم نور قلوبنا",
"اللهم ارزقنا الجنة",
"اللهم نجنا من النار",
"اللهم تقبل دعاءنا",
"اللهم اغفر والدينا",
"اللهم اشف مرضانا",
"اللهم ارحم موتانا",
"اللهم سهل أمورنا",
"اللهم ارزقنا رزقا حلالا",
"اللهم اجعل القرآن ربيع قلوبنا",
"بسمك اللهم أموت وأحيا",
"اللهم هون علينا سفرنا",
"اللهم اغفر للمؤمنين",
"اللهم احسن خاتمتنا"
];

duas.forEach((dua, i) => {
cmd({ pattern: "dua" + (i + 1), category: "duas" }, async (conn, m) => {
return conn.sendMessage(m.from, { text: dua });
});
});

// ================= ZIKR =================

const zikr = [
"سبحان اللہ",
"الحمد للہ",
"اللہ اکبر",
"لا الہ الا اللہ",
"استغفراللہ",
"سبحان اللہ وبحمدہ",
"لا حول ولا قوة الا باللہ",
"اللهم صل علی محمد",
"الحمد للہ رب العالمین",
"یا اللہ",
"یا رحمن",
"یا رحیم",
"یا کریم",
"یا غفور",
"یا رزاق"
];

zikr.forEach((z, i) => {
cmd({ pattern: "zikr" + (i + 1), category: "zikr" }, async (conn, m) => {
return conn.sendMessage(m.from, { text: z });
});
});

// ================= HADITH =================

const hadith = [
"مسلمان وہ ہے جس کی زبان اور ہاتھ سے دوسرا محفوظ رہے",
"علم حاصل کرنا فرض ہے",
"اچھا اخلاق ایمان کا حصہ ہے",
"صدقہ بلاؤں کو دور کرتا ہے",
"نرمی ہر چیز میں خوبصورتی ہے",
"اللہ صبر کرنے والوں کے ساتھ ہے",
"مسکراہٹ صدقہ ہے",
"والدین کی خدمت جنت ہے",
"سچائی نجات دیتی ہے",
"جھوٹ گناہ ہے"
];

hadith.forEach((h, i) => {
cmd({ pattern: "hadith" + (i + 1), category: "hadith" }, async (conn, m) => {
return conn.sendMessage(m.from, { text: h });
});
});

// ================= PRAYER =================

cmd({ pattern: "fajr", category: "prayer" }, async (conn, m) =>
conn.sendMessage(m.from, { text: "فجر نماز صبح ادا کی جاتی ہے" })
);

cmd({ pattern: "zuhar", category: "prayer" }, async (conn, m) =>
conn.sendMessage(m.from, { text: "ظہر نماز دوپہر کے بعد ہے" })
);

cmd({ pattern: "asr", category: "prayer" }, async (conn, m) =>
conn.sendMessage(m.from, { text: "عصر نماز شام سے پہلے ہے" })
);

cmd({ pattern: "maghrib", category: "prayer" }, async (conn, m) =>
conn.sendMessage(m.from, { text: "مغرب نماز سورج غروب کے بعد ہے" })
);

cmd({ pattern: "isha", category: "prayer" }, async (conn, m) =>
conn.sendMessage(m.from, { text: "عشاء نماز رات کو ادا کی جاتی ہے" })
);
