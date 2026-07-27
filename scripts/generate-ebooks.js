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

<!-- ========================================= -->
<!-- Basic Meta -->
<!-- ========================================= -->

<meta charset="UTF-8">

<meta http-equiv="X-UA-Compatible" content="IE=edge">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta name="theme-color" content="#16a34a">

<meta name="color-scheme" content="light dark">

<meta name="format-detection" content="telephone=no">

<meta name="referrer" content="strict-origin-when-cross-origin">

<meta name="generator" content="EbookHub Generator">

<meta name="application-name" content="EbookHub">

<meta name="author" content="${ebook.author}">

<meta name="publisher" content="EbookHub">

<meta name="language" content="${ebook.language}">

<meta name="distribution" content="Global">

<meta name="rating" content="General">

<!-- ========================================= -->
<!-- SEO -->
<!-- ========================================= -->

<title>${ebook.title} | Download Ebook Gratis | EbookHub</title>

<meta name="description" content="${ebook.description}">

<meta name="keywords" content="${ebook.title}, ${ebook.category}, ${ebook.author}, ebook, ebook gratis, download ebook, ebook pdf, EbookHub">

<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">

<meta name="googlebot" content="index,follow">

<meta name="bingbot" content="index,follow">

<link rel="canonical" href="https://ebookhub.my.id/ebook/${ebook.slug}.html">

<link rel="alternate" hreflang="id" href="https://ebookhub.my.id/ebook/${ebook.slug}.html">

<!-- ========================================= -->
<!-- Icons -->
<!-- ========================================= -->

<link rel="icon" href="../assets/images/favicon.ico">

<link rel="apple-touch-icon" sizes="192x192" href="../assets/images/icon-192.png">

<link rel="apple-touch-icon" sizes="512x512" href="../assets/images/icon-512.png">

<link rel="manifest" href="../manifest.json">

<!-- ========================================= -->
<!-- Performance -->
<!-- ========================================= -->

<link rel="preconnect" href="https://fonts.googleapis.com">

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link rel="dns-prefetch" href="//fonts.googleapis.com">

<link rel="dns-prefetch" href="//fonts.gstatic.com">

<link rel="stylesheet" href="../assets/css/style.css">

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SY6HKRF447"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SY6HKRF447');
</script>

<!-- ========================================= -->
<!-- Open Graph -->
<!-- ========================================= -->

<meta property="og:type" content="website">

<meta property="og:site_name" content="EbookHub">

<meta property="og:locale" content="id_ID">

<meta property="og:title" content="${ebook.title}">

<meta property="og:description" content="${ebook.description}">

<meta property="og:url" content="https://ebookhub.my.id/ebook/${ebook.slug}.html">

<meta property="og:image" content="https://ebookhub.my.id/${ebook.banner}">

<meta property="og:image:width" content="1200">

<meta property="og:image:height" content="630">

<meta property="og:image:alt" content="${ebook.title}">

<!-- ========================================= -->
<!-- Twitter Card -->
<!-- ========================================= -->

<meta name="twitter:card" content="summary_large_image">

<meta name="twitter:title" content="${ebook.title}">

<meta name="twitter:description" content="${ebook.description}">

<meta name="twitter:image" content="https://ebookhub.my.id/${ebook.banner}">

<meta name="twitter:image:alt" content="${ebook.title}">

<!-- ========================================= -->
<!-- Structured Data -->
<!-- ========================================= -->

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
"bookFormat":"${ebook.format}",
"inLanguage":"${ebook.language}",
"numberOfPages":"${ebook.pages}",
"genre":"${ebook.category}",
"aggregateRating":{
"@type":"AggregateRating",
"ratingValue":"${ebook.rating}",
"ratingCount":"${ebook.downloads}"
}
}
</script>

</head>

<body>

<header class="header">

<div class="container">

<div class="logo">

📚 EbookHub

</div>

<div class="search-box">

<input type="text" placeholder="Cari ebook...">

<button type="button">

Cari

</div>

</div>

</header>

<main>

<section class="detail">

<div class="container">

<div class="detail-box">

<!-- Cover -->

<div class="detail-cover">

<img id="ebookImage" src="" alt="">

</div>

<!-- Informasi -->

<div class="detail-content">

<h1 id="ebookTitle"></h1>

<div class="ebook-meta">

<span id="ebookRating"></span>

<span id="ebookDownloads"></span>

<span id="ebookFormat"></span>

</div>

<hr>

<p><b>Kategori :</b> <span id="ebookCategory"></span></p>

<p><b>Penulis :</b> <span id="ebookAuthor"></span></p>

<p><b>Ukuran :</b> <span id="ebookSize"></span></p>

<p><b>Jumlah Halaman :</b> <span id="ebookPages"></span></p>

<p><b>Bahasa :</b> <span id="ebookLanguage"></span></p>

<br>

<p id="ebookDescription"></p>

<br>

<div class="ads">

<img id="ebookBanner" src="" alt="">

</div>

<br>

<button class="guide-btn" onclick="showGuide()">

📖 Cara Download

</button>

<a id="downloadBtn" href="#" class="download-btn">

Download Ebook

</a>

</div>

</div>

</div>

</section>

</main>

<section class="ebooks">

<div class="container">

<h2>Ebook Terkait</h2>

<div
class="ebook-grid"
id="relatedBooks">

</div>

</div>

</section>

<footer>

<div class="container">

<p>

© 2026 EbookHub. All Rights Reserved.

</p>

</div>

</footer>

<script>

const EBOOK_SLUG = "${ebook.slug}";

</script>

<script src="../assets/js/data.js"></script>

<script src="../assets/js/utils.js"></script>

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
