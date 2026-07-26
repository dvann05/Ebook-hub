// Mengambil ID dari URL
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

// Mencari ebook berdasarkan ID
const ebook = getEbookById(id);

// Mengambil elemen HTML
const title = document.getElementById("downloadTitle");
const fileTitle = document.getElementById("fileTitle");
const fileFormat = document.getElementById("fileFormat");
const fileSize = document.getElementById("fileSize");
const filePages = document.getElementById("filePages");
const countdown = document.getElementById("countdown");
const btn = document.getElementById("downloadBtn");

// Jika ebook ditemukan
if (ebook) {

    // Mengisi data ebook
    title.textContent = "Download " + ebook.title;
    fileTitle.textContent = ebook.title;
    fileFormat.textContent = ebook.format;
    fileSize.textContent = ebook.size;
    filePages.textContent = ebook.pages;

    // Nonaktifkan tombol selama countdown
    btn.href = "#";
    btn.classList.add("disabled");
    btn.style.pointerEvents = "none";

    let time = 10;

    const timer = setInterval(() => {

        time--;
        countdown.textContent = time;

        if (time <= 0) {

            clearInterval(timer);

            countdown.textContent = "✓";

            btn.classList.remove("disabled");
            btn.style.pointerEvents = "auto";
            btn.textContent = "📥 Download Sekarang";

            const status = document.getElementById("downloadStatus");

            status.innerHTML = "✅ Tombol download sudah aktif. Silakan klik tombol di bawah.";
            status.style.background = "#dcfce7";
            status.style.color = "#15803d";

            // Klik tombol → buka iklan lalu Google Drive
            btn.onclick = function (e) {

                e.preventDefault();

                // Buka iklan
                window.open(
                    "https://www.effectivecpmnetwork.com/gfa8wechck?key=4f8c6d97bc83607cd1e976e49265de12",
                    "_blank"
                );

                // Setelah 1 detik buka Google Drive ebook
                setTimeout(function () {

                    if (ebook.drive) {

                        window.open(
                            ebook.drive,
                            "_blank"
                        );

                    } else {

                        alert("Link Google Drive untuk ebook ini belum tersedia.");

                    }

                }, 1000);

            };

        }

    }, 1000);

} else {

    title.textContent = "Ebook tidak ditemukan";
    btn.style.display = "none";

}