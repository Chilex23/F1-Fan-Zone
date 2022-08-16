import React, { createContext, useState } from "react";
import Drivers from "../../data/drivers";
import TEAMS from "../../data/teams";

export const NavBarContext = createContext({
  isLoading: false,
  standHidden: true,
  driverHidden: true,
  teamHidden: true,
  sideBarHidden: true,
  drivers: Drivers,
  TEAMS: TEAMS,
  toggleDriverHidden: () => {},
  toggleStandHidden: () => {},
  toggleTeamHidden: () => {},
  toggleSideBarHidden: () => {},
});

const NavProvider = ({ children }) => {
  const [standHidden, setStandHidden] = useState(true);
  const [driverHidden, setDriverHidden] = useState(true);
  const [teamHidden, setTeamHidden] = useState(true);
  const [sideBarHidden, setSideBarHidden] = useState(true);

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
  };
  const toggleSideBarHidden = () => {
    setSideBarHidden(!sideBarHidden);
  };

  return (
    <NavBarContext.Provider
      value={{
        standHidden,
        toggleStandHidden,
        driverHidden,
        toggleDriverHidden,
        teamHidden,
        toggleTeamHidden,
        Drivers,
        TEAMS,
        sideBarHidden,
        toggleSideBarHidden,
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
};

export default NavProvider;
