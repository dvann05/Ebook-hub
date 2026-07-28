const fs = require("fs");
const path = require("path");

// Lokasi data.js
const dataFile = path.join(__dirname, "../assets/js/data.js");

// Lokasi output rss.xml
const outputFile = path.join(__dirname, "../rss.xml");

// Baca data.js
let content = fs.readFileSync(dataFile, "utf8");

content = content.replace("const ebooks =", "").trim();

if (content.endsWith(";")) {
    content = content.slice(0, -1);
}

const ebooks = eval(content);

// Buat item RSS
const items = ebooks.map(ebook => `
    <item>
        <title><![CDATA[${ebook.title}]]></title>
        <link>https://ebookhub.my.id/ebook/${ebook.slug}.html</link>
        <guid>https://ebookhub.my.id/ebook/${ebook.slug}.html</guid>
        <description><![CDATA[${ebook.description}]]></description>
        <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
`).join("");

// Template RSS
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>

<title>EbookHub</title>

<link>https://ebookhub.my.id/</link>

<description>Kumpulan ebook gratis berkualitas dari EbookHub</description>

<language>id-ID</language>

${items}

</channel>
</rss>`;

// Simpan rss.xml
fs.writeFileSync(outputFile, rss, "utf8");

console.log("RSS Feed berhasil dibuat.");