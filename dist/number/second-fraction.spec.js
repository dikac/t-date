(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../dist/number/second-fraction"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const second_fraction_1 = require("../../dist/number/second-fraction");
    it("force console log", () => { spyOn(console, 'log').and.callThrough(); });
    describe('second fraction', () => {
        it("valid", () => {
            let millisecond = 1472502588123;
            let date = new Date(millisecond);
            let actual = second_fraction_1.default(date);
            let expectation = millisecond / 1000;
            expect(expectation).toBe(actual);
        });
    });
});
//# sourceMappingURL=second-fraction.spec.js.map