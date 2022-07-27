import React, { useState } from "react";
import { motion } from "framer-motion";

const ScheduleItem = ({ details }) => {
    const { country, day, month, name, imgUrl } = details;
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
            <motion.article className="cursor-pointer snap-center basis-[8rem] shrink-0 w-3/4 bg-stone-900 text-white border-b-2 border-r-2 border-stone-500 rounded-br-2xl py-20 h-[30rem]" style={{flexBasis: animate ? 500 : "8rem"}} onClick={toggleAnimate}>
                <div>
                    <motion.img className="mx-auto rounded-lg w-12" animate={yTransition} transition={timeTaken} src={imgUrl} alt={`${country} flag`} />
                </div>

                <motion.p className="text-lg uppercase text-gray-400 text-center hover:text-white" animate={yTransition} transition={timeTaken}>{country}</motion.p>

                <motion.h1 className="text-2xl font-extrabold text-center uppercase px-2" initial={{display: "none"}} animate={{display: animate ? "block" : "none", opacity: animate ? 1 : 0}} transition={timeTaken}>{name}</motion.h1>

                <motion.div className="bg-green-500 h-28 w-full" initial={{display: "none"}}>
                    Time
                </motion.div>

                <motion.div animate={{display: animate ? "block" : "none", opacity: animate ? 1 : 0}} transition={timeTaken} className="text-center mt-8">
                    <p>Practice 1: 14:00</p>
                    <p>Practice 2: 10:00</p>
                    <p>Race Time: 16: 00</p>

                    <button className="bg-red-600 mt-4 py-2 px-4 rounded-md">
                        Race Results
                    </button>
                </motion.div>

                <motion.div>
                    <motion.p animate={{y: animate ? 100 : 0, opacity: animate ? 0 : 1 }} transition={timeTaken} className="flex flex-col text-center"><span className="font-extrabold text-4xl">{day}</span> <span className="text-lg">{month}</span></motion.p>
                </motion.div>

            </motion.article>
        </>
    );
}
export default ScheduleItem;