export default function Type(value: any) : value is Date {

    return value instanceof Date;
}