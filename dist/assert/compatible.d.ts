export default function Compatible(value: unknown, error?: (value: unknown) => Error): asserts value is globalThis.Date | string | number;
