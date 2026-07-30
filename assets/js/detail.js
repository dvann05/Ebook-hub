/* ===========================================================
   EbookHub - detail.js
   =========================================================== */

/* ===========================
   GET EBOOK
=========================== */

const slug =
    typeof EBOOK_SLUG !== "undefined"
        ? EBOOK_SLUG
        : new URLSearchParams(window.location.search).get("slug");

const ebook = ebooks.find(book => book.slug === slug);
/* ===========================
   SHOW DETAIL
=========================== */

if (ebook) {

    document.title = `${ebook.title} | EbookHub`;

    document.getElementById("ebookImage").src =
    typeof EBOOK_SLUG !== "undefined"
        ? "../" + ebook.image
        : ebook.image;
    document.getElementById("ebookImage").alt = ebook.title;

    document.getElementById("ebookBanner").src =
    typeof EBOOK_SLUG !== "undefined"
        ? "../" + (ebook.banner || ebook.image)
        : (ebook.banner || ebook.image);

    document.getElementById("ebookTitle").textContent = ebook.title;

    document.getElementById("ebookDescription").textContent =
        ebook.description;


    document.getElementById("ebookRating").textContent =
        "⭐ " + Number(ebook.rating).toFixed(1);

    document.getElementById("ebookDownloads").textContent =
        "📥 " + formatDownloads(ebook.downloads);

    document.getElementById("ebookFormat").textContent =
        "📄 " + ebook.format;

    document.getElementById("ebookCategory").textContent =
        ebook.category;

    document.getElementById("ebookAuthor").textContent =
        ebook.author;

    document.getElementById("ebookSize").textContent =
        ebook.size;

    document.getElementById("ebookPages").textContent =
        ebook.pages;

    document.getElementById("ebookLanguage").textContent =
        ebook.language;

    document.getElementById("downloadBtn").href =
    `../download.html?id=${ebook.id}`;

}

   <script>
  atOptions = {
    'key' : '69fcd5fd56a30742013741f1be4d3c19',
    'format' : 'iframe',
    'height' : 50,
    'width' : 320,
    'params' : {}
  };
</script>
<script src="https://www.highperformanceformat.com/69fcd5fd56a30742013741f1be4d3c19/invoke.js"></script>

   
else {

    document.querySelector("main").innerHTML = `

        <section class="detail">

            <div class="container">

                <h1>Ebook Tidak Ditemukan</h1>

                <p>

                    Ebook yang Anda cari tidak tersedia
                    atau telah dihapus.

                </p>

                <a
                    href="index.html"
                    class="hero-btn"
                >

                    Kembali ke Beranda

                </a>

            </div>

        </section>

    `;

}

/* ===========================
   RELATED EBOOK
=========================== */

const related = document.getElementById("relatedBooks");

if (ebook && related) {

    related.innerHTML = ebooks

        .filter(book => book.slug !== ebook.slug)

        .slice(0, 4)

        .map(book => createEbookCard(book))

        .join("");

}

/* ===========================
   DOWNLOAD GUIDE
=========================== */

function showGuide() {

    alert(`📚 CARA DOWNLOAD EBOOK

1. Klik tombol "Download Ebook".

2. Tunggu halaman download terbuka.

3. Ikuti petunjuk yang muncul.

4. Jika muncul iklan tekan kmbali.

━━━━━━━━━━━━━━━━━━━━

💙 Iklan yang muncul membantu
kami menjaga EbookHub tetap
gratis untuk semua pengguna.

Terima kasih atas dukunganmu.
Selamat membaca! 📖`);

}
