import axios from "axios";

const fetchNews = async () => {
  const options = {
    method: "GET",
    url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI",
    params: {
      q: "f1",
      pageNumber: "1",
      pageSize: "11",
      autoCorrect: "false",
      fromPublishedDate: "null",
      toPublishedDate: "null",
    },
    headers: {
      "X-RapidAPI-Key": "6b1c785ca9mshaa113b54b221181p19b2edjsn99863a944091",
      "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    },
  };

  try {
    return axios(options);
  } catch (error) {
    console.log("Fetch news failed with an error of ", error);
    // throw new Error(error);
  }
};

export default fetchNews;
