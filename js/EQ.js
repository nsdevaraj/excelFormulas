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
    global.EQ = mod.exports;
  }
})(this, function (exports, module) {
  "use strict";

  module.exports = EQ;

  function EQ(a, b) {
    // Unlike JavaScript the string comparisions are case-insensitive
    if (typeof a === "string" && typeof b === "string") {
      return a.toLowerCase() === b.toLowerCase();
    } else {
      return a === b;
    }
  }
});
