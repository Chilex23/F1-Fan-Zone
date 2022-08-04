import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ScheduleItem = ({ details }) => {
    const { country, day, month, name, imgUrl, circuitId } = details;
    const [animate, setAnimate] = useState(false);
    const toggleAnimate = () => setAnimate(!animate);

    const yTransition = {
        y: animate ? -50 : 0
    }

    const timeTaken = {
        duration: 0.7
    }

    return (
        <>
            <motion.article className="cursor-pointer snap-center basis-[7.5rem] shrink-0 w-3/4 bg-stone-900 text-white border-b-2 border-r-2 border-stone-500 rounded-br-2xl py-20 h-[25rem] tablet:h-[30rem]" style={{flexBasis: animate ? "60vw" : "7.5rem"}} onClick={toggleAnimate}>
                <div>
                    <motion.img className="mx-auto rounded-lg w-12" animate={yTransition} transition={timeTaken} src={imgUrl} alt={`${country} flag`} />
                </div>

                <motion.p className="text-lg uppercase text-gray-400 text-center hover:text-white" animate={yTransition} transition={timeTaken}>{country}</motion.p>

                <motion.h1 className="text-lg md:text-2xl font-extrabold text-center uppercase px-2" initial={{display: "none"}} animate={{display: animate ? "block" : "none", opacity: animate ? 1 : 0}} transition={timeTaken}>{name}</motion.h1>

                <motion.div className="bg-green-500 h-28 w-full" initial={{display: "none"}}>
                    Time
                </motion.div>

                <motion.div animate={{display: animate ? "block" : "none", opacity: animate ? 1 : 0}} transition={timeTaken} className="text-center mt-8">
                    <Link to={`/race_results/${circuitId}`} className="bg-red-600 reltive top-20 py-2 px-4 rounded-md">
                        View Race Results
                    </Link>
                </motion.div>

                <motion.div>
                    <motion.p animate={{y: animate ? 100 : 0, opacity: animate ? 0 : 1 }} transition={timeTaken} className="flex flex-col text-center"><span className="font-extrabold text-3xl md:text-4xl">{day}</span> <span className="text-lg">{month}</span></motion.p>
                </motion.div>

            </motion.article>
        </>
    );
}
export default ScheduleItem;