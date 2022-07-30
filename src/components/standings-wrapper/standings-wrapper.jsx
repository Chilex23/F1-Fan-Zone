import React, { useEffect, useState } from "react";
import fetchDriversStand from "../../utils/fetchDriversStandings";
import Drivers from "../../data/drivers";

const StandingsWrapper = () => {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchDriversStand();
                if (data.name === "AxiosError") {
                    setLoading(false);
                    setError(true);
                } else {
                    setResults(data);
                    setLoading(false);
                    // console.log(data)
                }
            } catch (error) {
                // console.log(error);
                setError(true);
            }
            
        };
        fetchData();
    }, []);

    // console.log(results);

    const findDriver = (name) => {
        return Drivers.find((elem) => elem.givenName.toLowerCase() === name.toLowerCase());
    }

    if (loading) {
       return <div className='top-20 relative'>Loading</div>;
    } else if (error) {
        return <div className='top-20 relative'>Something went wrong</div>;
    } else {
        return (
        <div className="relative top-20 m-4">
            <div className="bg-stone-900 h-56 flex justify-center items-center">
                <h1 className="text-3xl font-extrabold text-white text-center">2022 Driver Standings</h1>
            </div>

            <div className="h-48 flex gap-x-4 justify-center relative top-[-1rem] pb-4 text-white">

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
        </div>
        )
    }
};

export default StandingsWrapper;