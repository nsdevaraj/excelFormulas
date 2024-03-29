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
        global.ISFUNCTION = mod.exports;
    }
})(this, function (exports, module) {
    'use strict';

    module.exports = isFunction;

    function isFunction(f) {
        return f && Object.prototype.toString.call(f) == '[object Function]';
    }

    ;
});
