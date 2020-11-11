import Guard from "../boolean/compatible";
import Callback from "@dikac/t-function/assert/callback";
import NotCompatibleError from "./throwable/compatible";

export default function Compatible(
    value : unknown,
    error : (value:unknown)=>Error = NotCompatibleError
) : asserts value is globalThis.Date|string|number {

    Callback(value, Guard, error);
}
