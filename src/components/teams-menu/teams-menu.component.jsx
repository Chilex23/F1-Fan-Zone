import React, { useContext } from "react";
import TeamLink from "../team-link/team-link.component";
import { NavBarContext } from "../../provider/navbar/navbar.provider";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TeamsMenu = () => {
  const { TEAMS, toggleTeamHidden, teamHidden } = useContext(NavBarContext);
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{ y: teamHidden ? -1500 : 0, opacity: 1 }}
      transition={{ease: "easeOut", duration: 0.4 }}
      className="w-screen h-screen overflow-y-scroll bg-stone-800 fixed py-10 border-b-2 border-red-600 top-7 z-[18]"
    >
      <div className="flex text-white w-5/6 mx-auto justify-start gap-12 p-3 rounded-br-2xl border-b-2 border-r-2 border-gray-400">
        <div className="border-b-2 hover:border-red-600 border-transparent">
          <Link
            to="/constructors"
            className="font-semibold text-xl"
            onClick={toggleTeamHidden}
          >
            All Teams{" "}
            <i className="before:content-['>'] mr-4 text-2xl text-red-500"></i>
          </Link>
        </div>
      </div>

      <div className="w-5/6 mx-auto grid tablet:grid-cols-3 grid-rows-4 mt-7 gap-7">
        {TEAMS.map((elem, i) => (
          <TeamLink key={i + 1} team={elem} toggle={toggleTeamHidden} />
        ))}
      </div>
    </motion.div>
  );
};

export default TeamsMenu;
