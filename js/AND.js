(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'module', 'formula-flatten'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module, require('formula-flatten'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod, global.FLATTEN);
        global.AND = mod.exports;
    }
})(this, function (exports, module, _formulaFlatten) {
    'use strict';

    module.exports = AND;

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _FLATTEN = _interopRequireDefault(_formulaFlatten);

    function AND() {
        var result = true;
        var list = (0, _FLATTEN['default'])(arguments);
        for (var i = 0; i < list.length; i++) {
            result = result && arguments[i];
            if (!result) return false;
        }
        return true;
    }
});
