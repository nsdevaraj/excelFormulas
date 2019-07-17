(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', 'formula-constants'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('formula-constants'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.formulaConstants);
    global.INDEX2ROW = mod.exports;
  }
})(this, function (exports, module, _formulaConstants) {
  'use strict';

  module.exports = INDEX2ROW;

  function INDEX2ROW(index) {
    return Math.floor(index / _formulaConstants.MAX_COLS);
  }
});
