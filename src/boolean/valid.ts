import Type from "./type";

export default function Valid(value: any) : value is Date {

    if(!Type(value)) {

        return false;
    }

    if(isNaN(value.getTime())) {

        return false;
    }

    return true;
}