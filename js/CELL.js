(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', 'formula-index2col', 'formula-index2row'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('formula-index2col'), require('formula-index2row'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.INDEX2COL, global.INDEX2ROW);
    global.CELL = mod.exports;
  }
})(this, function (exports, module, _formulaIndex2col, _formulaIndex2row) {
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _INDEX2COL = _interopRequireDefault(_formulaIndex2col);

  var _INDEX2ROW = _interopRequireDefault(_formulaIndex2row);

  /* Structure for CELL reference
   */

  var CELL = (function () {

    /* Accepts a reference to sheet and cell index
     */

    function CELL(sheet, index) {
      _classCallCheck(this, CELL);

      if (sheet.constructor.name !== 'SHEET') {
        throw Error('sheet is expected to be SHEET class');
      }

      this.sheet = sheet;
      this.index = index;
    }

    _createClass(CELL, [{
      key: 'getRow',

      /* Returns object with row/col
       */
      value: function getRow() {
        return (0, _INDEX2ROW['default'])(this.cellIndex);
      }
    }, {
      key: 'getColumn',
      value: function getColumn() {
        return (0, _INDEX2COL['default'])(this.cellIndex);
      }
    }]);

    return CELL;
  })();

  module.exports = CELL;
});
