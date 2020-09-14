/* eslint-disable no-console */
// - =====================
// - aurinko: header-burger
// - 21-07-2020: Malich
// - ---------------------
// - Block: header.pug
// - Page: Все
// - ---------------------
// - Открытие/закрытие бургер меню
// - =====================
(function () {
    var $burger = $('.js-header-burger');
    var $overlay = $('.js-header-burger-overlay');
    var $header = $('.js-header');

    if ($burger.length) {
        $burger.on('click', function () {
            $(this).toggleClass('open');
            $overlay.toggleClass('open');
            $header.css('transform', '');
        });
    }
})();
