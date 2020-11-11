import AssertCompatible from "../assert/compatible";
import CompatibleError from "../assert/throwable/compatible";
export default function Compatible(value, error = CompatibleError) {
    AssertCompatible(value, error);
    return value;
}
//# sourceMappingURL=compatible.js.map