'use strict';

$(function () {

    $('.stages').each(function () {

        let progress = $(this).data('progress');
        let itemsLength = $('.stages__item', $(this)).length;
        $('.stages__progress', $(this))
            .css('width', (100 * (progress - 1) / (itemsLength - 1)) + '%');
    })
});