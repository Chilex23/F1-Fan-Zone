import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SideBar = ({ hidden }) => (
    <motion.div animate={{x: hidden ? -2000 : 0}} transition={{duration: 0.5}} style={{display: hidden ? "none" : "block"}}>
        <div className="bg-stone-900 text-white h-screen fixed w-full top-12 z-30 py-10 flex flex-col items-center uppercase font-bold text-xl gap-y-7">
            <div>
                <Link to="/" className="myLink">
                    Home
                </Link>
            </div>
            <div>
                <Link to="/driver_standings" className="myLink">
                    Drivers Standings
                </Link>
            </div>
            <div>
                <Link to="/constructor_standings" className="myLink">
                    Constructors Standings
                </Link>
            </div>
            <div>
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