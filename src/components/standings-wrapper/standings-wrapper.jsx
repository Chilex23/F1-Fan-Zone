import React, { useEffect, useState } from "react";
import fetchDriversStand from "../../utils/fetchDriversStandings";
import findDriver from "../../utils/find-driver";
import StandingsItem from "../standings-item/standings-item";

const StandingsWrapper = () => {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchDriversStand();
                setLoading(false);
                if (data.name === "AxiosError") {
                    setError(true);
                } else {
                    setResults(data);
                    // console.log(data)
                }
            } catch (error) {
                console.log(error);
                setLoading(true);
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
    } else {
        return (
        <div className="relative top-20 m-4 bg-gray-200 pb-28">
            <div className="bg-stone-900 h-56 flex justify-center items-center">
                <h1 className="text-3xl font-extrabold text-white text-center">2022 Driver Standings</h1>
            </div>

            <div className="mb-3 h-48 flex gap-x-4 justify-center relative top-[-1rem] pb-4 text-white">

                <div className="h-fit w-[18rem] order-2 rounded-lg relative top-[-2rem] bg-stone-800">
                    <div className="bg-white rounded-t-lg">
                        <img src={findDriver(results[0].Name).pic} alt="driver" />
                    </div>
                    <div className="px-2 py-4">
                        <p className="flex gap-2">{findDriver(results[0].Name).givenName} 
                            <img src={findDriver(results[0].Name).country} className="w-7 rounded-sm" alt="country flag" />
                        </p>
                        <p className="uppercase font-bold text-2xl">{findDriver(results[0].Name).familyName}</p> 
                    </div>
            
                </div>

                <div className="h-fit w-[18rem] order-1 rounded-lg bg-stone-800 relative top-[-2rem]">
                    <div className="bg-white rounded-t-lg">
                        <img src={findDriver(results[1].Name).pic} alt="driver" />
                    </div>
                    <div className="px-2 py-4">
                        <p className="flex gap-2">{findDriver(results[1].Name).givenName}
                            <img src={findDriver(results[1].Name).country} className="w-7 rounded-sm" alt="country flag" />
                        </p>
                        <p className="uppercase font-bold text-2xl">{findDriver(results[1].Name).familyName}</p>
                    </div>
                </div>

                <div className="h-fit w-[18rem] order-3 rounded-lg bg-stone-800 relative top-[-2rem]">
                    <div className="bg-white rounded-t-lg">
                        <img src={findDriver(results[2].Name).pic} alt="driver" />
                    </div>
                    <div className="px-2 py-4">
                        <p className="flex gap-2">{findDriver(results[2].Name).givenName}
                            <img src={findDriver(results[2].Name).country} className="w-7 rounded-sm" alt="country flag" />
                        </p>
                        <p className="uppercase font-bold text-2xl">{findDriver(results[2].Name).familyName}</p>
                    </div>
                </div>

            </div>

            {
                results.slice(0, 10).map((elem, i) => <StandingsItem key={i + 1} driver={elem} />)
            }
            {/* <StandingsItem driver={results[0]} /> */}
        </div>
        )
    }
};

export default StandingsWrapper;