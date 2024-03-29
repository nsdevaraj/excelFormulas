(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'module'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod);
        global.ISNUMBER = mod.exports;
    }
})(this, function (exports, module) {
    'use strict';

    module.exports = isNumber;

    function isNumber(value) {
        return typeof value === 'number' && !isNaN(value) && isFinite(value);
    }
});
