import React from "react";
import fetchDriversStand from "../../utils/fetchDriversStandings";
import TopThree from "../top-three/top-three";
import StandingsItem from "../standings-item/standings-item";
import useFetch from "../../hooks/useFetch";
import { Link } from 'react-router-dom';
import { TailSpin } from "react-loader-spinner";

const StandingsWrapper = () => {
    const [loading, data, error] = useFetch(fetchDriversStand);

    if (loading) {
       return <div className='top-36 h-56 relative flex justify-center mb-16'>
            <TailSpin color="#b90202" height={80} width={80}/>
       </div>;
    } else if (error) {
        return <div className='top-36 h-56 relative flex justify-center mb-16'>Something went wrong</div>;
    } else if (data.length > 0) {
        return (
        <div className="sm2:mx-1 mx-4 bg-gray-200 pb-20 mb-[-2rem] rounded-t-lg">
            <div className="bg-stone-900 h-56 flex justify-center items-center mb-6 rounded-t-lg">
                <h1 className="text-3xl font-extrabold text-white text-center">2022 Driver Standings</h1>
            </div>

            <div className="hidden h-48 tablet:flex gap-x-4 justify-center relative top-[-4rem] pb-4 text-white">
                <TopThree driver={data[1]} order={1}/>
                <TopThree driver={data[0]} order={2}/>
                <TopThree driver={data[2]} order={3} />
            </div>
            <div className="mb-8 sm:mb-24 lg:mb-[11rem]">
                {
                    data.slice(0, 10).map((elem, i) => <StandingsItem key={i + 1} driver={elem} />)
                }
            </div>
                
            <div className="text-center">
                <Link to="/driver_standings" className="mt-10 bg-red-600 py-3 px-2 rounded-lg text-white">
                    View Full Standings
                </Link>
            </div>
        </div>
        )
    }
};

export default StandingsWrapper;