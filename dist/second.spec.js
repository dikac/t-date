(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../dist/second"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const second_1 = require("../dist/second");
    it("force console log", () => { spyOn(console, 'log').and.callThrough(); });
    describe('second', () => {
        it("valid", () => {
            let actual = second_1.default(1472502588).getTime();
            let expectation = new Date('Monday, 29-Aug-16 20:29:48 UTC').getTime();
            expect(expectation).toBe(actual);
        });
    });
});
//# sourceMappingURL=second.spec.js.map