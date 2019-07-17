(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "module"], factory);
  } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.FILTER = mod.exports;
  }
})(this, function (exports, module) {
  /* The filter an array or a range by a set of filters */

  "use strict";

  module.exports = FILTER;

  function FILTER(range) {
    for (var _len = arguments.length, filters = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      filters[_key - 1] = arguments[_key];
    }

    // A filter is an array of true/false values.
    // The filter may be for rows or for columns but not both.
    // A array filter may only filter a range that covers a single row or a single column.

    function makeFilter() {
      return function (value, index) {
        return filters.reduce(function (previousValue, currentValue) {
          if (previousValue === false) {
            return false;
          } else if (previousValue === true) {
            return currentValue[index];
          } else {
            return previousValue[index] && currentValue[index];
          }
        });
      };
    }

    return range.filter(makeFilter());
  }
});
