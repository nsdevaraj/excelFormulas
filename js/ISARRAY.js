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
        global.ISARRAY = mod.exports;
    }
})(this, function (exports, module) {
    'use strict';

    module.exports = isArray;

    function isArray(arr) {
        return Object.prototype.toString.call(arr) === '[object Array]';
    }
});
