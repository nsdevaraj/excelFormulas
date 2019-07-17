(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', 'formula-pmt'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('formula-pmt'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.PMT);
    global.FINANCIAL = mod.exports;
  }
})(this, function (exports, module, _formulaPmt) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _PMT = _interopRequireDefault(_formulaPmt);

  module.exports = {
    PMT: _PMT['default']
  };
});
