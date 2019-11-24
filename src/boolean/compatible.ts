import Type from "./type";

export default function Compatible(value: any) : value is Date {

    if(Type(value)) {

        return true;
    }

    try {

        if(!Type(new Date(value))) {

            return false;
        }

    } catch (e) {

        return false;
    }

    return true;
}