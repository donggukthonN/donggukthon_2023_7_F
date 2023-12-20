import styles from "../../pages/Detail/Detail.module.css";
import { useLocation } from "react-router-dom";
import {
  HomeHeartButton,
  PhotoUpload,
  ShareButton,
  DeleteButton,
} from "../../components/Button/Button";
import { Title } from "../../components";
import React, { useEffect, useState } from "react";
import getOnephoto from "../../apis/getOnephoto";

const Detail = () => {
  const location = useLocation();
  const ID = parseInt(location.pathname.replace("/detail/", ""), 10);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [likes, setLikes] = useState("");
  useEffect(() => {
    try {
      const handleOnephoto = async () => {
        const res = await getOnephoto(ID);
        console.log(res);
        setTitle(res.title);
        setImage(res.imageUrl);
        setLikes(res.likeCount);
      };
      handleOnephoto();
    } catch (error) {
      console.log(error);
    }
  }, [ID]);

  return (
    <div className={styles.Detailpage}>
      <div className={styles.Detailcomponent}>
        <div className={styles.TitleInput}>
          {title && <Title title={title} />}
        </div>
        <div className={styles.PhotoUpload}>
          {image && <PhotoUpload serverPhoto={image} />}
        </div>
        <div className={styles.DetailButtons}>
          {likes && <HomeHeartButton likes={likes} />}
          <ShareButton />
          <DeleteButton id={ID} />
        </div>
      </div>
    </div>
  );
};
export default Detail;
