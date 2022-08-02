import Drivers from "../data/drivers";

const findDriver = (name) => {
    let obj = Drivers.find((elem) => elem.givenName.toLowerCase() === name.toLowerCase());
    if (obj === undefined) return "Chima";
    return obj;
}

export default findDriver;