export default function Type(value) {
    if (!(value instanceof Date)) {
        return false;
    }
    if (isNaN(value.getTime())) {
        return false;
    }
    return true;
}
//# sourceMappingURL=type.js.map