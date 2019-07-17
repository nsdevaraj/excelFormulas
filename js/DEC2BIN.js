(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', 'formula-parsenumber', 'formula-rept', 'formula-errors'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('formula-parsenumber'), require('formula-rept'), require('formula-errors'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.parseNumber, global.REPT, global.error);
    global.DEC2BIN = mod.exports;
  }
})(this, function (exports, module, _formulaParsenumber, _formulaRept, _formulaErrors) {
  'use strict';

  module.exports = DEC2BIN;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _parseNumber = _interopRequireDefault(_formulaParsenumber);

  var _REPT = _interopRequireDefault(_formulaRept);

  var _error = _interopRequireDefault(_formulaErrors);

  function DEC2BIN(number, places) {

    number = (0, _parseNumber['default'])(number);

    if (number instanceof Error) {
      return number;
    }

    // Return error if number is not decimal, is lower than -512, or is greater than 511
    if (!/^-?[0-9]{1,3}$/.test(number) || number < -512 || number > 511) {
      return _error['default'].num;
    }

    // Ignore places and return a 10-character binary number if number is negative
    if (number < 0) {
      return '1' + (0, _REPT['default'])('0', 9 - (512 + number).toString(2).length) + (512 + number).toString(2);
    }

    // Convert decimal number to binary
    var result = parseInt(number, 10).toString(2);

    // Return binary number using the minimum number of characters necessary if places is undefined
    if (typeof places === 'undefined') {
      return result;
    } else {
      // Return error if places is nonnumeric
      if (isNaN(places)) {
        return _error['default'].value;
      }

      // Return error if places is negative
      if (places < 0) {
        return _error['default'].num;
      }

      // Truncate places in case it is not an integer
      places = Math.floor(places);

      // Pad return value with leading 0s (zeros) if necessary (using Underscore.string)
      return places >= result.length ? (0, _REPT['default'])('0', places - result.length) + result : _error['default'].num;
    }
  }
});
