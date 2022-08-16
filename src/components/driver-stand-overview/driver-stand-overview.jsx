import React from "react";
import TopThree from "../top-three/top-three";
import StandingsItem from "../standings-item/standings-item";
import { Link } from "react-router-dom";

const DriverStandOverview = ({ data }) => (
  <>
    <div className="hidden h-48 tablet:flex gap-x-4 justify-center relative top-[-4rem] pb-4 text-white">
      <TopThree driver={data[1]} order={1} />
      <TopThree driver={data[0]} order={2} />
      <TopThree driver={data[2]} order={3} />
    </div>
    <div className="mb-8 sm:mb-24 lg:mb-[11rem]">
      {data.slice(0, 10).map((elem, i) => (
        <StandingsItem key={i + 1} driver={elem} />
      ))}
    </div>

    <div className="text-center">
      <Link
        to="/driver_standings"
        className="sm2:text-sm mt-10 bg-red-600 py-3 px-2 rounded-lg text-white"
      >
        View Full Standings
      </Link>
    </div>
  </>
);

export default DriverStandOverview;
