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
              global.DIVIDE = mod.exports;
       }
})(this, function (exports, module) {
       "use strict";

       module.exports = DIVIDE;

       function DIVIDE(a, b) {
              return a / b;
       }
});
