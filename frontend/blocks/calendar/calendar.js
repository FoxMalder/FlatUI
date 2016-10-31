'use strict';

$(function () {

    $('.calendar').each(function () {

        let $day = $('.calendar__day', $(this));

        $('.calendar__widget', $(this)).datepicker({
            changeYear: false,
            altField: $day,
            altFormat: "dd",
            firstDay: 1
        });

        $('.calendar__btn-today', $(this)).on('click', (event) => {
            $('.calendar__widget', $(this)).datepicker('setDate', new Date());
        })
    });
});
