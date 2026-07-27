const fs = require("fs");
const path = require("path");

// lokasi file data.js
const dataFile = path.join(__dirname, "../assets/js/data.js");

// lokasi output
const outputDir = path.join(__dirname, "../ebook");

// buat folder ebook jika belum ada
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// baca data.js
let content = fs.readFileSync(dataFile, "utf8");

// ubah menjadi array javascript
content = content.replace("const ebooks =", "");
content = content.trim();

if (content.endsWith(";")) {
    content = content.slice(0, -1);
}

const ebooks = eval(content);

console.log(`Total Ebook : ${ebooks.length}`);
