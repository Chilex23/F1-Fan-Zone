import axios from "axios";

const fetchDriverInfo = async (driverId) => {
  const options = {
    method: "GET",
    url: `https://ergast.com/api/f1/drivers/${driverId}.json`,
  };

  try {
    const { data } = await axios(options);
    return data.MRData.DriverTable.Drivers[0];
  } catch (error) {
    console.log("Fetch driver's info failed with an error of ", error);
    throw new Error(error);
  }
};

export default fetchDriverInfo;
