const params = new URLSearchParams(window.location.search);

const keyword = (params.get("q") || "").toLowerCase();

const grid = document.getElementById("searchGrid");

const text = document.getElementById("searchResultText");

let html = "";

ebooks.forEach(ebook => {

    if(

        ebook.title.toLowerCase().includes(keyword) ||

        ebook.category.toLowerCase().includes(keyword) ||

        ebook.author.toLowerCase().includes(keyword)

    ){

        html += createEbookCard(ebook);

    }

});

if(html === ""){

    text.textContent = "Tidak ada ebook yang ditemukan.";

}else{

    text.textContent = `Hasil pencarian untuk "${keyword}"`;

}

grid.innerHTML = html;