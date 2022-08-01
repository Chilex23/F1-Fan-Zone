import axios from "axios";

const fetchDriversStand = async () => {
    const options = {
        method: 'GET',
        url: 'https://ergast.com/api/f1/current/driverStandings.json',
    };

    try {
      const { data } = await axios(options);
      return data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    } catch(error) {
      console.log("Fetch drivers standings failed with an error of ", error);
      throw new Error(error);
    }
    
}

export default fetchDriversStand;