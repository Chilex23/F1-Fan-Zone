import React from "react";
import ScheduleItem from "../schedule-item/schedule-item.component";
import SCHEDULE from "../../data/schedule";

const ScheduleWrapper = () => (
    <>
        <h1 className="text-3xl homePhone:text-5xl uppercase font-extrabold text-center">Race Schedule</h1>
        <div className=" rounded-lg flex mt-5 md:mt-1 tablet:top-3 relative overflow-x-scroll overscroll-x-contain snap-x bg-stone-900 py-6 mx-4">
            {
                SCHEDULE.map((elem, i) => <ScheduleItem key={i + 1} details={elem} />)
            }
        </div>
    </>
);

export default ScheduleWrapper;