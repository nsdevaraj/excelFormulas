(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', 'formula-isnumber', 'formula-errors'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('formula-isnumber'), require('formula-errors'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.ISNUMBER, global.error);
    global.ABS = mod.exports;
  }
})(this, function (exports, module, _formulaIsnumber, _formulaErrors) {
  'use strict';

  module.exports = ABS;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _ISNUMBER = _interopRequireDefault(_formulaIsnumber);

  var _error = _interopRequireDefault(_formulaErrors);

  function ABS(value) {
    if (!(0, _ISNUMBER['default'])(value)) {
      return _error['default'].value;
    }
    return Math.abs(value);
  }
});
