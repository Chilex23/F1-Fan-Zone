import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/f1_logo.svg";

const Footer = () => (
    <div className="bg-stone-900 h-fit text-white py-12 px-4 mt-8 relative bottom-0">
        <div className="flex">
            <div className="w-fit mx-auto">
                <h3 className="font-bold text-lg uppercase">Standings</h3>
                <ul className="sm2:text-sm">
                    <Link to="/driver_standings"><li>Driver Standings</li></Link>
                    <Link to="/constructor_standings"><li>Constructor Standings</li></Link>
                </ul>
            </div>
            <div className="w-fit mx-auto">
                <h3 className="font-bold text-lg uppercase">Lists</h3>
                <ul className="sm2:text-sm">
                    <Link to="/drivers_list"><li>Drivers List</li></Link>
                    <Link to="/constructors_list"><li>Constructors Lists</li></Link>
                </ul>
            </div>
        </div>

         <div className="flex items-center justify-between mt-12 border-stone-500 border-t-2 pt-10">
            <Logo className="w-[15%] sm2:w-[20%]" />
            <p className="sm2:text-sm">Developed By Chima</p>
         </div>
    </div>
);


export default Footer;
