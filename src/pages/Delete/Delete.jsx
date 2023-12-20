import React, { useState, useEffect } from "react";
import { Title } from "../../components/index";
import { useLocation } from "react-router-dom";
import styles from "../../pages/Delete/Delete.module.css";
import {
  HeartButton,
  ShareButton,
  PhotoDisplay,
} from "../../components/Button/Button";
import { PasswordCheck } from "../../components/Input/Input";
import getOnephoto from "../../apis/getOnephoto";
import DeletePhoto from "../../apis/DeletePhoto";

const Delete = () => {
  const location = useLocation();
  const ID = parseInt(location.pathname.replace("/delete/", ""), 10);

  useEffect(() => {
    try {
      const handleOnephoto = async () => {
        const res = await getOnephoto(26);
        console.log(res);
      };
      handleOnephoto();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDeletePhoto = async (pw) => {
    if (pw && ID) {
      console.log(pw);
      const res = await DeletePhoto(ID, pw);
      if (res.data === "포토 삭제 완료") {
        alert("삭제 완료");
      }

    }
  };

  return (
    <div className={styles.Deletepage}>
      <div className={styles.Deletecomponent}>
        <div className={styles.TitleInput}>
          <Title />
        </div>
        <div className={styles.PhotoDisplay}>
          <PhotoDisplay />
        </div>
        <div className={styles.DeleteButtons}>
          <HeartButton />
          <ShareButton />
          <PasswordCheck onSubmitPassword={handleDeletePhoto} />
        </div>
      </div>
    </div>
  );
};

export default Delete;
