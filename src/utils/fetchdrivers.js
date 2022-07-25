import axios from "axios";

const fetchDrivers = async () => {
    const { data } = await axios('http://ergast.com/api/f1/2022/drivers.json');
    //console.log(data);
    return data;
      
    //   axios.request(options).then(function (response) {
    //       //console.log(response.data);
    //       return response.data;
    //   }).catch(function (error) {
    //       console.error(error);
    //   });
}
 
export default fetchDrivers;
