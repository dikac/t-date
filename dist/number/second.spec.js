(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../dist/number/second"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const second_1 = require("../../dist/number/second");
    it("force console log", () => { spyOn(console, 'log').and.callThrough(); });
    describe('second', () => {
        it("valid", () => {
            let millisecond = 1472502588123;
            let date = new Date(millisecond);
            let actual = second_1.default(date);
            let expectation = Math.floor(millisecond / 1000);
            expect(expectation).toBe(actual);
        });
    });
});
//# sourceMappingURL=second.spec.js.map