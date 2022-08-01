import React from "react";
import { ReactComponent as Logo } from "../../assets/img/f1_logo.svg";

const Footer = () => (
    <div className="bg-stone-900 h-fit relative top-16 text-white my-4 p-6">
         <div className="w-fit mx-auto">
            <h3 className="font-bold text-lg">Standings</h3>
            <ul>
                <li>Driver Standings</li>
                <li>Constructor Standings</li>
            </ul>
         </div>

         <div className="flex justify-between mt-4 border-stone-500 border-t-2 pt-2">
            <Logo className="w-20" />
            <p>Developed By Chima Onumaegbu</p>
         </div>
    </div>
);


export default Footer;
