import React, { useState, useEffect } from "react";
import { Title } from "../../components/index";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../../pages/Delete/Delete.module.css";
import {
  HomeHeartButton,
  ShareButton,
  PhotoDisplay,
} from "../../components/Button/Button";
import { woodframe } from "../../components/Button/image";
import { PasswordCheck, PhotoShow } from "../../components/Input/Input";
import getOnephoto from "../../apis/getOnephoto";
import DeletePhoto from "../../apis/DeletePhoto";
import { IMG_BASE_URL } from "../../utils/constant";

const Delete = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const ID = parseInt(location.pathname.replace("/delete/", ""), 10);

  const [title, setTitle] = useState(null);
  const [likes, setLikes] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    try {
      const handleOnephoto = async () => {
        const res = await getOnephoto(ID);
        setLikes(res.likeCount);
        setTitle(res.title);
        setImage(res.imageUrl);
        console.log(res);

      };
      handleOnephoto();
    } catch (error) {
      console.log(error);
    }
  }, [ID]);

  const handleDeletePhoto = async (pw) => {
    if (pw && ID) {
      const res = await DeletePhoto(ID, pw);
      if (res.data === "포토 삭제 완료") {
        alert("삭제 완료");
        navigate("/end");
      } else {
        alert("비밀번호 오류!");
      }
    }
  };

  return (
    <div className={styles.Deletepage}>
      <div className={styles.Deletecomponent}>
        <div className={styles.TitleInput}>
          {title && <Title title={title} />}
        </div>
        {/* imagecontainer 추가 */}
        <div className={styles.imagecontainer}>
          <div
            style={{
              backgroundImage: `url(${IMG_BASE_URL}/${image})`,
              backgroundSize: "cover",
            }}
          >
            <img src={woodframe} alt="first" className={styles.PhotoShow} />
          </div>
        </div>
        <div className={styles.DeleteButtons}>
          {likes && <HomeHeartButton likes={likes} />}
          <ShareButton />
          <PasswordCheck onSubmitPassword={handleDeletePhoto} />
        </div>
      </div>
    </div>
  );
};

export default Delete;