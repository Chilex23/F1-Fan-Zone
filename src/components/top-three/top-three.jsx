import React from "react";
import findDriver from "../../utils/find-driver";

const TopThree = ({ driver, order }) => {
    const { position, 
        Driver: { familyName, givenName },
    } = driver; 
    return (
        <div className={`h-fit w-[25%] order-${order} rounded-lg relative top-[-2rem] bg-stone-800`}>
            <div className="bg-white rounded-t-lg relative">
                <p className="text-red-600 font-extrabold text-7xl absolute left-5">{position}</p>
                <img src={findDriver(givenName).pic} alt="driver" />
            </div>
            <div className="px-2 py-4">
                <p className="flex gap-2">{givenName} 
                    <img src={findDriver(givenName).country} className="w-7 rounded-sm" alt="country flag" />
                </p>
                <p className="uppercase font-bold text-2xl">{familyName}</p> 
            </div>
                
        </div>
    );
};

export default TopThree;