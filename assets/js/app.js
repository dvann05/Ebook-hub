const grid = document.getElementById("ebookGrid");

let html = "";

ebooks.forEach(ebook => {
    html += createEbookCard(ebook);
});

grid.innerHTML = html;