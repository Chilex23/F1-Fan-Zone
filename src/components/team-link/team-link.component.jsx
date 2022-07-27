import React from "react";

const TeamLink = ({ team }) => (
    <div>
        <div className="rounded-br-2xl border-b-2 border-r-2 border-gray-400 hover:border-red-600 pb-3 relative cursor-pointer">
            <p className="text-white">{team.teamName}</p>
            <img src={team.carImg} alt={`${team.teamName}'s Car`} className="md:w-2/4" />
            <div className={`h-4 w-10 ${team.color} relative top-5`}>
                &nbsp;
            </div>
        </div>
    </div>
);

export default TeamLink;