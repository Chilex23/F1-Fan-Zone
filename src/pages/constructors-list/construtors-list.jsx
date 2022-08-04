import React, { useState, useEffect } from "react";
import NavBar from "../../components/Navbar/navbar.component";
import ConstructorListItem from "../../components/constructorListItem/constructorListItem";
import NavProvider from "../../provider/navbar/navbar.provider";
import fetchConstructorStand from "../../utils/fetchConstructorStandings";
import Footer from "../../components/footer/footer";
import { TailSpin } from "react-loader-spinner";

const ConstructorsList= () => {
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

    return (
        <>
            <NavProvider>
                <NavBar />
            </NavProvider>
            <div className="border-t-8 border-r-8 border-stone-900 rounded-tr-3xl pt-4 mt-24 mx-6">
                <h1 className="text-5xl uppercase font-extrabold mb-8 text-stone-900">
                    F1 Teams 2022
                </h1>
                <p className="bg-gray-200 text-black px-2 py-4 rounded-l-md">
                    Click on a team's card to view the team's details
                </p>
            </div>

            <div className="grid md:grid-cols-2 mx-6 mt-4 gap-x-6 gap-y-10">
                {
                    loading ? <div className="h-[80vh] flex justify-center">
                        <TailSpin color="#b90202" height={80} width={80} />
                    </div>  
                    :
                    error ? <p>Error...</p> :
                    results.map(constructor => <ConstructorListItem key={constructor.Constructor.constructorId} constructor={constructor} />)
                }
            </div>
            <Footer />
        </>
    )
};

export default ConstructorsList;