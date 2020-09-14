/* eslint-disable no-console */
// - =====================
// - aurinko: dropdown
// - 21-07-2020: Malich
// - ---------------------
// - Block: header.pug
// - Page: Все
// - ---------------------
// - Выподаюшщее меню
// - =====================
(function () {
    var $links = $('[data-dropdown-link]');
    var $lists = $('[data-dropdown-list]');
    var $list = null;
    var duration = 300;
    var timeOutId = null;

    /**
     * Получаение списка по атрибуту
     * @param {String} data - атрибут, типа id связь между элементами
     * @returns {jQuery<HTMLElement>} получаем jq список
     */
    function getListByData(data) {
        return $lists.filter(function () {
            return $(this).attr('data-dropdown-list') === data;
        });
    }

    /**
     * Событие "Открытия" списка
     * @param {Event<Object>} this - запонляется автоматом при исполнении событии, часто текуший элемент
     */
    function onEnter() {
        var data = $(this).data('dropdown-link') || $(this).data('dropdown-list');
        clearTimeout(timeOutId);

        $list = getListByData(data);
        $list.addClass('open');
    }

    /**
     * Событие "Закрытия" списка
     * @param {Event<Object>} this - запонляется автоматом при исполнении событии, часто текуший элемент
     */
    function onLeave() {
        timeOutId = setTimeout(function () {
            $list.removeClass('open');
            $list = null;
        }, duration);
    }

    if ($links.length && $lists.length) {
        $links.hover(onEnter, onLeave);
        $lists.hover(onEnter, onLeave);
    }
})();
