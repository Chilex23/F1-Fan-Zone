import React, { useState, useEffect } from "react";
import NavBar from "../../components/Navbar/navbar.component";
import DriverListItem from "../../components/driverListItem/driverListItem";
import Footer from "../../components/footer/footer";
import NavProvider from "../../provider/navbar/navbar.provider";
import fetchDriversStand from "../../utils/fetchDriversStandings";

const DriversList = () => {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await fetchDriversStand();
                setResults(data);
                // console.log(data);
            } catch (error) {
                console.log(error);
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <>
            <NavProvider>
                <NavBar />
            </NavProvider>
            <div className="border-t-8 border-r-8 border-stone-900 rounded-tr-3xl pt-4 mt-24 mx-6">
                <h1 className="text-5xl uppercase font-extrabold mb-8 text-stone-900">
                    F1 Drivers 2022
                </h1>
                <p className="bg-gray-200 text-black px-2 py-4 rounded-l-md">Click on a driver's card to view the driver's details</p>
            </div>
            
            <div className="overflow-clip grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-6 mx-6 gap-x-4 gap-y-10 mt-4">
                {
                    loading ? <p>Loading...</p> :
                    error ? <p>Error...</p> :
                    results.map(driver => <DriverListItem key={driver.Driver.driverId} driver={driver} />)
                }
            </div>
            <Footer />
        </>
    );
}
export default DriversList;