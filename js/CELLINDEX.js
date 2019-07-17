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
    global.CELLINDEX = mod.exports;
  }
})(this, function (exports, module, _formulaConstants) {
  'use strict';

  module.exports = CELLINDEX;

  function CELLINDEX(row, col) {
    return Math.floor(row * _formulaConstants.MAX_COLS) + col;
  }
});
