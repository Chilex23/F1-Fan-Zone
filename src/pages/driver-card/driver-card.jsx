import React from "react";
import { useParams } from "react-router-dom";
import fetchDriverInfo from "../../utils/fetchDriverInfo";
import findDriver from "../../utils/find-driver";
import NavBar from "../../components/Navbar/navbar.component";
import Footer from "../../components/footer/footer";
import useFetch from "../../hooks/useFetch";
import NavProvider from "../../provider/navbar/navbar.provider";
import { TailSpin } from "react-loader-spinner";

const DriverCard = () => {
    const { driverId } = useParams();
    const [loading, data, error] = useFetch(fetchDriverInfo, driverId);
    return (
        <>
            <NavProvider>
                <NavBar />
            </NavProvider>
            {
                loading ? <div className="flex mt-[10rem] justify-center">
                    <TailSpin color="#b90202" height={80} width={80} />
                </div> :
                error ? <p className="mt-[6rem] h-[70vh]">"Error..."</p> : 
                data.length === 0 ? <p className="mt-[6rem] h-screen">"No results..."</p> :
                <div className="w-[90%] mx-auto mt-[6rem]">
                    <div className="flex gap-x-2 tablet:gap-x-6 lg:gap-x-10 flex-col tablet:flex-row">
                        <img src={findDriver(data.givenName).fullPic} alt="driver" className="object-fill h-[23rem] tablet:h-[30rem] basis-[40%] rounded-lg"  />

                        <div className="flex flex-col grow">
                            <img src={findDriver(data.givenName).helmetPic} alt="Helmet"className="h-[10rem] w-[10rem] object-contain" />
                            <div className="text-left grid gap-x-10 sm:gap-x-3 lg:gap-x-10 items-center grid-cols-1/2">
                                <span className="font-black text-xl lg:text-2xl">
                                    Team
                                </span> 
                                <span className="text-lg">
                                    {findDriver(data.givenName).team}
                                </span>
                                <span className="font-black text-xl lg:text-2xl">
                                    Nationality
                                </span> 
                                <span className="text-lg">
                                    {data.nationality}
                                </span>
                                <span className="font-black text-xl lg:text-2xl">
                                    D.O.B
                                </span> 
                                <span className="text-lg">
                                    {data.dateOfBirth}
                                </span>
                                <span className="font-black text-xl lg:text-2xl">
                                    Number
                                </span> 
                                <span className="text-lg text-red-600">
                                    {data.permanentNumber}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="flex items-center gap-x-4">
                            <span className="font-bold text-3xl text-gray-500">
                                {data.permanentNumber}
                            </span>
                            <img src={findDriver(data.givenName).country} alt="country" className="rounded-md w-16" />
                        </div>
                        <h1 className="mt-2 py-4 font-black text-5xl">{data.givenName} {data.familyName}</h1>

                        <h3 className="py-4 font-bold text-3xl">Biography</h3>
                        <p className="leading-7 max-w-3xl">
                            { findDriver(data.givenName).biography }
                        </p>
                    </div>
                </div>
            }
            { loading ? null : <Footer /> }
        </>
    );
}

export default DriverCard;

