const ebooks = [

{
    id: 1,

    slug: "belajar-html-css",

    title: "Belajar HTML & CSS Dari Nol",

    shortTitle: "Belajar HTML CSS",

    category: "Programming",

    tags: [
        "HTML",
        "CSS",
        "Frontend",
        "Web Development",
        "Programming"
    ],

    author: "EbookHub",

    publisher: "EbookHub",

    language: "Indonesia",

    pages: 245,

    size: "18 MB",

    format: "PDF",

    version: "1.0",

    rating: 4.9,

    downloads: 12540,

    image: "assets/images/ebook/html.webp",

    banner: "assets/images/banner/banner.jpg",

    file: "downloads/html-css.pdf",

    drive: "",

    published: "2026-07-20",

    modified: "2026-07-27",

    description: "Panduan lengkap belajar HTML dan CSS dari dasar hingga mahir. Pelajari struktur HTML, elemen, form, tabel, CSS Selector, Flexbox, Grid, Responsive Design, serta membangun website modern melalui latihan dan project step-by-step yang mudah dipahami, cocok untuk pemula tanpa pengalaman coding."
},

{
    id: 2,

    slug: "javascript-fundamental",

    title: "JavaScript Fundamental",

    shortTitle: "JavaScript",

    category: "Programming",

    tags: [
        "JavaScript",
        "DOM",
        "Fetch API",
        "Programming",
        "Web Development"
    ],

    author: "EbookHub",

    publisher: "EbookHub",

    language: "Indonesia",

    pages: 320,

    size: "12 MB",

    format: "PDF",

    version: "1.0",

    rating: 4.8,

    downloads: 9800,

    image: "assets/images/ebook/javascript.webp",

    banner: "assets/images/banner/banner.jpg",

    file: "downloads/javascript.pdf",

    drive: "",

    published: "2026-07-20",

    modified: "2026-07-27",

    description: "Panduan lengkap JavaScript mulai dari variabel, operator, function, object, array, DOM, Event, Async JavaScript, hingga Fetch API yang disusun secara bertahap agar mudah dipahami oleh pemula."
},

{
    id: 3,

    slug: "belajar-php",

    title: "Belajar PHP",

    shortTitle: "PHP",

    category: "Programming",

    tags: [
        "PHP",
        "Backend",
        "Web Development",
        "Programming"
    ],

    author: "EbookHub",

    publisher: "EbookHub",

    language: "Indonesia",

    pages: 290,

    size: "16 MB",

    format: "PDF",

    version: "1.0",

    rating: 4.7,

    downloads: 7400,

    image: "assets/images/ebook/php.webp",

    banner: "assets/images/banner/banner.jpg",

    file: "downloads/php.pdf",

    drive: "",

    published: "2026-07-20",

    modified: "2026-07-27",

    description: "Belajar PHP dari dasar hingga mampu membangun website dinamis. Materi mencakup sintaks PHP, form, session, database, CRUD, autentikasi, dan studi kasus pembuatan aplikasi web."
},

{
    id: 4,

    slug: "belajar-mysql",

    title: "Belajar MySQL",

    shortTitle: "MySQL",

    category: "Database",

    tags: [
        "MySQL",
        "SQL",
        "Database",
        "Programming"
    ],

    author: "EbookHub",

    publisher: "EbookHub",

    language: "Indonesia",

    pages: 210,

    size: "10 MB",

    format: "PDF",

    version: "1.0",

    rating: 4.8,

    downloads: 6100,

    image: "assets/images/ebook/mysql.webp",

    banner: "assets/images/banner/banner.jpg",

    file: "downloads/mysql.pdf",

    drive: "",

    published: "2026-07-20",

    modified: "2026-07-27",

    description: "Panduan lengkap membuat, mengelola, dan mengoptimalkan database MySQL. Pelajari SQL dasar, relasi tabel, query, index, backup database, hingga implementasi pada aplikasi web."
},

{
    id: 5,

    slug: "panduan-bisnis-digital",

    title: "Panduan Bisnis Digital",

    shortTitle: "Bisnis Digital",

    category: "Bisnis",

    tags: [
        "Bisnis",
        "Digital Marketing",
        "Online Business",
        "Entrepreneur"
    ],

    author: "EbookHub",

    publisher: "EbookHub",

    language: "Indonesia",

    pages: 180,

    size: "9 MB",

    format: "PDF",

    version: "1.0",

    rating: 4.8,

    downloads: 3200,

    image: "assets/images/ebook/bisnis.webp",

    banner: "assets/images/banner/banner.jpg",

    file: "downloads/bisnis.pdf",

    drive: "",

    published: "2026-07-20",

    modified: "2026-07-27",

    description: "Panduan membangun bisnis digital dari nol. Membahas riset pasar, branding, strategi pemasaran, monetisasi, pengelolaan pelanggan, hingga pengembangan bisnis secara berkelanjutan."
},

    {
    id: 6,

    slug: "ai-untuk-pemula",

    title: "AI untuk Pemula",

    shortTitle: "AI Pemula",

    category: "AI",

    tags: [
        "Artificial Intelligence",
        "AI",
        "ChatGPT",
        "Produktivitas",
        "Teknologi"
    ],

    author: "EbookHub",

    publisher: "EbookHub",

    language: "Indonesia",

    pages: 220,

    size: "10 MB",

    format: "PDF",

    version: "1.0",

    rating: 4.9,

    downloads: 5400,

    image: "assets/images/ebook/ai.webp",

    banner: "assets/images/banner/banner.jpg",

    file: "downloads/ai.pdf",

    drive: "",

    published: "2026-07-20",

    modified: "2026-07-27",

    description: "Belajar memanfaatkan Artificial Intelligence (AI) untuk meningkatkan produktivitas, membantu pekerjaan, membuat konten, serta mengembangkan bisnis secara efektif menggunakan teknologi AI modern."
},

{
    id: 7,

    slug: "canva-masterclass",

    title: "Canva Masterclass",

    shortTitle: "Canva",

    category: "Canva",

    tags: [
        "Canva",
        "Desain",
        "Template",
        "Konten",
        "Media Sosial"
    ],

    author: "EbookHub",

    publisher: "EbookHub",

    language: "Indonesia",

    pages: 6,

    size: "64 MB",

    format: "eCourse/Video",

    version: "1.0",

    rating: 4.8,

    downloads: 4100,

    image: "assets/images/ebook/canva.webp",

    banner: "assets/images/banner/banner.jpg",

    file: "downloads/canva.pdf",

    drive: "https://drive.google.com/drive/folders/1jh3dmU--Ou3MBulGsMfpvPnxCETumHdV?usp=drive_link",

    published: "2026-07-20",

    modified: "2026-07-27",

    description: "Panduan lengkap menggunakan Canva untuk membuat desain profesional, konten media sosial, presentasi, poster, logo, banner, hingga materi promosi dengan mudah."
},

{
    id: 8,

    slug: "dasar-desain-grafis",

    title: "Dasar-dasar Desain Grafis",

    shortTitle: "Desain Grafis",

    category: "Desain",

    tags: [
        "Desain",
        "Grafis",
        "Canva",
        "Branding",
        "Visual"
    ],

    author: "EbookHub",

    publisher: "EbookHub",

    language: "Indonesia",

    pages: 6,

    size: "85 MB",

    format: "eCourse",

    version: "1.0",

    rating: 4.8,

    downloads: 3900,

    image: "assets/images/ebook/desain.webp",

    banner: "assets/images/banner/banner.jpg",

    file: "downloads/desain.pdf",

    drive: "https://drive.google.com/drive/folders/1wtOigdg7HcwuZ59e-YpuWIg64ptApLnI",

    published: "2026-07-20",

    modified: "2026-07-27",

    description: "Belajar dasar-dasar desain grafis mulai dari teori warna, tipografi, layout, komposisi, hingga prinsip visual untuk menghasilkan desain yang menarik dan profesional."
},

{
    id: 9,

    slug: "digital-marketing",

    title: "Digital Marketing",

    shortTitle: "Marketing",

    category: "Marketing",

    tags: [
        "Marketing",
        "Digital Marketing",
        "SEO",
        "Social Media",
        "Bisnis"
    ],

    author: "EbookHub",

    publisher: "EbookHub",

    language: "Indonesia",

    pages: 250,

    size: "13 MB",

    format: "PDF",

    version: "1.0",

    rating: 4.9,

    downloads: 6100,

    image: "assets/images/ebook/marketing.webp",

    banner: "assets/images/banner/banner.jpg",

    file: "downloads/marketing.pdf",

    drive: "https://drive.google.com/drive/folders/11c5i2DHEvixo04uGrVAnT_dPqawN47RI",

    published: "2026-07-20",

    modified: "2026-07-27",

    description: "Strategi digital marketing lengkap untuk meningkatkan penjualan melalui SEO, media sosial, content marketing, email marketing, iklan digital, dan optimasi konversi."
},

{
    id: 10,

    slug: "70-worksheet-bahasa-inggris-anak",

    title: "70+ Worksheet Bahasa Inggris Anak-Anak",

    shortTitle: "Worksheet Anak",

    category: "Worksheet",

    tags: [
        "Worksheet",
        "Bahasa Inggris",
        "PAUD",
        "TK",
        "SD"
    ],

    author: "EbookHub",

    publisher: "EbookHub",

    language: "Indonesia & English",

    pages: 70,

    size: "36 MB",

    format: "PDF",

    version: "1.0",

    rating: 4.9,

    downloads: 977,

    image: "assets/images/ebook/worksheet-anak.webp",

    banner: "assets/images/banner/worksheet-anak.webp",

    file: "downloads/70-worksheet-anak.pdf",

    drive: "https://drive.google.com/drive/folders/1KR0Vj2XOKxzdTyh2BlDx_bg5ktpJv2oo",

    published: "2026-07-20",

    modified: "2026-07-27",

    description: "Kumpulan lebih dari 70 worksheet belajar bahasa Inggris untuk anak usia PAUD, TK, dan SD. Berisi latihan alfabet, vocabulary, tracing, matching, coloring, grammar dasar, reading, writing, dan berbagai aktivitas belajar yang menyenangkan."
},

    {
    id: 11,

    slug: "premiere-pro-templates-effects",

    title: "Premiere Pro Templates & Effects",

    shortTitle: "Premiere Pro Templates",

    category: "Desain",

    tags: [
        "Premiere Pro",
        "Templates",
        "Effects",
        "Video Editing",
        "Motion Graphics"
    ],

    author: "EbookHub",

    publisher: "EbookHub",

    language: "Indonesia",

    pages: 1000,

    size: "2 GB+",

    format: "Template & Effects",

    version: "1.0",

    rating: 4.9,

    downloads: 1500,

    image: "assets/images/ebook/premiere.webp",

    banner: "assets/images/banner/banner.jpg",

    file: "",

    drive: "https://drive.google.com/drive/folders/18ZK-rtIl7F3NExEotF8oPLct_qvad9V0",

    published: "2026-07-20",

    modified: "2026-07-27",

    description: "Koleksi Premiere Pro Templates & Effects premium untuk mempercepat proses editing video. Berisi template intro, outro, transition, title, motion graphics, slideshow, serta berbagai efek profesional yang siap digunakan untuk berbagai kebutuhan konten."
},

{
    id: 12,

    slug: "540-fashion-social-media-templates",

    title: "540 Fashion Social Media Templates",

    shortTitle: "Fashion Templates",

    category: "Desain",

    tags: [
        "Fashion",
        "Templates",
        "Instagram",
        "Facebook",
        "Canva"
    ],

    author: "EbookHub",

    publisher: "EbookHub",

    language: "Indonesia",

    pages: 540,

    size: "250+ MB",

    format: "Template",

    version: "1.0",

    rating: 4.8,

    downloads: 9800,

    image: "assets/images/ebook/fashion1.webp",

    banner: "assets/images/banner/banner.jpg",

    file: "downloads/javascript.pdf",

    drive: "https://drive.google.com/drive/folders/1Tm5q_9PVBaRDnfhGlyW-DHbJvtlBVcOK?usp=drive_link",

    published: "2026-07-20",

    modified: "2026-07-27",

    description: "Koleksi 540 Fashion Social Media Templates siap edit untuk Instagram, Facebook, dan berbagai platform media sosial. Desain modern, elegan, profesional, dan mudah disesuaikan untuk memperkuat branding bisnis fashion."
},

{
    id: 13,

    slug: "60-skincare-social-media-templates",

    title: "60 Skincare Social Media Templates",

    shortTitle: "Skincare Templates",

    category: "Desain",

    tags: [
        "Skincare",
        "Beauty",
        "Templates",
        "Instagram",
        "Branding"
    ],

    author: "EbookHub",

    publisher: "EbookHub",

    language: "Indonesia",

    pages: 60,

    size: "12 MB",

    format: "Template",

    version: "1.0",

    rating: 4.9,

    downloads: 8400,

    image: "assets/images/ebook/skincare1.webp",

    banner: "assets/images/banner/skincare1.jpg",

    file: "downloads/php.pdf",

    drive: "https://drive.google.com/drive/folders/1i5sZSDH0JZ0Xn_Bu2D8mfnfzZR-D5Dwy?usp=sharing",

    published: "2026-07-20",

    modified: "2026-07-27",

    description: "Koleksi 60 Skincare Social Media Templates siap edit untuk Instagram, Facebook, dan media sosial lainnya. Desain modern, bersih, profesional, dan cocok untuk membangun branding bisnis skincare maupun produk kecantikan."
},

{
    id: 14,

    slug: "50-facebook-post-templates",

    title: "50 Facebook Post Templates",

    shortTitle: "Facebook Templates",

    category: "Produktivitas",

    tags: [
        "Facebook",
        "Social Media",
        "Marketing",
        "Templates",
        "Promosi"
    ],

    author: "EbookHub",

    publisher: "EbookHub",

    language: "Indonesia",

    pages: 50,

    size: "40 MB",

    format: "Template",

    version: "1.0",

    rating: 4.8,

    downloads: 6400,

    image: "assets/images/ebook/50facebook.webp",

    banner: "assets/images/banner/banner.jpg",

    file: "downloads/php.pdf",

    drive: "https://drive.google.com/drive/folders/1wRt6S0YpHfC1GR1T1Q8atXaOwFhpoHMc?usp=drive_link",

    published: "2026-07-20",

    modified: "2026-07-27",

    description: "Koleksi 50 Facebook Post Templates siap edit untuk promosi bisnis, produk, layanan, dan konten media sosial. Desain modern, profesional, serta mudah disesuaikan untuk meningkatkan kualitas dan daya tarik postingan Facebook."
},

{
    id: 15,

    slug: "mastering-etsy-pinterest",

    title: "Mastering Etsy & Pinterest",

    shortTitle: "Etsy & Pinterest",

    category: "Produktivitas",

    tags: [
        "Mastering Etsy",
        "Pinterest Marketing",
        "Etsy SEO",
        "Digital Marketing",
        "Online Business"
    ],

    author: "EbookHub",

    publisher: "EbookHub",

    language: "Indonesia",

    pages: 58,

    size: "15 MB",

    format: "PDF",

    version: "1.0",

    rating: 4.9,

    downloads: 1254,

    image: "assets/images/ebook/etsypinterest.webp",

    banner: "assets/images/banner/banner.jpg",

    file: "downloads/html-css.pdf",

    drive: "https://drive.google.com/drive/folders/1LTQkoIClPtSqMWPtvPTZ4rjgMfmOffwP?usp=sharing",

    published: "2026-07-28",

    modified: "2026-07-28",

    description: "Mastering Etsy & Pinterest adalah panduan lengkap untuk membangun bisnis digital, meningkatkan traffic organik, dan menghasilkan lebih banyak penjualan melalui strategi Etsy SEO serta Pinterest Marketing. Pelajari langkah demi langkah cara mengoptimalkan toko, membuat pin yang viral, meningkatkan visibilitas produk, dan mengembangkan bisnis online secara efektif untuk pemula maupun profesional."
}

];
