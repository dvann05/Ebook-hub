const actions = [
    "👀 Baru saja melihat",
    "⭐ Baru saja membuka halaman",
    "❤️ Menambahkan ke favorit" 
];

const names = [
    "Andi Saputra",
    "Budi Santoso",
    "Rina Oktaviani",
    "Siti Aisyah",
    "Fajar Nugroho",
    "Rizky Pratama",
    "Nadia Putri",
    "Putri Maharani",
    "Agus Setiawan",
    "Dewi Lestari",
    "Kevin Jonathan",
    "Sarah Amanda",
    "Ahmad Fauzan",
    "Rafael Wijaya",
    "Lina Marlina",
    "Yoga Prasetyo",
    "Reza Maulana",
    "Nisa Rahma",
    "Dimas Saputra",
    "Rani Puspita",
    "Bayu Kurniawan",
    "Aulia Rahman",
    "Arif Hidayat",
    "Indah Permata",
    "Rafi Akbar",
    "Tiara Anindya",
    "Yusuf Ramadhan",
    "Anisa Fitri",
    "Ilham Syahputra",
    "Citra Lestari",
    "Dian Purnama",
    "Fadli Ramadhan",
    "Aisyah Nuraini",
    "Farhan Hakim",
    "Nabila Zahra",
    "Wahyu Firmansyah",
    "Lutfi Hidayat",
    "Naufal Azmi",
    "Rendra Kurnia",
    "Salsa Aurelia",
    "Rama Aditya",
    "Nanda Prakoso",
    "Gilang Ramadhan",
    "Maya Sari",
    "Vina Anggraini",
    "Yuni Kartika",
    "Hendra Gunawan",
    "Aldi Firmansyah",
    "Fikri Ramadhan",
    "Teguh Prasetyo"
];

const popup = document.getElementById("downloadPopup");
const popupImage = document.getElementById("popupImage");
const popupName = document.getElementById("popupName");
const popupText = document.getElementById("popupText");

function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function showPopup() {

    const ebook = random(ebooks);

    popupImage.src = ebook.image;

    popupName.textContent =
        `${random(names)}`;

    popupText.textContent =
        `${random(actions)} "${ebook.title}"`;

    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 2500);

}

setInterval(showPopup, 3000);