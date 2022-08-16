import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NavBarContext } from "../../provider/navbar/navbar.provider";

const SideBar = () => {
  const { sideBarHidden, toggleSideBarHidden } = useContext(NavBarContext);
  return (
    <motion.div
      animate={{ x: sideBarHidden ? -2000 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed z-30 top-12 w-full"
      initial={{ x: -2000 }}
    >
      <div className="bg-stone-900 text-white h-screen py-10 flex flex-col items-center uppercase font-bold text-xl">
        <div className="mb-7">
          <Link to="/" className="myLink" onClick={toggleSideBarHidden}>
            Home
          </Link>
        </div>
        <div className="mb-7">
          <Link
            to="/driver_standings"
            className="myLink"
            onClick={toggleSideBarHidden}
          >
            Drivers Standings
          </Link>
        </div>
        <div className="mb-7">
          <Link
            to="/constructor_standings"
            className="myLink"
            onClick={toggleSideBarHidden}
          >
            Constructors Standings
          </Link>
        </div>
        <div className="mb-7">
          <Link
            to="/drivers_list"
            className="myLink"
            onClick={toggleSideBarHidden}
          >
            Drivers List
          </Link>
        </div>
        <div>
          <Link
            to="/constructors_list"
            className="myLink"
            onClick={toggleSideBarHidden}
          >
            Constructors List
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
export default SideBar;
