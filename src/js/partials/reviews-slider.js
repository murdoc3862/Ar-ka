// - ====================
// - aurinko: reviews-slider
// - 08-04-2020: sashakasha
// - ---------------------
// - Reviews-slider
// - ====================

(function () {
    if ($('.js-reviews-slider').length > 0) {

        $('.js-reviews-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            dotsClass: 'b-dots',
            infinite: false,
            rows: 0
        });
    }
})();
