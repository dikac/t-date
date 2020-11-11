import CompatibleType from "../string/compatible";

export default function Compatible(value : unknown, subject : string = '') : Error {

    return new Error(CompatibleType(false, value, subject))
}
