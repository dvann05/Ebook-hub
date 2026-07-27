/* ===========================================================
   EbookHub - utils.js
   =========================================================== */

/* ===========================
   FORMAT DOWNLOAD
=========================== */

function formatDownloads(downloads) {

    if (downloads >= 1000000) {

        return (downloads / 1000000).toFixed(1) + " Juta";

    }

    if (downloads >= 1000) {

        return (downloads / 1000).toFixed(1) + " Ribu";

    }

    return downloads.toString();

}

/* ===========================
   FORMAT RATING
=========================== */

function formatRating(rating) {

    return Number(rating).toFixed(1);

}

/* ===========================
   CREATE EBOOK CARD
=========================== */

function createEbookCard(ebook) {

    return `

    <article class="ebook-card fade-in">

        <div class="ebook-cover">

            <img
                src="${ebook.image}"
                alt="${ebook.title}"
                loading="lazy"
            >

            <span class="category-badge">

                ${ebook.category}

            </span>

        </div>

        <div class="ebook-body">

            <h3>${ebook.title}</h3>

            <p>${ebook.description || "Temukan ebook berkualitas untuk meningkatkan pengetahuan dan keterampilan Anda."}</p>

            <div class="ebook-info">

                <span>⭐ ${formatRating(ebook.rating)}</span>

                <span>📥 ${formatDownloads(ebook.downloads)}</span>

            </div>

            <a
    href="/ebook/${ebook.slug}"
    class="ebook-btn"
    onclick="openBook(event, '${ebook.slug}')"
>
    Lihat Detail
</a>

        </div>

    </article>

    `;

}

/* ===========================
   GET EBOOK BY ID
=========================== */

function getEbookById(id) {

    return ebooks.find(ebook => String(ebook.id) === String(id));

}

/* ===========================
   GET EBOOKS BY CATEGORY
=========================== */

function getEbooksByCategory(category) {

    if (!category || category === "Semua") {

        return ebooks;

    }

    return ebooks.filter(ebook => ebook.category === category);

}

/* ===========================
   SEARCH EBOOK
=========================== */

function searchEbooks(keyword) {

    if (!keyword) {

        return ebooks;

    }

    const search = keyword.toLowerCase();

    return ebooks.filter(ebook =>

        ebook.title.toLowerCase().includes(search) ||

        ebook.category.toLowerCase().includes(search) ||

        (ebook.description || "").toLowerCase().includes(search)

    );

}
