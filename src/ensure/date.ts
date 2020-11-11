import AssertDate from "../assert/date";
import DateError from "../assert/throwable/date";

export default function Date(
    value : unknown,
    error : (value:unknown)=>Error = DateError
) : globalThis.Date {

    AssertDate(value, error);

    return value;
}
