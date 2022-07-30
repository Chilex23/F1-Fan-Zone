import React from "react";
import findDriver from "../../utils/find-driver";

const StandingsItem = ({ driver }) => {
    const { POS, Name, Car, PTS } = driver;
    return (
        <div className="w-[80%] mt-1 mx-auto bg-white px-4 py-3 hover:bg-gray-800 hover:text-white rounded-lg flex justify-between relative top-20">
            <div className="flex gap-3 items-center">
                <span className="font-extrabold">{POS}</span>
                <span className="text-lg">{Name} <span className="text-xl font-bold uppercase">{findDriver(Name).familyName || "ME"}</span></span>
                <span className="text-gray-500 text-md">{Car}</span>
            </div>

            <div>
                <span className="bg-gray-300 py-1 px-3 rounded-xl">{PTS} PTS</span>
            </div>
        </div>
    );
};

export default StandingsItem;