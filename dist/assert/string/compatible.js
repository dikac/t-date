import SentencesIs from "@dikac/t-string/message/sentences-must";
/**
 * string intended for not Date message
 *
 * @param valid
 * @param value
 * @param subject
 */
export default function Compatible(valid, value, subject = 'type') {
    let sentence = SentencesIs(valid);
    sentence.expect.push('Date');
    sentence.reject = ['must compatible with'];
    sentence.accept = ['is compatible with'];
    sentence.subject.push(subject);
    return sentence.message;
}
//# sourceMappingURL=compatible.js.map