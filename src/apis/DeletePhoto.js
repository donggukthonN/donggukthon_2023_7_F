import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const DeletePhoto = async (photo_id, pw) => {
  try {
    const response = await axios.post(
      `${API_URL}/photo/delete/${photo_id}`,
      {
        password: pw,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default DeletePhoto;
