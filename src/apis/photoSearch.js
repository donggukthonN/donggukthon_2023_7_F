import axios from "axios";

const API_URL = "https://api.snowmanvillage.site";

const photoSearch = async (searchType, searchValue) => {
  try {
    const res = await axios.get(
      (`${API_URL}/photo/search`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: { searchType, searchValue },
      })
    );
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

export default photoSearch;
