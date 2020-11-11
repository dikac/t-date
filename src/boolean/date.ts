export default function Date(value: any) : value is globalThis.Date {

    if(!(value instanceof globalThis.Date)) {

        return false;
    }

    if(isNaN(value.getTime())) {

        return false;
    }

    return true;
}
