import AssertDate from "../assert/date";
import DateError from "../assert/throwable/date";
export default function Date(value, error = DateError) {
    AssertDate(value, error);
    return value;
}
//# sourceMappingURL=date.js.map