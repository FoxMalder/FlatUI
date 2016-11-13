'use strict';

import './main.styl';

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

requireAll(require.context('./plugins/', true, /^\.\/.*\.(js|css)$/));
requireAll(require.context('./blocks/', true, /^\.\/.*\.js$/));


    // "webpack": "1.13.2",
    // "babel-loader": "6.2.5",
    // "babel-core": "6.17.0",
    // "babel-preset-es2015": "6.16.0",
    // "extract-text-webpack-plugin": "1.0.1",
    // "html-webpack-plugin": "2.22.0",
    // "pug": "2.0.0-beta6",
    // "pug-loader": "2.3.0",
    // "stylus": "0.54.5",
    // "stylus-loader": "2.3.1",
    // "css-loader": "0.25.0",
    // "style-loader": "0.13.1",
    // "file-loader": "0.9.0",

    // "jquery": "3.1.1",
    // "@vimeo/player": "1.0.6"