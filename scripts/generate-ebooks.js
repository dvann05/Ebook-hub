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

ebooks.forEach((ebook) => {

    const html = `<!DOCTYPE html>
<html lang="id">

<head>

<meta charset="UTF-8">

<meta http-equiv="X-UA-Compatible" content="IE=edge">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>${ebook.title} | Download Ebook Gratis | EbookHub</title>

<meta name="description" content="${ebook.description}">

<meta name="keywords" content="${ebook.title}, ${ebook.category}, ${ebook.author}, ebook gratis, download ebook, ebook PDF, ${ebook.language}, EbookHub">

<meta name="author" content="${ebook.author}">

<meta name="publisher" content="EbookHub">

<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

<meta name="googlebot" content="index, follow">

<meta name="bingbot" content="index, follow">

<meta name="rating" content="General">

<meta name="distribution" content="Global">

<meta name="language" content="${ebook.language}">

<meta name="theme-color" content="#16a34a">

<meta name="application-name" content="EbookHub">

<meta name="generator" content="EbookHub Generator">

<meta name="referrer" content="strict-origin-when-cross-origin">

<meta name="format-detection" content="telephone=no">

<meta name="color-scheme" content="light dark">

<link rel="canonical" href="https://ebookhub.my.id/ebook/${ebook.slug}.html">

<link rel="icon" href="../assets/images/favicon.ico">

<link rel="apple-touch-icon" href="../assets/images/icon-192.png">

<link rel="manifest" href="../manifest.json">

<link rel="preconnect" href="https://fonts.googleapis.com">

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link rel="stylesheet" href="../assets/css/style.css">

<!-- Open Graph -->

<meta property="og:type" content="website">

<meta property="og:site_name" content="EbookHub">

<meta property="og:title" content="${ebook.title}">

<meta property="og:description" content="${ebook.description}">

<meta property="og:url" content="https://ebookhub.my.id/ebook/${ebook.slug}.html">

<meta property="og:image" content="https://ebookhub.my.id/${ebook.banner}">

<meta property="og:image:width" content="1200">

<meta property="og:image:height" content="630">

<meta property="og:image:alt" content="${ebook.title}">

<meta property="og:locale" content="id_ID">

<!-- Twitter Card -->

<meta name="twitter:card" content="summary_large_image">

<meta name="twitter:title" content="${ebook.title}">

<meta name="twitter:description" content="${ebook.description}">

<meta name="twitter:image" content="https://ebookhub.my.id/${ebook.banner}">

<meta name="twitter:image:alt" content="${ebook.title}">

<!-- JSON-LD -->

<script type="application/ld+json">
{
"@context":"https://schema.org",
"@type":"Book",
"name":"${ebook.title}",
"description":"${ebook.description}",
"url":"https://ebookhub.my.id/ebook/${ebook.slug}.html",
"image":"https://ebookhub.my.id/${ebook.banner}",
"author":{
"@type":"Person",
"name":"${ebook.author}"
},
"publisher":{
"@type":"Organization",
"name":"EbookHub",
"url":"https://ebookhub.my.id",
"logo":{
"@type":"ImageObject",
"url":"https://ebookhub.my.id/assets/images/logo.png"
}
},
"inLanguage":"${ebook.language}",
"bookFormat":"${ebook.format}",
"numberOfPages":"${ebook.pages}",
"aggregateRating":{
"@type":"AggregateRating",
"ratingValue":"${ebook.rating}",
"ratingCount":"${ebook.downloads}"
}
}
</script>

</head>

<body>

<div id="ebookDetail"></div>

<script>

const EBOOK_SLUG = "${ebook.slug}";

</script>

<script src="../assets/js/data.js"></script>

<script src="../assets/js/detail.js"></script>

</body>

</html>`;

    fs.writeFileSync(
        path.join(outputDir, `${ebook.slug}.html`),
        html,
        "utf8"
    );

});

console.log("Semua halaman ebook berhasil dibuat.");
