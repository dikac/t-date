import Date from "../../../dist/ensure/date";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`null`, () => {
    try {
        Date(null);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});





