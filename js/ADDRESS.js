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
        global.unknown = mod.exports;
    }
})(this, function (exports, module) {
    /* Convert Column to Index (e.g A -> 1) */
    "use strict";

    module.exports = ADDRESS;
    function toColumn(column_index) {

        // The column is determined by applying a modified Hexavigesimal algorithm.
        // Normally BA follows Z but spreadsheets count wrong and nobody cares.

        // Instead they do it in a way that makes sense to most people but
        // is mathmatically incorrect. So AA follows Z which in the base 10
        // system is like saying 01 follows 9.

        // In the least significant digit
        // A..Z is 0..25

        // For the second to nth significant digit
        // A..Z is 1..26

        var converted = "",
            secondPass = false,
            remainder,
            value = Math.abs(column_index);

        do {
            remainder = value % 26;

            if (secondPass) {
                remainder--;
            }

            converted = String.fromCharCode(remainder + "A".charCodeAt(0)) + converted;
            value = Math.floor((value - remainder) / 26);

            secondPass = true;
        } while (value > 0);

        return converted;
    }

    /* Convert a row & column into an address */

    function ADDRESS(row, col, absolute_relative_mode, use_a1_notation, sheet) {
        switch (absolute_relative_mode) {
            case 0:
                return toColumn(col - 1) + row.toString();
            case 2:
                return toColumn(col - 1) + "$" + row.toString();
            case 3:
                return "$" + toColumn(col - 1) + row.toString();
            default:
                return "$" + toColumn(col - 1) + "$" + row.toString();
        }
    }
});

