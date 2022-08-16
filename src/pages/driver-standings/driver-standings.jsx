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
      <div className="overflow-x-auto mt-[4rem] mx-1 md:mx-6 mb-20">
        <h1 className="text-xl md:text-5xl uppercase font-extrabold text-center mb-8 mt-10 dark:text-gray-300">
          2022 Drivers' Standings
        </h1>
        <table
          className={`table table-zebra w-full ${
            loading ? "h-screen" : "h-fit"
          }`}
        >
          <thead>
            <tr className="text-center">
              <th>Pos</th>
              <th>Driver</th>
              <th>Nationality</th>
              <th>Car</th>
              <th>PTS</th>
            </tr>
          </thead>

          <tbody>
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
                <td>Something went wrong</td>
              </tr>
            ) : data.length > 0 ? (
              data.map((elem, i) => <TableRow key={i + 1} driver={elem} />)
            ) : (
              <tr>
                <td></td>
                <td></td>
                <td className="flex justify-center">No results</td>
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
