import axios from "axios";

<<<<<<< HEAD
const API_URL = "https://api.snowmanvillage.site";

const getPhotoAll = async (orderBy) => {
  try {
    const res = await axios.get(
      (`${API_URL}/photo/list`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: { orderBy },
      })
    );
=======
const API_URL = process.env.REACT_APP_API_URL;
const getPhotoAll = async (orderBy) => {
  try {
    const res = await axios.get(`${API_URL}/photo/list`, {
      headers: {
        "Content-Type": "application/json",
      },
      params: { orderBy },
    });
>>>>>>> ee53f53fea4cb1ea3341def9534153a380458592
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

export default getPhotoAll;
