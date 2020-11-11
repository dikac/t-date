import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import DateMessage from "../../assert/string/compatible";

export default function Compatible(object : Readonly<Validatable & Value>) : string {

    return DateMessage(object.valid, object.value)
}
