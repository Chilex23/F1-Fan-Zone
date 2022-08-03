import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchDriverInfo from "../../utils/fetchDriverInfo";
import findDriver from "../../utils/find-driver";
import NavBar from "../../components/Navbar/navbar.component";
import Footer from "../../components/footer/footer";
import NavProvider from "../../provider/navbar/navbar.provider";

const DriverCard = () => {
    const { driverId } = useParams();
    const [loading, setLoading] = useState(false);
    const [driver, setDriver] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await fetchDriverInfo(driverId);
                setDriver(data);
                // console.log(data);
            } catch (error) {
                console.log(error);
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, [driverId]);
    // console.log(driver);
    return (
        <>
            <NavProvider>
                <NavBar />
            </NavProvider>
            {
                loading ? "Loading..." :
                error ? "Error..." : 
                driver.length === 0 ? "No results..." : <div className="w-[90%] mx-auto mt-[6rem]">
                    <div className="flex gap-x-10 flex-col md:flex-row">
                        <img src={findDriver(driver.givenName).fullPic} alt="driver" className="object-fill h-[30rem] basis-[40%] rounded-lg" />

                        <div className="flex flex-col grow">
                            <img src={findDriver(driver.givenName).helmetPic} alt="Helmet"className="h-[10rem] w-[10rem] object-contain" />
                            <div className="text-left grid grid-cols-1/2">
                                <span className="font-black text-2xl">
                                    Team
                                </span> 
                                <span className="text-lg">
                                    {findDriver(driver.givenName).team}
                                </span>
                                <span className="font-black text-2xl">
                                    Nationality
                                </span> 
                                <span className="text-lg">
                                    {driver.nationality}
                                </span>
                                <span className="font-black text-2xl">
                                    Date of Birth
                                </span> 
                                <span className="text-lg">
                                    {driver.dateOfBirth}
                                </span>
                                <span className="font-black text-2xl">
                                    Permanent Number
                                </span> 
                                <span className="text-lg text-red-600">
                                    {driver.permanentNumber}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="flex items-center gap-x-4">
                            <span className="font-bold text-3xl text-gray-500">
                                {driver.permanentNumber}
                            </span>
                            <img src={findDriver(driver.givenName).country} alt="country" className="rounded-md w-16" />
                        </div>
                        <h1 className="mt-2 py-4 font-black text-5xl">{driver.givenName} {driver.familyName}</h1>

                        <h3 className="py-4 font-bold text-3xl">Biography</h3>
                        <p className="leading-7 max-w-3xl">
                            { findDriver(driver.givenName).biography }
                        </p>
                    </div>
                </div>
            }
            <Footer />
        </>
    );
}

export default DriverCard;

