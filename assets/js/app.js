/* ===========================================================
   EbookHub - app.js
=========================================================== */

/* ===========================
   RENDER EBOOK
=========================== */

/* ===========================
   PAGINATION
=========================== */

const grid = document.getElementById("ebookGrid");
const pagination = document.getElementById("pagination");

const BOOKS_PER_PAGE = 8;

/* Ebook terbaru tampil paling atas */
const books = [...ebooks].reverse();

const params = new URLSearchParams(window.location.search);

let currentPage = Number(params.get("page")) || 1;

const totalPages = Math.ceil(
    books.length / BOOKS_PER_PAGE
);

function renderBooks() {

    const start =
        (currentPage - 1) * BOOKS_PER_PAGE;

    const end =
        start + BOOKS_PER_PAGE;

    const currentBooks =
        books.slice(start, end);

    grid.innerHTML = currentBooks
        .map(book => createEbookCard(book))
        .join("");

    renderPagination();

}

function renderPagination() {

    pagination.innerHTML = "";

    if (totalPages <= 1) return;

    // PREV
    const prev = document.createElement("button");

    prev.textContent = "←";

    prev.disabled = currentPage === 1;

    prev.onclick = () => {

        changePage(currentPage - 1);

    };

    pagination.appendChild(prev);

    // NOMOR HALAMAN
    for (let i = 1; i <= totalPages; i++) {

        const btn = document.createElement("button");

        btn.textContent = i;

        if (i === currentPage) {

            btn.classList.add("active");

        }

        btn.onclick = () => {

            changePage(i);

        };

        pagination.appendChild(btn);

    }

    // NEXT
    const next = document.createElement("button");

    next.textContent = "→";

    next.disabled = currentPage === totalPages;

    next.onclick = () => {

        changePage(currentPage + 1);

    };

    pagination.appendChild(next);

}

function changePage(page) {

    if (page < 1 || page > totalPages) return;

    const url = new URL(window.location);

    url.searchParams.set("page", page);

    window.location.href = url.toString();

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
