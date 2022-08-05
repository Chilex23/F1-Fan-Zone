import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/f1_logo.svg";

const Footer = () => (
    <div className="bg-stone-900 h-fit text-white py-12 px-4 mt-8">
        <div className="flex">
            <div className="w-fit mx-auto">
                <h3 className="font-bold text-lg">Standings</h3>
                <ul>
                    <Link to="/driver_standings"><li>Driver Standings</li></Link>
                    <Link to="/constructor_standings"><li>Constructor Standings</li></Link>
                </ul>
            </div>
            <div className="w-fit mx-auto">
                <h3 className="font-bold text-lg">Lists</h3>
                <ul>
                    <Link to="/drivers_list"><li>Drivers List</li></Link>
                    <Link to="/constructors_list"><li>Constructors Lists</li></Link>
                </ul>
            </div>
        </div>

         <div className="flex justify-between mt-12 border-stone-500 border-t-2 pt-2">
            <Logo className="w-20" />
            <p>Developed By Chima Onumaegbu</p>
         </div>
    </div>
);


export default Footer;
