import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const addPhotoLike = async () => {
  try {
    const res = await axios.put(
      `${API_URL}/photo/like`,
      { photo_id: 1 },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
export default addPhotoLike;
