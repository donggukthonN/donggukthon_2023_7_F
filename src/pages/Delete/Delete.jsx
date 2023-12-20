import React, { useState, useEffect } from "react";
import { Title } from "../../components/index";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../../pages/Delete/Delete.module.css";
import {
  HomeHeartButton,
  ShareButton,
  PhotoDisplay,
} from "../../components/Button/Button";
import { PasswordCheck } from "../../components/Input/Input";
import getOnephoto from "../../apis/getOnephoto";
import DeletePhoto from "../../apis/DeletePhoto";

const Delete = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState(null);
  const [likes, setLikes] = useState(null);
  const [image, setImage] = useState(null);
  // const [pwStatus, setPwStatus] = useState()
  const ID = parseInt(location.pathname.replace("/delete/", ""), 10);

  useEffect(() => {
    try {
      const handleOnephoto = async () => {
        const res = await getOnephoto(ID);
        // console.log(res);
        setLikes(res.likeCount);
        setTitle(res.title);
        setImage(res.image);
      };
      handleOnephoto();
    } catch (error) {}
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
        <div className={styles.PhotoDisplay}>
          <PhotoDisplay />
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
