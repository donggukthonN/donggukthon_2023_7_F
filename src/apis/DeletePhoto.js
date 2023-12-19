import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const DeletePhoto = async () => {
  try {
    const password = {
      password: "1234",
    };
    const response = await axios.post(`${API_URL}/photo/delete/7`, password, {
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
