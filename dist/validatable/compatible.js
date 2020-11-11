import Callback from "@dikac/t-validator/validatable/callback-function";
import CompatibleGuard from "../boolean/compatible";
export default function Compatible(value, message) {
    return Callback(value, CompatibleGuard, message);
}
//# sourceMappingURL=compatible.js.map