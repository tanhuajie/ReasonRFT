$(document).ready(function() {
    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
    };

    // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

})

