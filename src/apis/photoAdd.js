import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const photoAdd = async (imageFile, photoInfo, locationInfo) => {
  try {
    const photo = {
      title: photoInfo.title,
      username: photoInfo.username,
      password: photoInfo.password,
    };

    const location = {
      lotNumber: locationInfo.address,
      latitude: locationInfo.lat,
      longitude: locationInfo.lng,
    };
    
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("photoRequest", JSON.stringify(photo));
    formData.append("locationRequest", JSON.stringify(location));

    const response = await axios.post(`${API_URL}/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default photoAdd;
