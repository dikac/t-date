import Type from "./type";
export default function Compatible(value, nullable = false) {
    if (!nullable && value === null) {
        return false;
    }
    if (Type(value)) {
        return true;
    }
    try {
        if (!Type(new Date(value))) {
            return false;
        }
    }
    catch (e) {
        return false;
    }
    return true;
}
//# sourceMappingURL=compatible.js.map