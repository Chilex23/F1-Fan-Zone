import React, { createContext, useState } from 'react';
import Drivers from '../../data/drivers';
import TEAMS from '../../data/teams';

export const NavBarContext = createContext({
    isLoading: false,
    standHidden: true,
    driverHidden: true,
    teamHidden: true,
    drivers: Drivers,
    TEAMS: TEAMS,
    toggleDriverHidden: () => {},
    toggleStandHidden: () => {},
    toggleTeamHidden: () => {}
});


const NavProvider = ({ children }) => {
    const [standHidden, setStandHidden] = useState(true);
    const [driverHidden, setDriverHidden] = useState(true);
    const [teamHidden, setTeamHidden] = useState(true);

    const toggleStandHidden = () => {
        setStandHidden(!standHidden);
        setDriverHidden(true);
        setTeamHidden(true);
    };
    const toggleDriverHidden = () => {
        setDriverHidden(!driverHidden);
        setStandHidden(true);
        setTeamHidden(true);
    };
    const toggleTeamHidden = () => {
        setTeamHidden(!teamHidden);
        setStandHidden(true);
        setDriverHidden(true);
    }

    return (
        <NavBarContext.Provider value={{
            standHidden,
            toggleStandHidden,
            driverHidden, 
            toggleDriverHidden,
            teamHidden,
            toggleTeamHidden,
            Drivers,
            TEAMS
        }}>
            {children}
        </NavBarContext.Provider>
    )
}

export default NavProvider;