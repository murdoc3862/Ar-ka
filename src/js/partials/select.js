$(document).ready(function () {
    $('.js-select').each(function () {
        $(this).select2({
            dropdownParent: $(this).parent()
        });
    });

    $('.js-select').on('select2:select', function (e) {
        var data = e.params.data;
        $(data.id).click();
    });
});
