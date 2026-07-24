function formatDownloads(downloads){

    if(downloads >= 1000000){
        return (downloads / 1000000).toFixed(1) + " Juta";
    }

    if(downloads >= 1000){
        return (downloads / 1000).toFixed(1) + " Ribu";
    }

    return downloads.toString();

}

function createEbookCard(ebook){

    return `
    <div class="ebook-card">

        <img src="${ebook.image}" alt="${ebook.title}">

        <h3>${ebook.title}</h3>

        <p>${ebook.category}</p>

        <div class="ebook-info">
            <span>⭐ ${ebook.rating}</span>
            <span>📥 ${formatDownloads(ebook.downloads)}</span>
        </div>

        <a href="detail.html?id=${ebook.id}" class="detail-btn">
            Lihat Detail
        </a>

    </div>
    `;

}

function getEbookById(id){

    return ebooks.find(ebook => ebook.id == id);

}