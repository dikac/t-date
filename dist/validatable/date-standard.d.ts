import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
export default function DateStandard<Argument extends unknown>(value: Argument): Return<unknown, Argument, globalThis.Date, Readonly<Instance<Argument, string>>>;
