import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
import Validator from "@dikac/t-validator/simple";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";
import CompatibleValidatable from "../validatable/compatible";

export default class Compatible<MessageT>
    implements
        Validator<unknown, Date|string|number, Readonly<Instance<unknown, MessageT>>>,
        Message<(result:Readonly<Value> & Readonly<Validatable>)=>MessageT>
{

    constructor(
        public message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageT
    ) {
    }

    validate<Argument extends number>(value: Argument): Readonly<Instance<Argument, MessageT, true>>
    validate<Argument extends unknown>(value: Argument): SimpleValidatable<unknown, Argument, Date|string|number, Readonly<Instance<unknown, MessageT>>>
    validate<Argument extends unknown>(value: Argument) {

        return <SimpleValidatable<unknown, Argument, Date|string|number, Readonly<Instance<number, MessageT>>>> CompatibleValidatable(value, this.message);
    }
}

