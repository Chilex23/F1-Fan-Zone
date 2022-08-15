import React from "react";
import FindTeam from "../../utils/findTeam";

const TopThreeConstructor = ({ constructor, order }) => {
    const { position, Constructor: { name } } = constructor; 
    return (
        <div className={`h-fit w-[25%] order-${order} rounded-lg relative top-[-2rem] bg-stone-800`}>
            <div className="bg-white rounded-t-lg relative">
                <img src={FindTeam(name).carImg} alt="constructor" />
            </div>
            <div className="px-2 py-4 flex justify-between items-center">
                <p className="uppercase font-bold text-2xl">{name}</p>
                <p className="uppercase font-extrabold text-4xl text-red-600">{position}</p>  
            </div>
                
        </div>
    );
};

export default TopThreeConstructor;