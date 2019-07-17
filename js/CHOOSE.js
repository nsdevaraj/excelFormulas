(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', 'formula-errors'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('formula-errors'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.error);
    global.CHOOSE = mod.exports;
  }
})(this, function (exports, module, _formulaErrors) {
  'use strict';

  module.exports = CHOOSE;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _error = _interopRequireDefault(_formulaErrors);

  function CHOOSE() {
    if (arguments.length < 2) {
      return _error['default'].na;
    }

    var index = arguments[0];
    if (index < 1 || index > 254) {
      return _error['default'].value;
    }

    if (arguments.length < index + 1) {
      return _error['default'].value;
    }

    return arguments[index];
  }
});
