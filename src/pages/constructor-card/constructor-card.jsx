import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchConstructorInfo from "../../utils/fetchConstructorInfo";
import FindTeam from "../../utils/findTeam";
import FindTeamDrivers from "../../utils/findTeamDrivers";
import NavBar from "../../components/Navbar/navbar.component";
import Footer from "../../components/footer/footer";
import NavProvider from "../../provider/navbar/navbar.provider";

const ConstructorCard = () => {
    const { constructorId } = useParams();
    const [loading, setLoading] = useState(false);
    const [constructor, setConstructor] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await fetchConstructorInfo(constructorId);
                setConstructor(data);
                // console.log(data);
            } catch (error) {
                console.log(error);
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, [constructorId]);

    // console.log(constructor);
    return (
        <>
            <NavProvider>
                <NavBar />
                <h1 className="text-5xl uppercase font-extrabold top-20 relative text-center mb-8 mt-3">
                    { constructor.name }
                </h1>
            </NavProvider>
            {
                loading ? <p className="mt-[6rem] h-screen">"Loading..."</p> :
                error ? <p className="mt-[6rem] h-screen">"Error..."</p> : 
                constructor.length === 0 ? <p className="mt-[6rem] h-screen">"No results..."</p> :
                <div className="w-[90%] mx-auto mt-[6rem]">
                    <div className="flex gap-x-6 flex-col md:flex-row">
                        <div className="w-[100%]">
                            <div className="h-full">
                                <img src={FindTeam(constructor.name).logo} alt="driver" className="object-contain rounded-lg w-[10rem]" />
                                <div className="grid grid-cols-2 mt-4 text-lg">
                                    <span className="text-xl font-extrabold">Team Name</span>
                                    <span>{constructor.name}</span>
                                    <span className="text-xl font-extrabold">Team Base</span>
                                    <span>{constructor.nationality}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-x-5">
                            {
                                FindTeamDrivers(constructor.name).slice(0, 2).map((elem) => 
                                <div key={elem.driverId} className="flex flex-col border border-gray-500 rounded-lg">
                                    <img className="w-full" src={elem.fullPic} alt="driver" />
                                    <div className="flex flex-col p-4">
                                        <span className="text-5xl font-extrabold">{elem.number}</span>
                                        <span className="text-xl font-extrabold">
                                            {elem.givenName} {elem.familyName}
                                        </span>
                                        <span className="text-gray-600">{elem.team}</span>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </div>

                <div className="mt-6 max-w-3xl">
                    <h3 className="py-4 font-bold text-3xl">In profile</h3>
                    <p className="leading-7">
                       {
                            FindTeam(constructor.name).bio
                       }
                    </p>
                </div>
            </div>
            }
            
            <Footer />
        </>
    );
}

export default ConstructorCard;