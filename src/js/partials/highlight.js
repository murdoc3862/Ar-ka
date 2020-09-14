/* eslint-disable no-console */
// - =====================
// - aurinko: highlight
// - 21-07-2020: Malich
// - ---------------------
// - Block: header.pug
// - Page: Все
// - ---------------------
// - Подсветка элементов
// - =====================
(function () {
    var $links = $('.js-highlight-link');
    var highlight = null;

    function getHighlightByLink($link) {
        return $link.parents('[data-highlight]').data('highlight');
    }

    if ($links.length) {
        $links.hover(function () {
            highlight = getHighlightByLink($(this));
            $links.addClass(highlight);
            $(this).removeClass(highlight);

        }, function () {
            $links.removeClass(highlight);
            highlight = null;
        });
    }
})();
