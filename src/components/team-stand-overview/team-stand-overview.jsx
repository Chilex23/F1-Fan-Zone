import React from "react";
import ConstructorStandItem from "../constructor-stand-item/constructor-stand-item";
import TopThreeConstructor from "../top-three-constructor/top-three-constructor";

const TeamStandOverview = ({ data }) => (
  <>
    <div className="hidden h-48 tablet:flex gap-x-4 justify-center relative top-[-4rem] text-white">
      <TopThreeConstructor constructor={data[1]} order={1} />
      <TopThreeConstructor constructor={data[0]} order={2} />
      <TopThreeConstructor constructor={data[2]} order={3} />
    </div>
    <div className="mb-1">
      {data.slice(0, 10).map((elem, i) => (
        <ConstructorStandItem key={i + 1} constructor={elem} />
      ))}
    </div>
  </>
);

export default TeamStandOverview;
