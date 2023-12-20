import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const getOnephoto = async (photo_id) => {
  try {
    const res = await axios.get(`${API_URL}/photo/${photo_id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      params: { photo_id },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export default getOnephoto;
