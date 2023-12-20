import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const DeletePhoto = async (password) => {
  try {
    const password = {
      password: "password",
    };
    const response = await axios.post(`${API_URL}/photo/delete/${photo_id}`, password, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

export default DeletePhoto;
