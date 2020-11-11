import Date from "./date";
import DateMessage from "../validatable/string/compatible";

export default function DateStandard() : Date<string> {

    return new Date(DateMessage)
}
