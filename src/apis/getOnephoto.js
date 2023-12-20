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
    console.log(res.status); // 서버 응답 상태 코드 확인용 로그
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export default getOnephoto;
