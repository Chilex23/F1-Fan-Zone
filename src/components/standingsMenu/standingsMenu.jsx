import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavBarContext } from "../../provider/navbar/navbar.provider";
import { motion } from "framer-motion";

const StandingsMenuDropDown = () => {
  const { toggleStandHidden, standHidden } = useContext(NavBarContext);
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{ y: standHidden ? -1200 : 0, opacity: 1 }}
      transition={{ease: "easeOut", duration: 0.4 }}
      className="w-screen h-fit bg-stone-800 fixed py-4 border-b-2 border-red-600 top-14 z-20"
    >
      <div className="flex flex-col tablet:flex-row text-white w-[90%] md:w-5/6 mx-auto justify-between p-3 rounded-br-2xl border-b-2 border-r-2 border-gray-400">
        <div className="border-b-2 hover:border-red-600 border-transparent">
          <p className="font-semibold text-xl">
            2022 Season{" "}
            <i className="before:content-['>'] mr-4 text-2xl text-red-600"></i>
          </p>
        </div>
        <Link
          to="/driver_standings"
          className="group border-b-2 hover:border-red-600 border-transparent myLink"
          onClick={toggleStandHidden}
        >
          <div className="font-semibold sm2:text-lg text-xl">
            Drivers Standing{" "}
            <i className="before:content-['>'] mr-4 text-2xl text-red-600 group-hover:text-white"></i>
          </div>
        </Link>
        <Link
          to="/constructor_standings"
          className="group border-b-2 hover:border-red-600 border-transparent myLink"
          onClick={toggleStandHidden}
        >
          <div className="font-semibold sm2:text-lg text-xl">
            Constructors Standing{" "}
            <i className="before:content-['>'] mr-4 text-2xl text-red-600 group-hover:text-white"></i>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default StandingsMenuDropDown;
