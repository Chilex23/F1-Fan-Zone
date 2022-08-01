import axios from "axios";

const fetchConstructorStand = async () => {
    const options = {
        method: 'GET',
        url: 'https://ergast.com/api/f1/current/constructorStandings.json',
    };

    try {
      const { data } = await axios(options);
      return data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
    } catch(error) {
      console.log("Fetch Constructor standings failed with an error of ", error);
      throw new Error(error);
    }
    
};

export default fetchConstructorStand;