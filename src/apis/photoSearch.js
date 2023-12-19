import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const photoSearch = async (searchType, searchValue) => {
  try {
    const res = await axios.get(`${API_URL}/photo/search`, {
      headers: {
        "Content-Type": "application/json",
      },
      params: { searchType, searchValue },
    });
    console.log(res);
    console.log(res.data); // Add this line to log the data
  } catch (err) {
    console.error(err);
    console.log(err.response);
  }
};

export default photoSearch;
