import axios from "axios";

const fetchNews = async () => {
    const { data } = await axios("https://newsapi.org/v2/everything?q=f1&from=2022-07-24&sortBy=popularity&pageSize=11&language=en&apiKey=cecb65b7797a4d3cbe2ffcedce7c824f");
    return data;
}

export default fetchNews;