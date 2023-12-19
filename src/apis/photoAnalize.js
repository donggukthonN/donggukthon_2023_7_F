import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const photoAnalize = async (imageFile) => {
  try {
    console.log(imageFile);
    const formData = new FormData();
    formData.append("image", imageFile);
    console.log(formData);
    const response = await axios.post(`${API_URL}/photo/analyze`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default photoAnalize;
