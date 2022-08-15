import React from "react";
import ScheduleItem from "../schedule-item/schedule-item.component";
import SCHEDULE from "../../data/schedule";

const ScheduleWrapper = () => (
    <div className="relative top-12 homePhone:top-28 tablet:top-12">
        <h1 className="text-5xl uppercase font-extrabold text-center">Race Schedule</h1>
        <div className="rounded-t-lg flex mt-16 relative overflow-x-scroll overscroll-x-contain snap-x bg-stone-900 py-6 mx-4 sm2:mx-1">
            {
                SCHEDULE.map((elem, i) => <ScheduleItem key={i + 1} details={elem} />)
            }
        </div>
    </div>
);

export default ScheduleWrapper;