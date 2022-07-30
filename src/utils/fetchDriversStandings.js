import axios from "axios";

const fetchDriversStand = async () => {
    const options = {
        method: 'GET',
        url: 'https://formula-18.p.rapidapi.com/driverStanding',
        params: {year: '2022'},
        headers: {
          'X-RapidAPI-Key': '6b1c785ca9mshaa113b54b221181p19b2edjsn99863a944091',
          'X-RapidAPI-Host': 'formula-18.p.rapidapi.com'
        }
    };

    try {
      const { data } = await axios(options);
      return data;
    } catch(error) {
      console.log("Fetch drivers standings failed with an error of ", error);
      throw new Error(error);
    }
    
}

export default fetchDriversStand;