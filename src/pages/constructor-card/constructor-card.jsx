import React from "react";
import { Link, useParams } from "react-router-dom";
import fetchConstructorInfo from "../../utils/fetchConstructorInfo";
import fetchCurrentResult from "../../utils/fetchCurrentResult";
import FindTeam from "../../utils/findTeam";
import FindTeamDrivers from "../../utils/findTeamDrivers";
import Footer from "../../components/footer/footer";
import useFetch from "../../hooks/useFetch";
import { TailSpin } from "react-loader-spinner";

const ConstructorCard = () => {
  const { constructorId } = useParams();
  const [loading, data, error] = useFetch(fetchConstructorInfo, constructorId);
  const [loading2, data2, error2] = useFetch(fetchCurrentResult);
  // console.log(data2[0]?.Results.filter(elem => elem.Constructor.constructorId === constructorId));

  window.scrollTo(0, 0);
  
  return (
    <div className="dark:bg-gray-800 mt-[3rem] pt-5 dark:text-gray-300">
      <div className="py-5">
        <p className="text-center text-xl">{data2[0]?.raceName} Race Result</p>
        <div className="flex justify-center mt-4">
          {
            data2[0]?.Results.filter(elem => elem.Constructor.constructorId === constructorId).map((elem) => <p className="mr-10 border-2 border-black dark:border-gray-300 p-2 rounded-md">{elem.Driver.givenName}  {elem.Driver.familyName}<span className="ml-10">Position: {elem.position}</span></p>)
          }
        </div>
      </div>
      <h1 className="text-3xl md:text-5xl dark:text-gray-300 uppercase font-extrabold top-2 relative text-center mb-8 mt-1">
        {loading ? "" : data.name}
      </h1>
      {loading || loading2 ? (
        <div className="h-screen mt-[5rem] flex justify-center">
          <TailSpin color="#b90202" height={80} width={80} />
        </div>
      ) : error || error2 ? (
        <p className="mt-[1rem] h-screen text-center">😔 Snap! An error occured</p>
      ) : data.length === 0 ? (
        <p className="mt-[1rem] h-screen text-center">🤷 No results...</p>
      ) : (
        <div className="w-[90%] mx-auto">
          <div className="flex gap-x-6 flex-col md:flex-row">
            <div className="w-[100%]">
              <div className="h-full">
                <img
                  src={FindTeam(data.name).logo}
                  alt="driver"
                  className="object-contain rounded-lg w-[10rem]"
                />
                <div className="grid grid-cols-2 my-4 text-lg dark:text-gray-300">
                  <span className="text-xl font-extrabold">Team Name</span>
                  <span>{data.name}</span>
                  <span className="text-xl font-extrabold">
                    Team Nationality
                  </span>
                  <span>{data.nationality}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-x-5">
              {FindTeamDrivers(data.name)
                .slice(0, 2)
                .map((elem) => (
                  <Link
                    to={`/drivers/${elem.driverId}`}
                    key={elem.driverId}
                    className="sm2:h-[20rem] lg:h-full flex flex-col border border-gray-500 rounded-lg"
                  >
                    <img className="w-full" src={elem.fullPic} alt="driver" />
                    <div className="flex flex-col p-4 dark:text-gray-300">
                      <span className="text-5xl font-extrabold">
                        {elem.number}
                      </span>
                      <span className="text-xl font-extrabold">
                        {elem.givenName} {elem.familyName}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {elem.team}
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          <div className="mt-6 max-w-4xl">
            <h3 className="py-4 font-bold text-3xl dark:text-gray-300">
              In profile
            </h3>
            <p className="leading-7 dark:text-gray-300">
              {FindTeam(data.name).bio}
            </p>
          </div>
        </div>
      )}

      {loading ? null : <Footer />}
    </div>
  );
};

export default ConstructorCard;
