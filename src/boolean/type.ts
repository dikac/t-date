export default function Type(value: any) : value is Date {

    if(!(value instanceof Date)) {

        return false;
    }

    if(isNaN(value.getTime())) {

        return false;
    }

    return true;
}