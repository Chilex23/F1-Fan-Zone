import React, { createContext, useState, useEffect } from 'react';
import fetchDrivers from '../../utils/fetchdrivers';

export const NavBarContext = createContext({
    isLoading: false,
    standHidden: true,
    driverHidden: true,
    teamHidden: true,
    drivers: [],
    toggleDriverHidden: () => {},
    toggleStandHidden: () => {},
    toggleTeamHidden: () => {}
});


const NavProvider = ({ children }) => {
    const [standHidden, setStandHidden] = useState(true);
    const [driverHidden, setDriverHidden] = useState(true);
    const [teamHidden, setTeamHidden] = useState(true);
    const [isLoading, setLoading] = useState(false);

    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetchDrivers().then(resp => { setDrivers(resp) });
    }, [])


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
            drivers
        }}>
            {isLoading ? children : <div>Loading</div>}
        </NavBarContext.Provider>
    )
}

export default NavProvider;