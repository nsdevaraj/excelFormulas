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
    global.REPT = mod.exports;
  }
})(this, function (exports, module) {
  'use strict';

  module.exports = REPT;

  function REPT(t, n) {
    var r = '';
    for (var i = 0; i < n; i++) {
      r += t;
    }
    return r;
  }
});
