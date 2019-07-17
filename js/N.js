(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', 'formula-isnumber', 'formula-iserror', 'formula-serial'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('formula-isnumber'), require('formula-iserror'), require('formula-serial'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.ISNUMBER, global.ISERROR, global.SERIAL);
    global.N = mod.exports;
  }
})(this, function (exports, module, _formulaIsnumber, _formulaIserror, _formulaSerial) {
  'use strict';

  module.exports = N;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _ISNUMBER = _interopRequireDefault(_formulaIsnumber);

  var _ISERROR = _interopRequireDefault(_formulaIserror);

  var _SERIAL = _interopRequireDefault(_formulaSerial);

  function N(value) {
    if ((0, _ISNUMBER['default'])(value)) {
      return value;
    }
    if (value instanceof Date) {
      return serial(value);
    }
    if (value === true) {
      return 1;
    }
    if (value === false) {
      return 0;
    }
    if ((0, _ISERROR['default'])(value)) {
      return value;
    }
    return 0;
  }
});
