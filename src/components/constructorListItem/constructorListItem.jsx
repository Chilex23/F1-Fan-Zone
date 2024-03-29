import React from "react";
import FindTeamDrivers from "../../utils/findTeamDrivers";
import FindTeam from "../../utils/findTeam";
import { Link } from "react-router-dom";

const ConstructorListItem = ({ constructor }) => {
  const {
    position,
    points,
    Constructor: { name, constructorId },
  } = constructor;
  return (
    <Link
      to={`/constructors/${constructorId} `}
      className={
        "cursor-pointer border-t-2 border-r-2 border-stone-900 dark:border-gray-400 rounded-tr-xl dark:text-gray-300 pr-1 homePhone:pr-3 hover:border-red-600"
      }
    >
      <div className="flex justify-between items-center border-gray-400 py-2">
        <p className="font-black sm2:text-xl text-3xl">{position}</p>
        <div className="flex flex-col items-center leading-3">
          <p className="sm2:text-lg text-xl font-extrabold">{points}</p>
          <span className="bg-stone-900 sm2:text-sm text-white px-2 py-1 rounded-md">
            PTS
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center border-b border-t border-gray-400 mb-2 py-2">
        <span className="sm2:text-lg text-xl font-extrabold">
          <span className={`w-4 h-full ${FindTeam(name).color} mr-4`}>
            &nbsp;
          </span>
          {name}
        </span>
        <img src={FindTeam(name).logo2} alt="logo" className="w-12" />
      </div>

      <div className="flex justify-between border-b border-r rounded-br-xl border-gray-400 mb-4 pb-1">
        {FindTeamDrivers(name)
          .slice(0, 2)
          .map((driver) => (
            <div
              className="flex items-center justify-between sm2:text-sm text-base font-extrabold"
              key={driver.givenName}
            >
              <span className="mr-2">{driver.givenName}</span>
              <span>{driver.familyName}</span>
              <picture className="">
                <img
                  src={driver.pic}
                  className="h-auto w-full lg:w-16 lg:h-16 hidden md:block"
                  alt="driver"
                />
              </picture>
            </div>
          ))}
      </div>
      <div className="w-[75%]">
        <img
          src={FindTeam(name).carImg}
          alt="Team's Car"
          className="w-fit h-auto mx-auto"
        />
      </div>
    </Link>
  );
};

export default ConstructorListItem;
