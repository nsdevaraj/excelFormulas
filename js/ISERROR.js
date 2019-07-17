(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'module', 'formula-errors', 'formula-iserr'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module, require('formula-errors'), require('formula-iserr'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod, global.error, global.ISERR);
        global.ISERROR = mod.exports;
    }
})(this, function (exports, module, _formulaErrors, _formulaIserr) {
    'use strict';

    module.exports = isError;

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _error = _interopRequireDefault(_formulaErrors);

    var _ISERR = _interopRequireDefault(_formulaIserr);

    function isError(value) {
        return (0, _ISERR['default'])(value) || value === _error['default'].na;
    }
});
