(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../dist/millisecond"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const millisecond_1 = require("../dist/millisecond");
    it("force console log", () => { spyOn(console, 'log').and.callThrough(); });
    describe('second', () => {
        it("valid", () => {
            let date = new Date('Monday, 29-Aug-16 20:29:48 UTC');
            let expectation = date.getTime();
            let actual = millisecond_1.default(date.getTime()).getTime();
            expect(expectation).toBe(actual);
        });
    });
});
//# sourceMappingURL=milisecond.spec.js.map