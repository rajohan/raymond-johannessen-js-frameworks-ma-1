$(document).ready(function() {
    $('.fotorama').fotorama({
        width: 800,
        height: 500,
        nav: "thumbs",
        allowfullscreen: "native",
        fit: "cover",
        autoplay: "3000",
        loop: "true",
        arrows: "always"
    });
});