'use strict';

import Vimeo from '@vimeo/player';

$(function () {

    $('.js-video-player').each(function () {

        let options = {
            id: $(this).data('video-id'),
            width: $(this).width()
        };

        new Vimeo($('.js-video-player__widget', $(this))[0], options);
    })
});