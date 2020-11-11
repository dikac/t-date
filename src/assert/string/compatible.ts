import SentencesIs from "@dikac/t-string/message/sentences-must";

/**
 * string intended for not Date message
 *
 * @param valid
 * @param value
 * @param subject
 */
export default function Compatible(
    valid : boolean,
    value : unknown,
    subject : string = 'type',
) : string {

    let sentence = SentencesIs(valid);

    sentence.expect.push('Date');
    sentence.reject = ['must compatible with'];
    sentence.accept = ['is compatible with'];
    sentence.subject.push(subject);

    return sentence.message;
}
