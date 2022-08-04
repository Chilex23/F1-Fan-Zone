import React from "react";

const StandingsItem = ({ driver }) => {
    const { position, 
        points,
        Driver: { familyName, givenName },
        Constructors: { name }, 
    } = driver; 
    return (
        <div className="group sm2:w-[97%] w-[80%] mt-1 mx-auto bg-white px-4 py-3 hover:bg-gray-800 hover:text-white rounded-lg flex justify-between relative md:top-10 lg:top-32">
            <div className="flex gap-3 items-center">
                <span className="font-extrabold">{position}</span>
                <span className="sm2:text-md text-lg">{givenName} <span className="sm2:text-lg text-xl font-bold uppercase">{familyName }</span></span>
                <span className="text-gray-500 text-md">{name}</span>
            </div>

            <div>
                <span className="bg-gray-300 py-1 px-3 rounded-xl group-hover:text-black box-decoration-clone">{points} PTS</span>
            </div>
        </div>
    );
};

export default StandingsItem;