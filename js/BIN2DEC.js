(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "module", "formula-errors"], factory);
    } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
        factory(exports, module, require("formula-errors"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod, global.error);
        global.unknown = mod.exports;
    }
})(this, function (exports, module, _formulaErrors) {
    "use strict";

    module.exports = BIN2DEC;

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

    var _error = _interopRequireDefault(_formulaErrors);

    function BIN2DEC(value) {
        var valueAsString;

        if (typeof value === "string") {
            valueAsString = value;
        } else if (typeof value !== "undefined") {
            valueAsString = value.toString();
        } else {
            return _error["default"].NA;
        }

        if (valueAsString.length > 10) return _error["default"].NUM;

        // we subtract 512 when the leading number is 0.
        if (valueAsString.length === 10 && valueAsString[0] === "1") {
            return parseInt(valueAsString.substring(1), 2) - 512;
        }

        // Convert binary number to decimal with built-in facility
        return parseInt(valueAsString, 2);
    }

    ;
});

