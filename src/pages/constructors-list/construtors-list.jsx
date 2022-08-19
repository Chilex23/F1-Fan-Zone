import React from "react";
import ConstructorListItem from "../../components/constructorListItem/constructorListItem";
import fetchConstructorStand from "../../utils/fetchConstructorStandings";
import useFetch from "../../hooks/useFetch";
import Footer from "../../components/footer/footer";
import { TailSpin } from "react-loader-spinner";

const ConstructorsList = () => {
  const [loading, data, error] = useFetch(fetchConstructorStand);
  window.scrollTo(0, 0);

  return (
    <div className="dark:bg-gray-800 mt-[3rem] pt-[2rem] min-h-screen dark:text-gray-300">
      <div className="border-t-8 border-r-8 border-stone-900 dark:border-gray-300 rounded-tr-3xl pt-4 mx-6 sm2:mx-4">
        <h1 className="text-3xl md:text-5xl uppercase font-extrabold mb-8 text-stone-900 dark:text-gray-300">
          F1 Teams 2022
        </h1>
        <p className="bg-gray-200 text-black px-2 py-4 rounded-l-md">
          Click on a team's card to view the team's details
        </p>
      </div>

      <div className="grid md:grid-cols-2 mx-6 sm2:mx-4 mt-4 gap-x-6 gap-y-10">
        {loading ? (
          <div className="flex justify-center md:ml-auto">
            <TailSpin color="#b90202" height={80} width={80} />
          </div>
        ) : error ? (
          <div className="flex justify-center h-screen">😔 Snap! An error occured</div>
        ) : (
          data.map((constructor) => (
            <ConstructorListItem
              key={constructor.Constructor.constructorId}
              constructor={constructor}
            />
          ))
        )}
      </div>
      {loading ? null : <Footer />}
    </div>
  );
};

export default ConstructorsList;
