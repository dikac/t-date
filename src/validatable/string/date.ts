import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Compatible from "../../assert/string/date";

export default function Date(object : Readonly<Validatable & Value>) : string {

    return Compatible(object.valid, object.value)
}
