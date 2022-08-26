import React from "react";
import { useParams } from "react-router-dom";
import fetchResults from "../../utils/fetchResults";
import Footer from "../../components/footer/footer";
import findCircuit from "../../utils/findCircuit";
import useFetch from "../../hooks/useFetch";
import RaceResultsRowItem from "../../components/race-results-row-item/race-results-row-item";
import { TailSpin } from "react-loader-spinner";

const RaceResults = () => {
  const { circuitId } = useParams();
  const [loading, data, error] = useFetch(fetchResults, circuitId);
  window.scrollTo(0, 0);

  return (
    <div className="dark:bg-gray-800 mt-[3rem] pt-5 dark:text-gray-300">
      {loading ? (
        <div className="flex justify-center mt-[6rem] min-h-screen">
          <TailSpin color="#b90202" height={80} width={80} />
        </div>
      ) : error ? (
        <p className="mt-[10rem] flex items-center justify-center">
          😔 Snap! An error occured
        </p>
      ) : data.length === 0 || data[0].length === 0 ? (
        <p className="mt-[6rem] h-screen">🤷 No results yet...</p>
      ) : (
        <div className="w-full md:w-[90%] mx-auto">
          <h1 className="mt-2 py-4 font-black text-xl md:text-3xl text-center dark:text-gray-300">
            {data[0].raceName} Results
          </h1>
          <div
            className="py-36 px-2 mb-9 text-white rounded-md mx-auto sm2:w-[95%]"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.1)),url(${findCircuit(circuitId)})`,
              backgroundPosition: "center",
            }}
          ></div>

          <div className="overflow-x-auto w-full">
            <table className="w-full mb-20 dark:text-gray-300">
              <thead className="dark:bg-gray-700 bg-gray-200">
                <tr className="text-center">
                  <th>Pos</th>
                  <th>Driver</th>
                  <th className="px-2">Laps</th>
                  <th className="px-2">Pts</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {data[0].Results.map((item, index) => (
                  <RaceResultsRowItem key={index} item={item} />
                ))}
              </tbody>

              <tfoot className="w-full dark:bg-gray-700 bg-gray-200">
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
      )}
      {loading ? null : <Footer />}
    </div>
  );
};

export default RaceResults;