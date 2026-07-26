const fs = require("fs");
const path = require("path");

// Membaca data.js
const dataPath = path.join(__dirname, "../assets/js/data.js");
const dataFile = fs.readFileSync(dataPath, "utf8");

// Mengambil array ebooks
const match = dataFile.match(/const ebooks\s*=\s*(\[[\s\S]*\]);?/);

if (!match) {
    console.error("Data ebook tidak ditemukan.");
    process.exit(1);
}

const ebooks = eval(match[1]);

const BASE_URL = "https://ebookhub.my.id";

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

`;

// Halaman utama
[
    "",
    "/about.html",
    "/contact.html",
    "/privacy.html",
    "/terms.html",
    "/category.html"
].forEach(page => {

    xml += `  <url>
    <loc>${BASE_URL}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

`;

});

// Halaman detail ebook
ebooks.forEach(book => {

    xml += `  <url>
    <loc>${BASE_URL}/detail.html?id=${book.id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

`;

});

xml += "</urlset>";

fs.writeFileSync(
    path.join(__dirname, "../sitemap.xml"),
    xml
);

console.log("✅ sitemap.xml berhasil dibuat!");
