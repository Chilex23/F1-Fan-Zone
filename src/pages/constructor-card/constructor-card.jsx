import React from "react";
import { useParams } from "react-router-dom";
import fetchConstructorInfo from "../../utils/fetchConstructorInfo";
import FindTeam from "../../utils/findTeam";
import FindTeamDrivers from "../../utils/findTeamDrivers";
import Footer from "../../components/footer/footer";
import useFetch from "../../hooks/useFetch";
import { TailSpin } from "react-loader-spinner";

const ConstructorCard = () => {
    const { constructorId } = useParams();
    const [loading, data, error] = useFetch(fetchConstructorInfo, constructorId);

    // console.log(constructor);
    return (
        <>

            <h1 className="text-5xl uppercase font-extrabold top-20 relative text-center mb-8 mt-3">
                { loading ? "" : data.name }
            </h1>
            {
                loading ? <div className="mt-[10rem] flex justify-center">
                    <TailSpin color="#b90202" height={80} width={80} />
                </div> 
                :
                error ? <p className="mt-[6rem] h-screen">"Error..."</p> : 
                data.length === 0 ? <p className="mt-[6rem] h-screen">"No results..."</p> :
                <div className="w-[90%] mx-auto mt-[6rem]">
                    <div className="flex gap-x-6 flex-col md:flex-row">
                        <div className="w-[100%]">
                            <div className="h-full">
                                <img src={FindTeam(data.name).logo} alt="driver" className="object-contain rounded-lg w-[10rem]" />
                                <div className="grid grid-cols-2 my-4 text-lg">
                                    <span className="text-xl font-extrabold">Team Name</span>
                                    <span>{data.name}</span>
                                    <span className="text-xl font-extrabold">Team Nationality</span>
                                    <span>{data.nationality}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-x-5">
                            {
                                FindTeamDrivers(data.name).slice(0, 2).map((elem) => 
                                <div key={elem.driverId} className="sm2:h-[20rem] lg:h-full flex flex-col border border-gray-500 rounded-lg">
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

                <div className="mt-6 max-w-4xl">
                    <h3 className="py-4 font-bold text-3xl">In profile</h3>
                    <p className="leading-7">
                       {
                            FindTeam(data.name).bio
                       }
                    </p>
                </div>
            </div>
            }
            
            { loading ? null : <Footer /> }
        </>
    );
}

export default ConstructorCard;