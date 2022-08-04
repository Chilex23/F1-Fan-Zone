import React, { useState, useEffect } from "react";
import NavBar from "../../components/Navbar/navbar.component";
import NavProvider from "../../provider/navbar/navbar.provider";
import fetchConstructorStand from "../../utils/fetchConstructorStandings";
import ConstructorRow from "../../components/constructor-row/constructor-row";
import Footer from "../../components/footer/footer";

const ConstructorStandings = () => {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await fetchConstructorStand();
                setResults(data);
                // console.log(data);
            } catch (error) {
                console.log(error);
                //setLoading(false);
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    // console.log(results);

    return (
        <>
            <NavProvider>
                <NavBar />
            </NavProvider>
            <div className="overflow-x-auto mt-20 mx-1 md:mx-6">
                <h1 className="text-xl md:text-5xl uppercase font-extrabold text-center mb-8 mt-3">
                    2022 Constructor's Standings
                </h1>
                <table className="table table-zebra w-full">
                    <thead>
                    <tr>
                        <th>Pos</th>
                        <th>Team</th>
                        <th>PTS</th>
                    </tr>
                    </thead>

                    <tbody>
                        {
                            loading ? <tr><td>Loading...</td></tr> : 
                            error ? <tr><td>Something went wrong</td></tr> :
                            results.length > 0 ?
                            results.map((elem, i) => <ConstructorRow key={i + 1} team={elem} />) :
                            <tr><td>No results</td></tr>
                        }
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
}
export default ConstructorStandings;