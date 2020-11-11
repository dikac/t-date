import CompatibleType from "../string/compatible";
export default function Compatible(value, subject = '') {
    return new Error(CompatibleType(false, value, subject));
}
//# sourceMappingURL=compatible.js.map