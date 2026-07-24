const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const keyword = this.value.toLowerCase().trim();

        let html = "";

        ebooks.forEach(ebook => {

            if (
    ebook.title.toLowerCase().includes(keyword) ||
    ebook.category.toLowerCase().includes(keyword) ||
    ebook.author.toLowerCase().includes(keyword)
) {
    html += createEbookCard(ebook);
}

        });

        grid.innerHTML = html;

    });

}