import React from "react";
import findDriver from "../../utils/find-driver";

const RaceResultsRowItem = ({ item }) => {
  const {
    position,
    Driver: { givenName, familyName },
    Constructor: { name },
    laps,
    points,
    status,
  } = item;
  return (
    <tr>
      <td>{position}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={findDriver(givenName).pic}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">
              {givenName} {familyName}
            </div>
            <div className="text-sm opacity-50">{name}</div>
          </div>
        </div>
      </td>

      <td>{laps}</td>

      <td>{points}</td>
      {/* <td>{grid}</td> */}
      <td>{status}</td>
    </tr>
  );
};

export default RaceResultsRowItem;
