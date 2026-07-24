const categoryButtons = document.querySelectorAll(".category-btn");

if (categoryButtons.length) {

    categoryButtons.forEach(button => {

        button.addEventListener("click", function () {

            categoryButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            const category = this.dataset.category;

            let html = "";

            ebooks.forEach(ebook => {

                if (
                    category === "Semua" ||
                    ebook.category === category
                ) {

                    html += createEbookCard(ebook);
                }

            });

            grid.innerHTML = html;

        });

    });

}