import React from "react";
import findDriver from "../../utils/find-driver";

const TopThree = ({ driver, order }) => {
    const { Name, POS } = driver;
    return (
        <div className={`h-fit w-[25%] order-${order} rounded-lg relative top-[-2rem] bg-stone-800`}>
            <div className="bg-white rounded-t-lg relative">
                <p className="text-red-600 font-extrabold text-7xl absolute left-5">{POS}</p>
                <img src={findDriver(Name).pic} alt="driver" />
            </div>
            <div className="px-2 py-4">
                <p className="flex gap-2">{findDriver(Name).givenName} 
                    <img src={findDriver(Name).country} className="w-7 rounded-sm" alt="country flag" />
                </p>
                <p className="uppercase font-bold text-2xl">{findDriver(Name).familyName}</p> 
            </div>
                
        </div>
    );
};

export default TopThree;