'use strict';

$(function () {

    $('.calendar').each(function () {

        let $day = $('.calendar__day', $(this));

        $('.calendar__widget', $(this)).datepicker({
            changeYear: false,
            altField: $day,
            altFormat: "dd"
        });
    });
});
