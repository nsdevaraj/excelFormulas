(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'formula-cell'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('formula-cell'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.CELL);
    global.INDIRECT = mod.exports;
  }
})(this, function (exports, _formulaCell) {
  /* Returns a cell indirection
   */
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.INDIRECT = INDIRECT;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _CELL = _interopRequireDefault(_formulaCell);

  function INDIRECT(ref) {
    console.log(this);
    return _CELL['default'].apply(this, [ref]);
  }
});
