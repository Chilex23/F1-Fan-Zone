import Drivers from "../data/drivers";

const FindTeamDrivers = (team) => {
    let drivers = Drivers.filter((elem) => elem.team.toLowerCase() === team.toLowerCase());
    if (drivers.length === 0) return "Chima";
    return drivers;
}

export default FindTeamDrivers;