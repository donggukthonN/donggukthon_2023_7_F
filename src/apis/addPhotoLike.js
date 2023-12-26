import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const addPhotoLike = async (id) => {
  try {
    const res = await axios.put(
      `${API_URL}/photo/like`,
      { photo_id: id },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
export default addPhotoLike;
