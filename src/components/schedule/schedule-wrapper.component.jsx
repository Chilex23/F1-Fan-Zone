import React from "react";
import ScheduleItem from "../schedule-item/schedule-item.component";
import SCHEDULE from "../../data/schedule";
import { lastRaceResults } from "../../utils/getClosestDate";

const ScheduleWrapper = () => {
  return (
    <div className="relative top-12 homePhone:top-28 tablet:top-12">
      <h1 className="text-4xl homePhone:text-5xl uppercase font-extrabold text-center dark:text-gray-300">
        Race Schedule
      </h1>
      <div className="rounded-t-lg flex mt-16 relative overflow-x-scroll overscroll-x-contain overflow-y-hidden snap-x bg-stone-900 py-6 mx-4 sm2:mx-1">
        {SCHEDULE.map((elem, i) => (
          <ScheduleItem
            key={i + 1}
            details={elem}
            isOpen={elem.circuitId === lastRaceResults.circuitId ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default ScheduleWrapper;
