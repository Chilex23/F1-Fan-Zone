import axios from "axios";

const fetchResults = async (circuitId) => {
  const options = {
    method: "GET",
    url: `https://ergast.com/api/f1/current/circuits/${circuitId}/results.json`,
  };

  try {
    const { data } = await axios(options);
    return data.MRData.RaceTable.Races;
  } catch (error) {
    console.log("Fetch result info failed with an error of ", error);
    throw new Error(error);
  }
};

export default fetchResults;
