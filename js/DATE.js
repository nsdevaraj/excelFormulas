(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', 'formula-serial'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('formula-serial'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.SERIAL);
    global.DATE = mod.exports;
  }
})(this, function (exports, module, _formulaSerial) {
  'use strict';

  module.exports = DATE;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _SERIAL = _interopRequireDefault(_formulaSerial);

  function DATE(year, month, day) {
    return (0, _SERIAL['default'])(new Date(year, month - 1, day));
  }
});
