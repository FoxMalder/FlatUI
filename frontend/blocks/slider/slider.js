'use strict'

$(function() {

    $('.slider').each(function () {

        let $handleTooltip = $('.slider__handle-tooltip', $(this));
        let $sliderScale = $('.slider__scale', $(this));
        let sliderColor = $(this).data('slider-color');

        $('.slider__widget', $(this)).slider({
            range: $sliderScale.length ? 'min' : false,
            create: $handleTooltip.length ? function () {
                $handleTooltip = $('.slider__handle-tooltip', $(this));
                $handleTooltip.text($(this).slider('value'));
            } : function () {},
            slide: $handleTooltip.length ? function (event, ui) {
                $handleTooltip.text(ui.value);
            } : function () {}
        });

        if( $sliderScale )
            $('.ui-slider-range', $(this)).css('background-color', sliderColor);
        $('.slider__handle', $(this)).css('background-color', sliderColor);

        if($handleTooltip.length) {
            let $handle = $('.slider__handle', $(this));
            $handle.on('mousedown', function (event) {
                $handleTooltip.addClass('js-slider__handle-tooltip_active')
            });
            $(this).on('mousedown', function (event) {
                $handleTooltip.addClass('js-slider__handle-tooltip_active')
            });
            $('body').on('mouseup', function (event) {
                $handleTooltip.removeClass('js-slider__handle-tooltip_active')
            });
        }
    });
});