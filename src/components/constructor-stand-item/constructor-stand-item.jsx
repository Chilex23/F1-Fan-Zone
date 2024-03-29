import React from "react";
import { Link } from "react-router-dom";

const ConstructorStandItem = ({ constructor }) => {
  const {
    position,
    Constructor: { name, constructorId },
    points,
  } = constructor;
  return (
    <Link
      to={`/constructors/${constructorId}`}
      className="group sm2:w-[97%] w-[80%] relative tablet:top-[-5rem] mt-2 mx-auto bg-white px-4 py-3 hover:bg-gray-800 hover:dark:text-white hover:text-white rounded-lg flex justify-between cursor-pointer text-black"
    >
      <div className="flex gap-2 sm:gap-3 items-center dark:text-black group-hover:text-white">
        <span className="font-extrabold">{position}</span>
        <span className="sm2:text-xs text-lg">{name}</span>
      </div>

      <div>
        <span className="bg-gray-300 py-1 px-2 rounded-xl group-hover:text-black box-decoration-clone dark:text-black text-xs sm:text-base mx-auto">
          {points} PTS
        </span>
      </div>
    </Link>
  );
};

export default ConstructorStandItem;
