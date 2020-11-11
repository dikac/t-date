import Dateype from "../string/date";

export default function Date(value : unknown, subject : string = '') : Error {

    return new Error(Dateype(false, value, subject))
}
