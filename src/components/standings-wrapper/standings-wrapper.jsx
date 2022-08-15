import React, { useState } from "react";
import fetchDriversStand from "../../utils/fetchDriversStandings";
import fetchConstructorStand from "../../utils/fetchConstructorStandings";
import TopThree from "../top-three/top-three";
import TopThreeConstructor from "../top-three-constructor/top-three-constructor";
import StandingsItem from "../standings-item/standings-item";
import ConstructorStandItem from "../constructor-stand-item/constructor-stand-item";
import useFetch from "../../hooks/useFetch";
import { Link } from 'react-router-dom';
import { TailSpin } from "react-loader-spinner";

const StandingsWrapper = () => {
    const [loading, data, error] = useFetch(fetchDriversStand);
    const [loading2, data2, error2] = useFetch(fetchConstructorStand);
    const [driverStand, setDriverStand] = useState(true);
    const [teamStand, setTeamStand] = useState(false);

    const toggleDriverStand = () => {
        setDriverStand(!driverStand);
        setTeamStand(false);
    }

    const toggleTeamStand = () => {
        setTeamStand(!teamStand);
        setDriverStand(false);
    }

    if (loading || loading2) {
       return <div className='top-36 h-56 relative flex justify-center mb-16'>
            <TailSpin color="#b90202" height={80} width={80}/>
       </div>;
    } else if (error || error2) {
        return <div className='top-36 h-56 relative flex justify-center mb-16'>Something went wrong</div>;
    } else if (data.length > 0) {
        return (
            <div className="sm2:mx-1 mx-4 bg-gray-200 pb-48 mb-[-2rem] relative top-36 rounded-t-lg">
                <div className="bg-white flex justify-center uppercase">
                    <div className={`${driverStand ? "border-red-600" : ""} border-t-4 border-r-4 rounded-tr-xl px-2 py-4 cursor-pointer lg:myLink lg:hover:text-white mr-6 sm2:text-xs font-bold`} onClick={toggleDriverStand}>
                        Drivers Standings
                    </div>
                    <div className={`${teamStand ? "border-red-600" : ""} border-t-4 border-r-4 rounded-tr-xl px-2 py-4 cursor-pointer lg:myLink lg:hover:text-white sm2:text-xs font-bold`} onClick={toggleTeamStand}>
                        Constructor Standings
                    </div>
                </div>

                <div className="bg-stone-900 h-56 flex justify-center items-center mb-6 rounded-t-lg">
                    <h1 className="sm2:text-xl text-3xl font-extrabold text-white text-center uppercase">
                        {driverStand ? "2022 Drivers' Standings" : "2022 Constructors' Standings"}
                    </h1>
                </div>

                { driverStand ?
                    <> 
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
                            <Link to="/driver_standings" className="sm2:text-sm mt-10 bg-red-600 py-3 px-2 rounded-lg text-white">
                                View Full Standings
                            </Link>
                        </div>
                    </>
                    : 
                    <>
                        <div className="hidden h-48 tablet:flex gap-x-4 justify-center relative top-[-4rem] text-white">
                            <TopThreeConstructor constructor={data2[1]} order={1}/>
                            <TopThreeConstructor constructor={data2[0]} order={2}/>
                            <TopThreeConstructor constructor={data2[2]} order={3} />
                        </div>
                        <div className="mb-1">
                            {
                                data2.slice(0, 10).map((elem, i) => <ConstructorStandItem key={i + 1} constructor={elem} />)
                            }
                        </div>
                    </>

                }

            </div>
        )
    }
};

export default StandingsWrapper;