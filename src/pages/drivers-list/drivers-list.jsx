import React from "react";
import DriverListItem from "../../components/driverListItem/driverListItem";
import Footer from "../../components/footer/footer";
import useFetch from "../../hooks/useFetch";
import fetchDriversStand from "../../utils/fetchDriversStandings";
import { TailSpin } from "react-loader-spinner";

const DriversList = () => {
  const [loading, data, error] = useFetch(fetchDriversStand);

  return (
    <div className="dark:bg-gray-800 mt-[4rem] pt-[2rem]">
      <div className="border-t-8 border-r-8 border-stone-900 dark:border-gray-300 rounded-tr-3xl pt-4 mx-6">
        <h1 className="text-5xl uppercase font-extrabold mb-8 text-stone-900 dark:text-gray-300">
          F1 Drivers 2022
        </h1>
        <p className="bg-gray-200 text-black px-2 py-4 rounded-l-md">
          Click on a driver's card to view the driver's details
        </p>
      </div>

      <div
        className={`overflow-clip ${
          loading
            ? ""
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-6"
        } mx-6 gap-x-4 gap-y-10 mt-4`}
      >
        {loading ? (
          <div className="flex justify-center">
            <TailSpin color="#b90202" height={80} width={80} />
          </div>
        ) : error ? (
          <div className="flex items-center justify-center">Error...</div>
        ) : (
          data.map((driver) => (
            <DriverListItem key={driver.Driver.driverId} driver={driver} />
          ))
        )}
      </div>
      {loading ? null : <Footer />}
    </div>
  );
};
export default DriversList;
