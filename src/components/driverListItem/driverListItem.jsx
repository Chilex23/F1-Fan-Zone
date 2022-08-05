import React from "react";
import findDriver from "../../utils/find-driver";
import { Link } from "react-router-dom";

const DriverListItem = ({ driver }) => {
    const { position,
        points,
        Driver: { familyName, givenName, driverId },
        Constructors
    } = driver;
    return (
        <Link to={`/drivers_list/${driverId}`} className="cursor-pointer border-t-2 border-r-2 border-stone-900 rounded-tr-xl pr-3 hover:border-red-600">
            <div className="flex justify-between items-center border-b-[1px] border-gray-400 mb-2 py-2">
                <p className="font-black text-3xl">{position}</p>
                <div className="flex flex-col items-center leading-3">
                    <p className="text-xl font-extrabold">{points}</p>
                    <span className="bg-stone-900 text-white px-2 py-1 rounded-md">PTS</span>
                </div>  
            </div>

            <div className="flex justify-between items-center border-b-[1px] border-gray-400 mb-2 pb-2">
                <div className="flex flex-col items-left leading-3">
                    <span className="uppercase font-medium">{givenName}</span>
                    <span className="uppercase font-extrabold text-2xl">{familyName}</span>
                </div>
                <img className="w-10 rounded-md" src={findDriver(givenName).country} alt="country flag" />
            </div>

            <p>{Constructors[0].name}</p>
            <div className="h-fit relative flex">
                <img src={findDriver(givenName).pic} className="object-contain h-[12rem]" alt="driver" />
                <img className="h-10" src={findDriver(givenName).numberPic} alt="Number" />
            </div>
        </Link>
    );
}
export default DriverListItem;