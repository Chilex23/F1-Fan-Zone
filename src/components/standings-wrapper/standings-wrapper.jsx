import React, { useState } from "react";
import fetchDriversStand from "../../utils/fetchDriversStandings";
import fetchConstructorStand from "../../utils/fetchConstructorStandings";
import StandingsTab from "../standings-tab/standings-tab";
import DriverStandOverview from "../driver-stand-overview/driver-stand-overview";
import TeamStandOverview from "../team-stand-overview/team-stand-overview";
import useFetch from "../../hooks/useFetch";
import { TailSpin } from "react-loader-spinner";

const StandingsWrapper = () => {
  const [loading, data, error] = useFetch(fetchDriversStand);
  const [loading2, data2, error2] = useFetch(fetchConstructorStand);
  const [driverStand, setDriverStand] = useState(true);
  const [teamStand, setTeamStand] = useState(false);

  const toggleDriverStand = () => {
    setDriverStand(!driverStand);
    setTeamStand(false);
  };

  const toggleTeamStand = () => {
    setTeamStand(!teamStand);
    setDriverStand(false);
  };

  if (loading || loading2) {
    return (
      <div className="top-36 h-56 relative flex justify-center mb-16">
        <TailSpin color="#b90202" height={80} width={80} />
      </div>
    );
  } else if (error || error2) {
    return (
      <div className="top-36 h-56 dark:text-gray-300 relative flex justify-center mb-16">
        😔 Snap! An error occured
      </div>
    );
  } else if (data.length > 0) {
    return (
      <div className="sm2:mx-1 mx-4 bg-gray-200 pb-48 mb-[-2rem] relative top-36 rounded-t-lg">
        <div className="bg-gray-200 pt-4 flex justify-center gap-2 uppercase text-black">
          <StandingsTab stand={driverStand} toggleFn={toggleDriverStand}>
            Drivers' Standings
          </StandingsTab>
          <StandingsTab stand={teamStand} toggleFn={toggleTeamStand}>
            Constructors' Standings
          </StandingsTab>
        </div>

        <div className="bg-stone-900 h-56 flex justify-center items-center mb-6">
          <h1 className="sm2:text-xl text-3xl font-extrabold text-white text-center uppercase">
            {driverStand
              ? "2022 Drivers' Standings"
              : "2022 Constructors' Standings"}
          </h1>
        </div>

        {driverStand ? (
          <DriverStandOverview data={data} />
        ) : (
          <TeamStandOverview data={data2} />
        )}
      </div>
    );
  }
};

export default StandingsWrapper;
