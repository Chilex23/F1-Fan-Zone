import React from "react";
import TeamLink from "../team-link/team-link.component";

const TeamsMenu = () => (
    <div className="w-screen h-fit bg-stone-800 fixed py-10 border-b-2 border-red-600 top-16 z-10">
        <div className="flex text-white w-5/6 mx-auto justify-start gap-12 p-3 rounded-br-2xl border-b-2 border-r-2 border-gray-400">
            <div className="border-b-2 hover:border-red-600 border-transparent">
                <p className="font-semibold text-xl">All Teams <i className="before:content-['>'] mr-4 text-2xl text-red-500"></i></p>
            </div>
        </div>

        <div className="w-5/6 mx-auto grid grid-cols-3 grid-rows-4 mt-7 gap-7">
            {
                new Array(10).fill(1).map((elem, i) => <TeamLink key={i + 1} />)
            }   
        </div>
    </div>
);

export default TeamsMenu;