'use strict';

$(function () {

    function search(text) {
        //ищем text и возвращаем результат
    };

    $('.search').each(function () {

        let $search = $(this);
        let $text = $('.search__text', $search);

        $('.search__submit', $search).on('click', function (event) {
            if ($text.val() == '') return;

            let result = search($text.val());
            if (result) {
                //выводим результат
                return;
            }

            $search.addClass('js-search_error');
            $text.val('');
            $text.attr('placeholder', 'I\'ve not found what I\'m looking for...');
        });

        $('.search__text', $search).on('focusin', function (event) {
            if (!$search.hasClass('js-search_error')) return;

            $search.removeClass('js-search_error');
            $text.attr('placeholder', 'Search');
        });
    });
});