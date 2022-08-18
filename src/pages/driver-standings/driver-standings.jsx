import React from "react";
import fetchDriversStand from "../../utils/fetchDriversStandings";
import TableRow from "../../components/table-row/table-row";
import Footer from "../../components/footer/footer";
import useFetch from "../../hooks/useFetch";
import { TailSpin } from "react-loader-spinner";

const DriverStandings = () => {
  const [loading, data, error] = useFetch(fetchDriversStand);

  return (
    <div className="dark:bg-gray-800 min-h-screen">
      <div className="overflow-x-auto mt-[3rem] mx-1 md:mx-6 mb-20">
        <h1 className="text-xl md:text-5xl uppercase font-extrabold text-center mb-8 mt-10 dark:text-gray-300">
          2022 Drivers' Standings
        </h1>
        <table
          className={`w-full dark:text-gray-300 ${
            loading ? "h-screen" : "h-fit"
          }`}
        >
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr className="text-center">
              <th>Pos</th>
              <th>Driver</th>
              <th>Nationality</th>
              <th>Car</th>
              <th>PTS</th>
            </tr>
          </thead>

          <tbody className="text-center sm2:text-sm">
            {loading ? (
              <tr className="text-center">
                <td></td>
                <td></td>
                <td className="flex justify-center">
                  <TailSpin color="#b90202" height={80} width={80} />
                </td>
                <td></td>
                <td></td>
              </tr>
            ) : error ? (
              <tr>
                <td></td>
                <td></td>
                <td>😔 Snap! An error occured</td>
                <td></td>
                <td></td>
              </tr>
            ) : data.length > 0 ? (
              data.map((elem, i) => <TableRow key={i + 1} driver={elem} />)
            ) : (
              <tr>
                <td></td>
                <td></td>
                <td className="flex justify-center">🤷 No results...</td>
                <td></td>
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

export default DriverStandings;
