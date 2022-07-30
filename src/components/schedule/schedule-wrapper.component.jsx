import React from "react";
import ScheduleItem from "../schedule-item/schedule-item.component";
import SCHEDULE from "../../data/schedule";

const ScheduleWrapper = () => (
    <>
        <h1 className="text-5xl uppercase font-extrabold top-20 relative text-center mb-12 mt-12">Race Schedule</h1>
        <div className=" rounded-lg flex top-20 relative overflow-x-scroll overscroll-x-contain snap-x bg-stone-900 py-6 mx-4">
            {
                SCHEDULE.map((elem, i) => <ScheduleItem key={i + 1} details={elem} />)
            }
        </div>
    </>
);

export default ScheduleWrapper;