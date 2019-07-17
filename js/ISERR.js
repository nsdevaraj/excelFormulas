(function (global, factory) {
         if (typeof define === 'function' && define.amd) {
                  define(['exports', 'module', 'formula-errors'], factory);
         } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
                  factory(exports, module, require('formula-errors'));
         } else {
                  var mod = {
                           exports: {}
                  };
                  factory(mod.exports, mod, global.error);
                  global.ISERR = mod.exports;
         }
})(this, function (exports, module, _formulaErrors) {
         'use strict';

         module.exports = ISERR;

         function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

         var _error = _interopRequireDefault(_formulaErrors);

         function ISERR(value) {
                  if (typeof value === 'undefined' || value === null) {
                           return false;
                  }
                  value = value.valueOf();
                  return [_error['default'].nil, _error['default'].value, _error['default'].ref, _error['default'].name, _error['default'].num, _error['default'].error, _error['default'].data, _error['default'].missing, _error['default'].unknown].indexOf(value) >= 0 || typeof value === 'number' && (value !== value || !isFinite(value)); // ensure numbers are not NaN or Infinity
         }
});
