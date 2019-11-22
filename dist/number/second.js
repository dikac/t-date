(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./second-fraction"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const second_fraction_1 = require("./second-fraction");
    function Second(date) {
        return Math.floor(second_fraction_1.default(date));
    }
    exports.default = Second;
});
//# sourceMappingURL=second.js.map