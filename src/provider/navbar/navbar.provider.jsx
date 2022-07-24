import React, { createContext, useState } from 'react';

export const NavBarContext = createContext({
    standHidden: true,
    driverHidden: true,
    toggleDriverHidden: () => {},
    toggleStandHidden: () => {}
});


const NavProvider = ({ children }) => {
    const [standHidden, setStandHidden] = useState(true);
    const [driverHidden, setDriverHidden] = useState(true);

    const toggleStandHidden = () => {
        setStandHidden(!standHidden);
        setDriverHidden(true);
    };
    const toggleDriverHidden = () => {
        setDriverHidden(!driverHidden);
        setStandHidden(true);
    }

    return (
        <NavBarContext.Provider value={{standHidden, toggleStandHidden, driverHidden, toggleDriverHidden}}>
            {children}
        </NavBarContext.Provider>
    )
}

export default NavProvider;