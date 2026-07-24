const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const ebook = getEbookById(id);

if(ebook){

document.getElementById("ebookImage").src = ebook.image;
document.getElementById("ebookImage").alt = ebook.title;

document.getElementById("ebookTitle").textContent = ebook.title;

document.getElementById("ebookRating").textContent =
"⭐ " + ebook.rating;

document.getElementById("ebookDownloads").textContent =
"📥 " + ebook.downloads.toLocaleString();

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

document.getElementById("ebookDescription").textContent =
ebook.description;

document.getElementById("ebookBanner").src =
ebook.banner;

document.getElementById("downloadBtn").href =
"download.html?id=" + ebook.id;

}

const related = document.getElementById("relatedBooks");

let relatedHTML = "";

ebooks.forEach(book => {

    if (book.id !== ebook.id) {

        relatedHTML += `
        <div class="ebook-card">
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.category}</p>

            <div class="ebook-info">
                <span>⭐ ${book.rating}</span>
                <span>📥 ${book.downloads.toLocaleString()}</span>
            </div>

            <a href="detail.html?id=${book.id}" class="detail-btn">
                Lihat Detail
            </a>
        </div>
        `;
    }

});

related.innerHTML = relatedHTML;

function showGuide(){

    alert(
`📚 CARA DOWNLOAD EBOOK

Halo! Ikuti langkah-langkah berikut agar proses download berhasil.

━━━━━━━━━━━━━━━━━━━━

1️⃣ Klik tombol "Download Ebook".

2️⃣ Kamu akan diarahkan ke halaman selanjutnya.

3️⃣ Tunggu beberapa saat,lalu akan menuju halaman sponsor Anda hanya menekan kembal

4️⃣ Setelah kembali, klik tombol download jika diperlukan dan ebook akan mulai diunduh.

━━━━━━━━━━━━━━━━━━━━

💙 Kenapa ada halaman sponsor?

Iklan membantu kami membagikan ebook gratis dan menjaga website tetap aktif tanpa biaya untuk pengunjung.

🙏 Terima kasih atas dukunganmu.
Selamat membaca dan semoga bermanfaat! 📖`
    );

}