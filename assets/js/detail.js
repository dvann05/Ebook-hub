/* ===========================================================
   EbookHub - detail.js
   =========================================================== */

/* ===========================
   GET EBOOK
=========================== */

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const ebook = getEbookById(id);

/* ===========================
   SHOW DETAIL
=========================== */

if (ebook) {

    document.title = `${ebook.title} | EbookHub`;

    document.getElementById("ebookImage").src = ebook.image;
    document.getElementById("ebookImage").alt = ebook.title;

    document.getElementById("ebookBanner").src = ebook.banner || ebook.image;

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
        `download.html?id=${ebook.id}`;

} else {

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

        .filter(book => book.id != ebook.id)

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
