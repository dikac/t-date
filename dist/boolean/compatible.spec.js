(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../dist/boolean/compatible"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const compatible_1 = require("../../dist/boolean/compatible");
    it("force console log", () => { spyOn(console, 'log').and.callThrough(); });
    describe('valid', () => {
        it("string", () => {
            expect(compatible_1.default('Monday, 29-Aug-16 20:29:48 UTC')).toBe(true);
            expect(compatible_1.default('2020-12-16T20:24:00.000Z')).toBe(true);
        });
        it("object", () => {
            expect(compatible_1.default(new Date())).toBe(true);
            expect(compatible_1.default(new Date('2020-12-16T20:24:00.000Z'))).toBe(true);
        });
    });
    describe('ivvalid', () => {
        it("string", () => {
            expect(compatible_1.default('Monday')).toBe(false);
            expect(compatible_1.default('20~202')).toBe(false);
        });
        it("object", () => {
            expect(compatible_1.default(new Date('='))).toBe(false);
            expect(compatible_1.default(new Date('?'))).toBe(false);
        });
    });
});
//# sourceMappingURL=compatible.spec.js.map