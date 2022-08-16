import React, { useContext, useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/img/f1_logo.svg";
import { NavBarContext } from "../../provider/navbar/navbar.provider";
import StandingsMenuDropDown from "../standingsMenu/standingsMenu";
import DriverMenuDropDwn from "../DriverMenuDropDwn/driverMenuDropdwn.component";
import TeamsMenu from "../teams-menu/teams-menu.component";
import SideBar from "../side-bar/side-bar";
import NavBarLink from "../navbar-link/navbar-link";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { toggleTheme, setInitalTheme } from "../../utils/theme";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

const NavBar = () => {
  const {
    standHidden,
    driverHidden,
    teamHidden,
    sideBarHidden,
    toggleSideBarHidden,
    toggleStandHidden,
    toggleDriverHidden,
    toggleTeamHidden,
  } = useContext(NavBarContext);

  const [navBarWidth, setNavBarWidth] = useState(window.innerWidth);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const toggleThemeHandler = () => {
    toggleTheme();
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    function handleResize() {
      setNavBarWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  // Set theme on first load
  useEffect(() => {
    localStorage.getItem("theme") === "light"
      ? setTheme("light")
      : setTheme("dark");
    setInitalTheme();
  }, []);

  return (
    <>
      <div className="navbar bg-red-600 text-white fixed top-0 z-40 shadow-lg">
        <div className="flex-1">
          <Logo className="w-20" />
        </div>
        <div className="flex-none">
          <div
            className="flex mr-4 justify-between cursor-pointer"
            onClick={toggleThemeHandler}
          >
            {theme === "light" ? (
              <BsSun className="text-2xl" />
            ) : (
              <BsMoon className="text-2xl" />
            )}
          </div>
          {navBarWidth < 700 ? (
            <div onClick={toggleSideBarHidden} className="cursor-pointer">
              {sideBarHidden ? (
                <GiHamburgerMenu className="text-4xl" />
              ) : (
                <IoCloseSharp className="text-4xl" />
              )}
            </div>
          ) : (
            <ul className="menu menu-horizontal p-0">
              <li tabIndex="0">
                <Link to="/">Home</Link>
              </li>

              <NavBarLink toggleFn={toggleStandHidden} label="Standings" />
              <NavBarLink toggleFn={toggleDriverHidden} label="Drivers" />
              <NavBarLink toggleFn={toggleTeamHidden} label="Teams" />
            </ul>
          )}
        </div>
      </div>
      {standHidden || navBarWidth < 700 ? null : <StandingsMenuDropDown />}
      {driverHidden || navBarWidth < 700 ? null : <DriverMenuDropDwn />}
      {teamHidden || navBarWidth < 700 ? null : <TeamsMenu />}
      {navBarWidth < 700 ? <SideBar /> : null}
    </>
  );
};

export default NavBar;
