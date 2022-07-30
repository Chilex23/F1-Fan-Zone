import axios from "axios";

const fetchNews = async () => {
    try {
        const { data } = await axios("https://newsapi.org/v2/everything?q=f1&from=2022-07-24&sortBy=popularity&pageSize=11&language=en&apiKey=cecb65b7797a4d3cbe2ffcedce7c824f");
        return data;
    } catch (error) {
        console.log("fetch news failed with an error of ", error);
        throw new Error(error);
    }
    
}

export default fetchNews;