import SentencesMust from "@dikac/t-string/message/sentences-must";
/**
 * string intended for Date message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export default function Date(valid, value, subject = 'type', conversion = value => typeof value) {
    let sentence = SentencesMust(valid);
    sentence.expect.push('instanceof Date');
    sentence.subject.push(subject);
    sentence.comma.push('expect');
    if (!valid) {
        sentence.actual.push('actual', conversion(value));
    }
    return sentence.message;
}
//# sourceMappingURL=date.js.map