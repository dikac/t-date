import DateValidatable from "../validatable/date";
export default class Date {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return DateValidatable(value, this.message);
    }
}
//# sourceMappingURL=date.js.map