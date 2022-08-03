import React from "react";
import findDriver from "../../utils/find-driver";

const RaceResultsRowItem = ({ item }) => {
    const { position, 
            Driver: { givenName, familyName }, 
            Constructor: { name }, 
            laps,
            points, 
            grid, 
            status } = item;
    return (
        <tr>
            <td>{ position }</td>
            <td>
            <div class="flex items-center space-x-3">
                <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                        <img src={findDriver(givenName).pic} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div class="font-bold">{givenName} {familyName}</div>
                    <div class="text-sm opacity-50">{name}</div>
                </div>
            </div>
            </td>

            <td>
                {laps}
            </td>

            <td>{points}</td>
            <td>{grid}</td>
            <td>{status}</td>
        </tr>
    )
}

export default RaceResultsRowItem;