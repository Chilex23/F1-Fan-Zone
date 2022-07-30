import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DriverLink from "../driverLink/driverLink.component";
import { NavBarContext } from "../../provider/navbar/navbar.provider";

const DriverMenuDropDwn = () => {
    const { toggleDriverHidden, Drivers } = useContext(NavBarContext);
    return (
        <div className="w-screen h-fit bg-stone-800 fixed py-10 border-b-2 border-red-600 top-16 z-10">
            <div className="flex text-white w-5/6 mx-auto justify-start gap-12 p-3 rounded-br-2xl border-b-2 border-r-2 border-gray-400">
                <div className="border-b-2 hover:border-red-600 border-transparent">
                    <Link to="/drivers_list" className="font-semibold text-xl">
                        All drivers <i className="before:content-['>'] mr-4 text-2xl text-red-500"></i>
                    </Link>
                </div>
                <div className="border-b-2 hover:border-red-600 border-transparent">
                    <p className="font-semibold text-xl">
                        Hall of Fame <i className="before:content-['>'] mr-4 text-2xl text-red-500"></i>
                    </p>
                </div>
            </div>

            <div className="w-5/6 mx-auto grid grid-cols-4 grid-rows-5 mt-7 gap-7">
                {
                   Drivers.map((elem, i) => <DriverLink key={i + 1} familyName={elem.familyName} givenName={elem.givenName} toggle={toggleDriverHidden}/>)
                }
            </div>
        </div>
    )
};


export default DriverMenuDropDwn;