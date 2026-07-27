/* ===========================================================
   EbookHub - router.js
=========================================================== */

(function () {

    const path = window.location.pathname;

    if (path.startsWith("/ebook/")) {

        const slug = path.split("/").pop();

        window.location.replace(
            "/detail.html?slug=" + encodeURIComponent(slug)
        );

    }

})();
