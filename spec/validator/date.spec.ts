import Validator from "../../dist/validator/date";
import StringMessage from "../../dist/validatable/string/date";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validator = new Validator(StringMessage);
        let validatable = validator.validate(<unknown>new Date());

        if(validatable.valid) {

            // compiler pass
            let string : Date = validatable.value;
            expect(string).toBeInstanceOf(Date);

        } else {

            // @ts-expect-error
            let string : Date = validatable.value;
            fail('validatable.valid should false')
        }
    });

    it(`invalid value`,function() {

        let validator = new Validator(StringMessage);
        let validatable = validator.validate({});

        if(validatable.valid) {

            // compiler pass
            let string : Date = validatable.value;
            fail('validatable.valid should false')

        } else {

            // @ts-expect-error
            let string : Date = validatable.value;
            // @ts-expect-error
            expect(string).toEqual({});
        }
    });

    it(`readonly`,function() {

        let validator = new Validator(StringMessage);
        let validatable = validator.validate('1');

        try {
            // @ts-expect-error
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        // @ts-expect-error
        validatable.value = true;

        try {
            // @ts-expect-error
            validatable.message = 'message';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


it(`valid`,function() {

    let validator = new Validator(StringMessage);
    let validatable = validator.validate(new Date());

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBeInstanceOf(Date);
    expect(typeof validatable.message).toBe("string");

});

it(`invalid`,function() {

    let validator = new Validator(StringMessage);
    let validatable = validator.validate(1);

    expect<boolean>(validatable.valid).toBe(false);
    expect(validatable.value).toBe(1);
    expect(typeof validatable.message).toBe("string");

});



