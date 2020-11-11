export default function Date(value) {
    if (!(value instanceof globalThis.Date)) {
        return false;
    }
    if (isNaN(value.getTime())) {
        return false;
    }
    return true;
}
//# sourceMappingURL=date.js.map