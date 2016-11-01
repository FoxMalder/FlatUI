'use strict';

import Vimeo from '@vimeo/player';

$(function () {

    $('.video-player').each(function () {

        let options = {
            id: $(this).data('video-id'),
            width: $(this).width()
        };

        new Vimeo($('.video-player__widget', $(this))[0], options);
    })
});