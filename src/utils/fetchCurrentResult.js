import axios from "axios";

const fetchCurrentResult = async () => {
  const options = {
    method: "GET",
    url: `https://ergast.com/api/f1/current/last/results.json`,
  };

  try {
    const { data } = await axios(options);
    return data.MRData.RaceTable.Races;
  } catch (error) {
    console.log("Fetch current results info failed with an error of ", error);
    throw new Error(error);
  }
};

export default fetchCurrentResult;