import React, { useState, useEffect } from "react";
import { LocationInput, Title } from "../../components/index";
import LoadingPage from "../Loading/LoadingPage";
import { useReverseGeocoding } from "../../hooks/useReverseGeocoding";
import styles from "../../pages/Delete/Delete.module.css";
import {
  HeartButton,
  ShareButton,
  PhotoDisplay,
} from "../../components/Button/Button";
import { PasswordCheck } from "../../components/Input/Input";
import { useGeoLocation } from "../../hooks/useGeoLocation";
import getOnephoto from "../../apis/getOnephoto";
import DeletePhoto from '../../apis/DeletePhoto';

const Delete = () => {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [address, setAddress] = useState();
  const { loc } = useGeoLocation();
  useEffect(() => {
    if (loc) {
      setLat(loc.latitude);
      setLng(loc.longitude);
    }
  }, [loc]);
  const data = useReverseGeocoding(lat, lng);

  useEffect(() => {
    setAddress(data);
  }, [data]);

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

  const handleDeletePhoto = async () => {
    try {
      const response = await DeletePhoto();
      console.log(response);
      // 서버 응답을 기반으로 추가적인 로직 수행 가능
    } catch (error) {
      console.error('Error deleting photo:', error);
    }
  };

  return (
    <div className={styles.Deletepage}>
      {address ? (
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
            <PasswordCheck onSubmitPassword={handleDeletePhoto}
            />
          </div>
        </div>
      ) : (
        <LoadingPage title={"현재 위치를 파악중입니다."} />
      )}
    </div>
  );
};

export default Delete;
