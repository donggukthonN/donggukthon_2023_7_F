import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const getPhotoAll = async (orderBy) => {
  try {
    const res = await axios.get(`${API_URL}/photo/list`, {
      headers: {
        "Content-Type": "application/json",
      },
      params: { orderBy },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export default getPhotoAll;
