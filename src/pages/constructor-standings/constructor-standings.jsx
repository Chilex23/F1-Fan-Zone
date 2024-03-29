import React from "react";
import fetchConstructorStand from "../../utils/fetchConstructorStandings";
import ConstructorRow from "../../components/constructor-row/constructor-row";
import Footer from "../../components/footer/footer";
import useFetch from "../../hooks/useFetch";
import { TailSpin } from "react-loader-spinner";

const ConstructorStandings = () => {
  const [loading, data, error] = useFetch(fetchConstructorStand);
  window.scrollTo(0, 0);

  return (
    <div className="dark:bg-gray-800 min-h-screen">
      <div className="overflow-x-auto mt-[3rem] mx-1 md:mx-6">
        <h1 className="text-xl md:text-5xl uppercase font-extrabold text-center mb-8 mt-10 dark:text-gray-300">
          2022 Constructors' Standings
        </h1>
        <table className="w-full dark:text-gray-300 mb-40">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th>Pos</th>
              <th>Team</th>
              <th>PTS</th>
            </tr>
          </thead>

          <tbody className="text-center sm2:text-sm">
            {loading ? (
              <tr>
                <td></td>
                <td>
                  <TailSpin color="#b90202" height={80} width={80} />
                </td>
                <td></td>
              </tr>
            ) : error ? (
              <tr>
                <td>😔 Snap! An error occured</td>
              </tr>
            ) : data.length > 0 ? (
              data.map((elem, i) => <ConstructorRow key={i + 1} team={elem} />)
            ) : (
              <tr>
                <td></td>
                <td className="flex justify-center">🤷 No results...</td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {loading ? null : <Footer />}
    </div>
  );
};
export default ConstructorStandings;
