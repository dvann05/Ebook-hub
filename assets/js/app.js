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
