(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', 'formula-constants', 'formula-index2row'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('formula-constants'), require('formula-index2row'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.formulaConstants, global.INDEX2ROW);
    global.INDEX2COL = mod.exports;
  }
})(this, function (exports, module, _formulaConstants, _formulaIndex2row) {
  'use strict';

  module.exports = INDEX2COL;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _INDEX2ROW = _interopRequireDefault(_formulaIndex2row);

  function INDEX2COL(index) {
    return index - (0, _INDEX2ROW['default'])(index) * _formulaConstants.MAX_COLS;
  }
});
