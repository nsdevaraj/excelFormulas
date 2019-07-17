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
    global.COND = mod.exports;
  }
})(this, function (exports, module) {
  // COND.js -
  // SYNTAX( condition1, result_if_true [, condition2, result_if_true] )

  'use strict';

  module.exports = COND;

  function COND() {
    for (var _len = arguments.length, cases = Array(_len), _key = 0; _key < _len; _key++) {
      cases[_key] = arguments[_key];
    }

    for (var i = 0; i < cases.length; i = i + 2) {
      var a = cases[i],
          b = cases[i + 1];

      if (i === cases.length - 1 && typeof b === 'undefined') {
        return a;
      } else {
        if (a) {
          return b;
        }
      }
    }
    return undefined;
  }
});
