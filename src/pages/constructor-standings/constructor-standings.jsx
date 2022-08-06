import React from "react";
import NavBar from "../../components/Navbar/navbar.component";
import NavProvider from "../../provider/navbar/navbar.provider";
import fetchConstructorStand from "../../utils/fetchConstructorStandings";
import ConstructorRow from "../../components/constructor-row/constructor-row";
import Footer from "../../components/footer/footer";
import useFetch from "../../hooks/useFetch";
import { TailSpin } from "react-loader-spinner";

const ConstructorStandings = () => {
    const [loading, data, error] = useFetch(fetchConstructorStand);

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
                            loading ? 
                            <tr className="h-[90vh]">
                                <td></td>
                                <td>
                                    <TailSpin color="#b90202" height={80} width={80} />
                                </td>
                                <td></td>
                            </tr> : 
                            error ? <tr><td>Something went wrong</td></tr> :
                            data.length > 0 ?
                            data.map((elem, i) => <ConstructorRow key={i + 1} team={elem} />) :
                            <tr className="h-[90vh]"><td>No results</td></tr>
                        }
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
}
export default ConstructorStandings;