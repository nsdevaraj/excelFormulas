(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', 'formula-isref', 'formula-errors'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('formula-isref'), require('formula-errors'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.ISREF, global.error);
    global.SORT = mod.exports;
  }
})(this, function (exports, module, _ISREF, _ERROR) {
  /* SORT a reference.
   *
   * The criteria may use 1 of several forms:
   *
   * SORT(reference(reference: Array, ...criteria : List<string>)
   * SORT(reference(reference: Range, ...criteria : List<string>)
   *
   * The List<function> will be reduced into a single function.
   *
   * The list<string> will also be reduced into a single function which
   * interprets the strings as pairs. The odd items are fields and the
   * even ones are direction (ASC|DESC).
  **/

  'use strict';

  module.exports = SORT;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _ISREF2 = _interopRequireDefault(_ISREF);

  var _error = _interopRequireDefault(_ERROR);

  function SORT(ref) {
    for (var _len = arguments.length, criteria = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      criteria[_key - 1] = arguments[_key];
    }

    // reduce the criteria array into a function
    var makeComparer = function makeComparer() {
      return function (a, b) {
        var result = 0;
        for (var i = 0; i < criteria.length; i + 2) {
          var field = +criteria[i] - 1,
              order = criteria[i + 1];

          if (a[field] < b[field]) {
            return order ? -1 : 1;
          } else {
            return order ? 1 : -1;
          }
        }

        return result;
      };
    };

    if ((0, _ISREF2['default'])(ref) || Array.isArray(ref)) {
      return ref.sort(makeComparer());
    }

    return _error['default'].na;
  }
});
