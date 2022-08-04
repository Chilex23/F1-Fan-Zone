import React, { useEffect, useState } from "react";
import fetchDriversStand from "../../utils/fetchDriversStandings";
import TopThree from "../top-three/top-three";
import StandingsItem from "../standings-item/standings-item";
import { Link } from 'react-router-dom';

const StandingsWrapper = () => {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState(null);
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchDriversStand();
                setResults(data);
                setLoading(false);
                // console.log(data)
              
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }
            
        };
        fetchData();
    }, []);

    // console.log(results);
    // console.log(loading)

    if (loading) {
       return <div className='top-20 relative'>Loading</div>;
    } else if (error) {
        return <div className='top-20 relative'>Something went wrong</div>;
    } else if (results.length > 0) {
        return (
        <div className="sm2:mx-1 mx-4 bg-gray-200 pb-20 rounded-b-lg mb-[-2rem]">
            <div className="bg-stone-900 h-56 flex justify-center items-center mb-6">
                <h1 className="text-3xl font-extrabold text-white text-center">2022 Driver Standings</h1>
            </div>

            <div className="hidden h-48 tablet:flex gap-x-4 mb-6 myXl:mb-20 2xl:mb-32 justify-center relative top-[-4rem] pb-4 text-white">
                <TopThree driver={results[1]} order={1}/>
                <TopThree driver={results[0]} order={2}/>
                <TopThree driver={results[2]} order={3} />
            </div>
            <div className="mb-8">
                {
                    results.slice(0, 10).map((elem, i) => <StandingsItem key={i + 1} driver={elem} />)
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