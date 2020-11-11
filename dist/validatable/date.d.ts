import Validatable from "@dikac/t-validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
export default function Date<MessageT, Argument>(value: Argument, message: (result: Readonly<Value<Argument> & Validatable>) => MessageT): Return<any, Argument, Date, Readonly<Instance<Argument, MessageT>>>;
