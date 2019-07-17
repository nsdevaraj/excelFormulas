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
    global.unknown = mod.exports;
  }
})(this, function (exports, module) {
  'use strict';

  module.exports = FIND;

  function FIND(find_text, within_text, position) {
    if (!within_text) {
      return null;
    }
    position = typeof position === 'undefined' ? 1 : position;
    position = within_text.indexOf(find_text, position - 1) + 1;
    return position === 0 ? workbook.errors.value : position;
  }
});

