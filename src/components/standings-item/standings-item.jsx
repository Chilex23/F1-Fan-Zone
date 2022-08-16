import React from "react";
import { Link } from "react-router-dom";

const StandingsItem = ({ driver }) => {
  const {
    position,
    points,
    Driver: { familyName, givenName, driverId },
    Constructors,
  } = driver;
  return (
    <Link
      to={`/drivers_list/${driverId}`}
      className="group sm2:w-[97%] w-[80%] mt-2 mx-auto bg-white px-4 py-3 hover:bg-gray-800 text-black hover:text-white rounded-lg flex justify-between relative md:top-10 lg:top-32 cursor-pointer"
    >
      <div className="flex gap-2 sm:gap-3 items-center group-hover:text-white">
        <span className="font-extrabold">{position}</span>
        <span className="sm2:text-xs text-lg">
          {givenName}{" "}
          <span className="sm2:text-sm text-xl font-bold uppercase">
            {familyName}
          </span>
        </span>
        <span className="text-gray-500 group-hover:text-gray-200 text-xs sm:text-base">
          {Constructors[0].name}
        </span>
      </div>

      <div>
        <span className="bg-gray-300 py-1 px-2 rounded-xl group-hover:text-black box-decoration-clone dark:text-black text-xs sm:text-base mx-auto">
          {points} PTS
        </span>
      </div>
    </Link>
  );
};

export default StandingsItem;
