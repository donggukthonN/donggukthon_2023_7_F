import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { LocationInput, Title, PhotoShow } from "../../components/index";
import LoadingPage from "../Loading/LoadingPage";
import { useReverseGeocoding } from "../../hooks/useReverseGeocoding";
=======
import { Title } from "../../components/index";
import { useNavigate, useLocation } from "react-router-dom";
>>>>>>> d1e396fb98e49f222627be9ebfbec0d855978b07
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
      console.log(pw);
      const res = await DeletePhoto(ID, pw);
      if (res.data === "포토 삭제 완료") {
        alert("삭제 완료");
        navigate("/home");
      } else {
        alert("비밀번호 오류!");
      }

    }
  };

  return (
    <div className={styles.Deletepage}>
<<<<<<< HEAD
      {address ? (
        <div className={styles.Deletecomponent}>
          <div className={styles.TitleInput}>
            <Title />
          </div>
          <div className={styles.PhotoDisplay}>
            <PhotoShow />
          </div>
          <div className={styles.DeleteButtons}>
            <HeartButton />
            <ShareButton />
            <PasswordCheck onSubmitPassword={handleDeletePhoto}
            />
          </div>
=======
      <div className={styles.Deletecomponent}>
        <div className={styles.TitleInput}>
          {title && <Title title={title} />}
>>>>>>> d1e396fb98e49f222627be9ebfbec0d855978b07
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
