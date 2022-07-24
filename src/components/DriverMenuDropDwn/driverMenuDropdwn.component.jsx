import React from "react";
import DriverLink from "../driverLink/driverLink.component";

const DriverMenuDropDwn = () => {
    return (
        <div className="w-screen h-fit bg-stone-800 fixed py-10 border-b-2 border-red-600 top-16">
            <div className="flex text-white w-5/6 mx-auto justify-start gap-12 p-3 rounded-br-2xl border-b-2 border-r-2 border-gray-400">
                <div className="border-b-2 hover:border-red-600 border-transparent">
                    <p className="font-semibold text-xl">All drivers <span className="text-red-600">&times;</span></p>
                </div>
                <div className="border-b-2 hover:border-red-600 border-transparent">
                    <p className="font-semibold text-xl">Hall of Fame <span className="text-red-600">&times;</span></p>
                </div>
            </div>

            <div className="w-5/6 mx-auto grid grid-cols-4 grid-rows-5 mt-7 gap-7">
                {
                    new Array(20).fill(1).map((elem, i) => <DriverLink key={i + 1} />)
                }
            </div>
        </div>
    )
};


export default DriverMenuDropDwn;