import Compatible from "./compatible";
import DateMessage from "../validatable/string/date";

export default function CompatibleStandard() : Compatible<string> {

    return new Compatible(DateMessage)
}
