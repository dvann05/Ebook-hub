/* ===========================
   QUOTE MOTIVASI
=========================== */

const quotes = [
    "Semakin banyak membaca, semakin luas pengetahuan.",
    "Belajar hari ini adalah investasi untuk masa depan.",
    "Satu halaman yang dibaca lebih baik daripada seribu halaman yang direncanakan.",
    "Ilmu adalah harta yang tidak akan habis.",
    "Membaca membuka pintu menuju dunia baru.",
    "Kesuksesan dimulai dari kemauan untuk belajar.",
    "Buku adalah teman terbaik sepanjang waktu.",
    "Pengetahuan adalah kekuatan.",
    "Terus belajar, terus berkembang.",
    "Setiap hari adalah kesempatan untuk menjadi lebih baik."
];

const quoteElement = document.getElementById("quote");

if (quoteElement) {

    const random =
        quotes[Math.floor(Math.random() * quotes.length)];

    quoteElement.textContent = `"${random}"`;

}

/* ===========================
   ELEMENT
=========================== */

const input = document.getElementById("username");
const button = document.getElementById("continueBtn");

/* ===========================
   AUTO LOGIN
=========================== */

const savedName = localStorage.getItem("ebookhub_username");

if (savedName) {

    window.location.href = "index.html";

}

/* ===========================
   VALIDASI
=========================== */

function lanjutkan() {

    const nama = input.value.trim();

    if (nama.length < 3) {

        alert("Nama minimal 3 karakter.");

        input.focus();

        return;

    }

    if (nama.length > 30) {

        alert("Nama terlalu panjang.");

        return;

    }

    button.disabled = true;

    button.innerHTML = "⏳ Menyiapkan perpustakaan...";

    localStorage.setItem(
        "ebookhub_username",
        nama
    );

    setTimeout(() => {

        window.location.href = "index.html";

    }, 1200);

}

/* ===========================
   EVENT
=========================== */

button.addEventListener("click", lanjutkan);

input.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        lanjutkan();

    }

});