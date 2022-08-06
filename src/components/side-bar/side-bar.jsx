import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SideBar = ({ hidden }) => (
    <motion.div animate={{x: hidden ? -2000 : 0}} transition={{duration: 0.5}} className="fixed z-30 top-12 w-full" initial={{x: -2000}}>
        <div className="bg-stone-900 text-white h-screen py-10 flex flex-col items-center uppercase font-bold text-xl">
            <div className="mb-7">
                <Link to="/" className="myLink">
                    Home
                </Link>
            </div>
            <div className="mb-7">
                <Link to="/driver_standings" className="myLink">
                    Drivers Standings
                </Link>
            </div>
            <div className="mb-7">
                <Link to="/constructor_standings" className="myLink">
                    Constructors Standings
                </Link>
            </div>
            <div className="mb-7">
                <Link to="/drivers_list" className="myLink">
                    Drivers List
                </Link>
            </div>
            <div>
                <Link to="/constructors_list" className="myLink">
                    Constructors List
                </Link>
            </div>
        </div>
    </motion.div>
);

export default SideBar;