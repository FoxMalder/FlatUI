'use strict';

import './main.styl';

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

requireAll(require.context('./plugins/', true, /^\.\/.*\.js$/));
requireAll(require.context('./plugins/', true, /^\.\/.*\.css$/));
requireAll(require.context('./blocks/', true, /^\.\/.*\.js$/));
