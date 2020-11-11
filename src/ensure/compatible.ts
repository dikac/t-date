import AssertCompatible from "../assert/compatible";
import CompatibleError from "../assert/throwable/compatible";

export default function Compatible(
    value : unknown,
    error : (value:unknown)=>Error = CompatibleError
) : globalThis.Date|string|number  {

    AssertCompatible(value, error);

    return value;
}
