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
    global.NE = mod.exports;
  }
})(this, function (exports, module) {
  "use strict";

  module.exports = NE;

  function NE(a, b) {
    if (typeof a === "string" && typeof b === "string") {
      return a.toLowerCase() !== b.toLowerCase();
    } else {
      return a !== b;
    }
  }
});
