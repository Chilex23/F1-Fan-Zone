import React, { useState, useEffect } from "react";
import NavBar from "../../components/Navbar/navbar.component";
import NavProvider from "../../provider/navbar/navbar.provider";
import fetchDriversStand from "../../utils/fetchDriversStandings";
import TableRow from "../../components/table-row/table-row";
import Footer from "../../components/footer/footer";
import { TailSpin } from "react-loader-spinner";

const DriverStandings = () => {
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

    // console.log(results)

    return (
        <>
            <NavProvider>
                <NavBar />
            </NavProvider>
            <div className="overflow-x-auto mt-20 mx-1 md:mx-6">
                <h1 className="text-xl md:text-5xl uppercase font-extrabold text-center mb-8 mt-3">
                    2022 Driver's Standings
                </h1>
                <table className="table table-zebra w-full">
                    <thead>
                    <tr className="text-center">
                        <th>Pos</th>
                        <th>Driver</th>
                        <th>Nationality</th>
                        <th>Car</th>
                        <th>PTS</th>
                    </tr>
                    </thead>

                    <tbody>
                        {
                            loading ? 
                            <tr className="h-[90vh] text-center">
                                <td></td>
                                <td></td>
                                <td>
                                    <TailSpin color="#b90202" height={80} width={80} />
                                </td>
                                <td></td>
                                <td></td>
                            </tr> : 
                            error ? <tr className="h-[90vh]"><td>Something went wrong</td></tr> :
                            results.length > 0 ?
                            results.map((elem, i) => <TableRow key={i + 1} driver={elem} />) :
                            <tr className="h-[90vh]"><td>No results</td></tr>
                        }
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
}

export default DriverStandings;