// - ====================
// - aurinko: accordion
// - 30-07-2020: sashakasha
// - ---------------------
// - Accordion
// - ====================
$(function () {
    var mobileOpen = function () {
        if (window.innerWidth < 1280) {
            $('.js-mobile-open').find('.group').addClass('active');
            $('.js-mobile-open').find('.content').show();
            $('.js-mobile-open .js-accordion').accordion('disable');
        } else {
            $('.js-mobile-open').find('.group').removeClass('active');
            $('.js-mobile-open').find('.content').hide();
            $('.js-mobile-open .js-accordion').accordion('enable');
            $('.js-mobile-open .js-accordion').accordion('option', 'active', true);
        }
    };

    $('.js-accordion').accordion({
        active: false,
        collapsible: true,
        header: '.header',
        heightStyle: 'content',
        icons: false,
        beforeActivate: function (event, ui) {
            setTimeout(function () {
                var $akk = $('.ui-state-active');
                $('.group').removeClass('active');
                if ($akk.length) {
                    $akk.parents('.group').addClass('active');
                }
            });
        }
    });


    mobileOpen();
    $(window).on('resize', function () {
        mobileOpen();
    });

});
