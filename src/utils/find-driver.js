import Drivers from "../data/drivers";

const findDriver = (name) => {
    return Drivers.find((elem) => elem.givenName.toLowerCase() === name.toLowerCase());
}

export default findDriver;