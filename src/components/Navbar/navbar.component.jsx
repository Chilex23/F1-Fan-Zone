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
import { motion } from "framer-motion";

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
      <div className="w-full bg-red-600 text-white fixed top-0 z-40 shadow-lg flex items-center justify-between py-3 md:py-4 pl-4 pr-4 md:pr-0">
        <div className="flex-grow-0">
          <Logo className="w-20" />
        </div>
        <div className="flex">
          <div
            className="flex mr-4 lg:mr-6 justify-between items-center cursor-pointer"
            onClick={toggleThemeHandler}
          >
            {theme === "light" ? (
              <motion.div
                initial={{opacity: 0}}
                animate={{ opacity: [0, 0, 1] }}
                transition={{ duration: .5 }}
              >
                <BsSun className="text-2xl" />
              </motion.div>
            ) : (
              <motion.div
                initial={{opacity: 0}}
                animate={{ opacity: [0, 1] }}
                transition={{ duration: .5 }}
              >
                <BsMoon className="text-2xl" />
              </motion.div>
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
            <ul className="flex justify-between items-center p-0 w-[100%]">
              <li tabIndex="0" className="mr-4 lg:mr-6">
                <Link to="/">Home</Link>
              </li>

              <NavBarLink
                toggleFn={toggleStandHidden}
                label="Standings"
                animate={standHidden}
              />
              <NavBarLink
                toggleFn={toggleDriverHidden}
                label="Drivers"
                animate={driverHidden}
              />
              <NavBarLink
                toggleFn={toggleTeamHidden}
                label="Teams"
                animate={teamHidden}
              />
            </ul>
          )}
        </div>
      </div>
      {navBarWidth < 700 ? null : <StandingsMenuDropDown />}
      {navBarWidth < 700 ? null : <DriverMenuDropDwn />}
      {navBarWidth < 700 ? null : <TeamsMenu />}
      {navBarWidth < 700 ? <SideBar /> : null}
    </>
  );
};

export default NavBar;
