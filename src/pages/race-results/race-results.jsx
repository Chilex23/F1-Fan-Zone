import React from "react";
import { useParams } from "react-router-dom";
import fetchResults from "../../utils/fetchResults";
import NavBar from "../../components/Navbar/navbar.component";
import Footer from "../../components/footer/footer";
import useFetch from "../../hooks/useFetch";
import RaceResultsRowItem from "../../components/race-results-row-item/race-results-row-item";
import NavProvider from "../../provider/navbar/navbar.provider";
import { TailSpin } from "react-loader-spinner";

const RaceResults = () => {
    const { circuitId } = useParams();
    const [loading, data, error] = useFetch(fetchResults, circuitId);

    return (
        <>
            <NavProvider>
                <NavBar />
            </NavProvider>
            {
                loading ? 
                <div className="flex justify-center mt-[6rem]">
                    <TailSpin color="#b90202" height={80} width={80} />
                </div> :
                error ? <p className="mt-[10rem] flex items-center justify-center">"Error..."</p> : 
                data.length === 0 || data[0].length === 0 ? 
                    <p className="mt-[6rem] h-screen">"No results..."</p> 
                : 
                <div className="w-full md:w-[90%] mx-auto mt-[6rem]">
                    <h1 className="mt-2 py-4 font-black text-xl md:text-3xl text-center">
                        {data[0].raceName} Results
                    </h1>

                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                            <tr className="text-center">
                                <th>Pos</th>
                                <th>Driver</th>
                                <th>Laps</th>
                                <th>Pts</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody className="text-center">

                                {
                                    data[0].Results.map((item, index) => <RaceResultsRowItem key={index} item={item} />)
                                }
                            </tbody>
                            
                            <tfoot className="w-full">
                                <tr className="text-center">
                                    <th>Pos</th>
                                    <th>Driver</th>
                                    <th>Laps</th>
                                    <th>Pts</th>
                                    <th>Status</th>
                                </tr>
                            </tfoot>
                            
                        </table>
                    </div>
                </div>
            }
            { loading ? null : <Footer /> }
        </>
    )
};

export default RaceResults;