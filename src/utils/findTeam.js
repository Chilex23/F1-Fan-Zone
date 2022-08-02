import TEAMS from "../data/teams";

const FindTeam = (team) => {
    let obj = TEAMS.find((elem) => elem.teamName.toLowerCase() === team.toLowerCase());
    if (obj === undefined) return "Chima";
    return obj;
}

export default FindTeam;