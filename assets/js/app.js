const grid = document.getElementById("ebookGrid");

let html = "";

ebooks.forEach(ebook => {
    html += createEbookCard(ebook);
});

grid.innerHTML = html;

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const closeMenu = document.getElementById("closeMenu");

menuToggle.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
});

closeMenu.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

function closeSidebar(){
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
}

/* ===========================
   USER PROFILE
=========================== */

const nama = localStorage.getItem("ebookhub_username");

const greeting = document.getElementById("greeting");
const userName = document.getElementById("userName");
const avatar = document.getElementById("userAvatar");

if (nama) {

    userName.textContent = nama;

    avatar.textContent =
        nama.charAt(0).toUpperCase();

    const jam = new Date().getHours();

    let sapaan = "Selamat Datang";

    if (jam >= 5 && jam < 11) {

        sapaan = "☀️ Selamat Pagi";

    }

    else if (jam >= 11 && jam < 15) {

        sapaan = "🌤️ Selamat Siang";

    }

    else if (jam >= 15 && jam < 18) {

        sapaan = "🌇 Selamat Sore";

    }

    else {

        sapaan = "🌙 Selamat Malam";

    }

    greeting.textContent = sapaan;

}
