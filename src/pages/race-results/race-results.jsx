import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchResults from "../../utils/fetchResults";
import NavBar from "../../components/Navbar/navbar.component";
import Footer from "../../components/footer/footer";
import RaceResultsRowItem from "../../components/race-results-row-item/race-results-row-item";
import NavProvider from "../../provider/navbar/navbar.provider";
import { TailSpin } from "react-loader-spinner";

const RaceResults = () => {
    const { circuitId } = useParams();
    const [raceResults, setRaceResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await fetchResults(circuitId);
                setRaceResults(data);
                // console.log(data);
            } catch (error) {
                console.log(error);
                setError(true);
            }
            setLoading(false);
        }
        fetchData();
    }, [circuitId]);
    // console.log(raceResults);

    return (
        <>
            <NavProvider>
                <NavBar />
            </NavProvider>
            {
                loading ? 
                <div className="h-[80vh] flex items-center justify-center">
                    <TailSpin color="#b90202" height={80} width={80} />
                </div> :
                error ? <p className="h-[80vh] flex items-center justify-center">"Error..."</p> : 
                raceResults.length === 0 || raceResults[0].length === 0 ? 
                    <p className="mt-[6rem] h-screen">"No results..."</p> 
                : 
                <div className="w-full md:w-[90%] mx-auto mt-[6rem]">
                    <h1 className="mt-2 py-4 font-black text-xl md:text-3xl text-center">
                        {raceResults[0].raceName} Results
                    </h1>

                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                            <tr>
                                <th>Pos</th>
                                <th className="text-center">Driver</th>
                                <th>Laps</th>
                                <th>Points</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>

                                {
                                    raceResults[0].Results.map((item, index) => <RaceResultsRowItem key={index} item={item} />)
                                }
                            </tbody>
                            
                            <tfoot className="w-full">
                                <tr>
                                    <th>Pos</th>
                                    <th className="text-center">Driver</th>
                                    <th>Laps</th>
                                    <th>Points</th>
                                    <th>Status</th>
                                </tr>
                            </tfoot>
                            
                        </table>
                    </div>
                </div>
            }
            <Footer />
        </>
    )
};

export default RaceResults;