(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'module', 'formula-constants'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module, require('formula-constants'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod, global.formulaConstants);
        global.SERIAL = mod.exports;
    }
})(this, function (exports, module, _formulaConstants) {
    'use strict';

    module.exports = function (date) {
        return Math.ceil((date - _formulaConstants.d1900) / _formulaConstants.MilliSecondsInDay) + (date > -2203891200000 ? 2 : 1);
    };
});
