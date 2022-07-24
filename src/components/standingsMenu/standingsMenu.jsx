import React from 'react';

const StandingsMenuDropDown = () => (
    <div className="w-screen h-24 bg-stone-800 fixed pt-4 border-b-2 border-red-600 top-16">
        <div className="flex text-white w-5/6 mx-auto justify-between p-3 rounded-br-2xl border-b-2 border-r-2 border-gray-400">
            <div className="border-b-2 hover:border-red-600 border-transparent">
                <p className="font-semibold text-xl">2022 Season <span className="text-red-600">&times;</span></p>
            </div>
            <div className="border-b-2 hover:border-red-600 border-transparent">
                <p className="font-semibold text-xl">Drivers Standing <span className="text-red-600">&times;</span></p>
            </div>
            <div className="border-b-2 hover:border-red-600 border-transparent">
                <p className="font-semibold text-xl">Constructors Standing <span className="text-red-600">&times;</span></p>
            </div>
            <div className="border-b-2 hover:border-red-600 border-transparent">
                <p className="font-semibold text-xl">Archives <span className="text-red-600">&times;</span></p>
            </div>
        </div>
    </div>
);

export default StandingsMenuDropDown;