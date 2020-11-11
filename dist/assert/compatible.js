import Guard from "../boolean/compatible";
import Callback from "@dikac/t-function/assert/callback";
import NotCompatibleError from "./throwable/compatible";
export default function Compatible(value, error = NotCompatibleError) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=compatible.js.map