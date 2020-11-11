import CompatibleValidatable from "../validatable/compatible";
export default class Compatible {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return CompatibleValidatable(value, this.message);
    }
}
//# sourceMappingURL=compatible.js.map