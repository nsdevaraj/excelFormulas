(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', 'formula-cellindex', 'formula-index2col', 'formula-index2row'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('formula-cellindex'), require('formula-index2col'), require('formula-index2row'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.CELLINDEX, global.INDEX2COL, global.INDEX2ROW);
    global.unknown = mod.exports;
  }
})(this, function (exports, module, _CELLINDEX, _INDEX2COL, _INDEX2ROW) {
  /*
   * A range represents a fragment of a worksheet.
   * It is defined as two points in a flat worksheet array.
   *
   * Use address system to convert row/col to cell indexes.
   */

  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _CELLINDEX2 = _interopRequireDefault(_CELLINDEX);

  var _INDEX2COL2 = _interopRequireDefault(_INDEX2COL);

  var _INDEX2ROW2 = _interopRequireDefault(_INDEX2ROW);

  var RANGE = (function () {

    /* The constructor captures top left and bottom right cell indexes.
     */

    function RANGE(topLeft, bottomRight) {
      var name = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

      _classCallCheck(this, RANGE);

      this.topLeft = topLeft;
      this.bottomRight = bottomRight;
      this.name = name;
      this.length = this.cells().length;
    }

    _createClass(RANGE, [{
      key: 'hit',

      /* Determine if cellIndex is within range
       */
      value: function hit(cellIndex) {
        // The cell id puts the whole table into a single dimension. It simply needs to be between the topLeft and the bottomRight to qualify.
        return this.topLeft <= cellIndex && cellIndex <= this.bottomRight;
      }
    }, {
      key: 'topLeftCell',

      /* Return the top left cell
       */
      value: function topLeftCell() {
        return;
      }
    }, {
      key: 'topColumn',

      /* Return the first column
       */
      value: function topColumn() {
        return (0, _INDEX2COL2['default'])(this.topLeft);
      }
    }, {
      key: 'topRow',

      /* Return the first row
       */
      value: function topRow() {
        return (0, _INDEX2ROW2['default'])(this.topLeft);
      }
    }, {
      key: 'bottomColumn',

      /* Return the bottom column
       */
      value: function bottomColumn() {
        return (0, _INDEX2COL2['default'])(this.bottomRight);
      }
    }, {
      key: 'bottomRow',

      /* Return the bottom row_num
       */
      value: function bottomRow() {
        return (0, _INDEX2ROW2['default'])(this.bottomRight);
      }
    }, {
      key: 'data',

      /* Returns an array with the data
       */
      value: function data() {
        return this.cells().map(function (n) {
          return n ? n.valueOf() : undefined;
        });
      }
    }, {
      key: 'cells',

      /* Return a list of cells
       */
      value: function cells() {
        var start = typeof this.topLeft === 'function' ? this.topLeft() : this.topLeft,
            end = typeof this.bottomRight === 'function' ? this.bottomRight() : this.bottomRight,
            that = this;

        return Array.apply(start, Array(end + 1)).map(function (x, y) {
          return y;
        });
      }
    }, {
      key: 'rows',

      /* Return a list of rows
       */
      value: function rows() {
        var self = this;
        return Array.apply(this.topRow(), Array(this.bottomRow() + 1)).map(function (x, row) {
          return Array.apply(self.topColumn(), Array(self.bottomColumn() + 1)).map(function (x, col) {
            return [(0, _CELLINDEX2['default'])(col, row)];
          });
        });
      }
    }, {
      key: 'filter',

      /* Implements a filter a set of rows */
      value: function filter(f) {
        this.rows();
      }
    }]);

    return RANGE;
  })();

  module.exports = RANGE;
});

