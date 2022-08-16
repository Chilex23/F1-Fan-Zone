import axios from "axios";

const fetchConstructorInfo = async (constructorId) => {
  const options = {
    method: "GET",
    url: `https://ergast.com/api/f1/constructors/${constructorId}.json`,
  };

  try {
    const { data } = await axios(options);
    return data.MRData.ConstructorTable.Constructors[0];
  } catch (error) {
    console.log("Fetch constructor's info failed with an error of ", error);
    throw new Error(error);
  }
};

export default fetchConstructorInfo;
