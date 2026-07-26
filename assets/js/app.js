/* ===========================================================
   EbookHub - app.js
   =========================================================== */

/* ===========================
   RENDER EBOOK
=========================== */

const grid = document.getElementById("ebookGrid");

if (grid && typeof ebooks !== "undefined") {

    grid.innerHTML = ebooks
        .map(ebook => createEbookCard(ebook))
        .join("");

}

/* ===========================
   SIDEBAR
=========================== */

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const closeMenu = document.getElementById("closeMenu");

function openSidebar() {

    sidebar?.classList.add("active");
    overlay?.classList.add("active");

}

function closeSidebar() {

    sidebar?.classList.remove("active");
    overlay?.classList.remove("active");

}

menuToggle?.addEventListener("click", openSidebar);

closeMenu?.addEventListener("click", closeSidebar);

overlay?.addEventListener("click", closeSidebar);

/* ===========================
   USER PROFILE
=========================== */

const userName = document.getElementById("userName");
const greeting = document.getElementById("greeting");
const avatar = document.getElementById("userAvatar");

const nama = localStorage.getItem("ebookhub_username");

if (nama) {

    if (userName) {

        userName.textContent = nama;

    }

    if (avatar) {

        avatar.textContent = nama.charAt(0).toUpperCase();

    }

    if (greeting) {

        const jam = new Date().getHours();

        let sapaan = "👋 Selamat Datang";

        if (jam >= 5 && jam < 11) {

            sapaan = "☀️ Selamat Pagi";

        } else if (jam >= 11 && jam < 15) {

            sapaan = "🌤️ Selamat Siang";

        } else if (jam >= 15 && jam < 18) {

            sapaan = "🌇 Selamat Sore";

        } else {

            sapaan = "🌙 Selamat Malam";

        }

        greeting.textContent = sapaan;

    }

}

/* ===========================
   SCROLL TO TOP
=========================== */

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (!scrollTopBtn) return;

    if (window.scrollY > 300) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn?.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ===========================
   ACTIVE CATEGORY
=========================== */

const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});

/* ===========================
   FADE ANIMATION
=========================== */

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

fadeElements.forEach(element => {

    observer.observe(element);

});