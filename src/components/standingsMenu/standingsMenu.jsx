import React from 'react';
import { Link } from 'react-router-dom';

const StandingsMenuDropDown = () => (
    <div className="w-screen h-24 bg-stone-800 fixed pt-4 border-b-2 border-red-600 top-16 z-20">
        <div className="flex text-white w-5/6 mx-auto justify-between p-3 rounded-br-2xl border-b-2 border-r-2 border-gray-400">
            <div className="border-b-2 hover:border-red-600 border-transparent">
                <p className="font-semibold text-xl">2022 Season <i className="before:content-['>'] mr-4 text-2xl text-red-500"></i></p>
            </div>
            <div className="border-b-2 hover:border-red-600 border-transparent">
                <Link to="/driver_standings" className="font-semibold text-xl">Drivers Standing <i className="before:content-['>'] mr-4 text-2xl text-red-500"></i></Link>
            </div>
            <div className="border-b-2 hover:border-red-600 border-transparent">
                <Link to="/constructor_standings" className="font-semibold text-xl">Constructors Standing <i className="before:content-['>'] mr-4 text-2xl text-red-500"></i></Link>
            </div>
        </div>
    </div>
);

export default StandingsMenuDropDown;