'use strict';

$(function () {

    $('.stages').each(function () {

        let progress = $(this).data('progress');
        let itemsLength = $('.stages__item', $(this)).length;
        $('.stages__progress', $(this))
            .css('width', (100 * (progress - 1) / (itemsLength - 1)) + '%');

        $(this).on('change', function (event) {

            progress = $(this).data('progress');
            $('.stages__progress', $(this))
                .css('width', (100 * (progress - 1) / (itemsLength - 1)) + '%');

            let items = $('.stages__item', $(this));
            for (i = 0; i < items.length; i++) {
                if (progress < i)
                    items[i].addClass('stages__item_completed');
                else
                    items[i].removeClass('stages__item_completed');
            }
        })
    })
});