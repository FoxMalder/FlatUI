'use strict';

$(function() {

    $('.js-pie-chart__items').peity('donut', {
        fill: [ '#747474', '#e75735', '#4eb7a8', '#e5e5e5'],
        radius: 47.5,
        innerRadius: 30.5
    });
});