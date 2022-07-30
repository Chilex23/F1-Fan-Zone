import React, { useEffect, useState } from "react";
import fetchDriversStand from "../../utils/fetchDriversStandings";
import TopThree from "../top-three/top-three";
import StandingsItem from "../standings-item/standings-item";
import { Link } from 'react-router-dom';

const StandingsWrapper = () => {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchDriversStand();
                setResults(data);
                setLoading(false);
                console.log(data)
              
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
        <div className="relative top-20 m-4 bg-gray-200 pb-40 rounded-t-lg">
            <div className="bg-stone-900 h-56 flex justify-center items-center rounded-t-lg">
                <h1 className="text-3xl font-extrabold text-white text-center">2022 Driver Standings</h1>
            </div>

            <div className="h-48 flex gap-x-4 justify-center relative top-[-1rem] pb-4 text-white">
                <TopThree driver={results[1]} order={1}/>
                <TopThree driver={results[0]} order={2}/>
                <TopThree driver={results[2]} order={3} />
            </div>

            {
                results.slice(0, 10).map((elem, i) => <StandingsItem key={i + 1} driver={elem} />)
            }
            <Link to="/driver-standings" className="relative top-36 left-[40%] mt-4 text-center bg-red-600 py-2 px-2 rounded-lg text-white">
                View Full Standings
            </Link>
        </div>
        )
    }
};

export default StandingsWrapper;