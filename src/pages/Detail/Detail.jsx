import styles from "../../pages/Detail/Detail.module.css";
import { LocationInput, Title, PhotoShow } from "../../components/index";
import { useGeoLocation } from "../../hooks/useGeoLocation";
import { useReverseGeocoding } from "../../hooks/useReverseGeocoding";
import {
  HeartButton,
  PhotoUpload,
  ShareButton,
  DeleteButton,
} from "../../components/Button/Button";
import react, { useEffect, useState } from "react";
import LoadingPage from "../Loading/LoadingPage";
import getOnephoto from "../../apis/getOnephoto";

const Detail = () => {
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
        const res = await getOnephoto(1);
        console.log(res);
      };
      handleOnephoto();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={styles.Detailpage}>
      {address ? (
        <div className={styles.Detailcomponent}>
          <div className={styles.TitleInput}>
            <Title />
          </div>
          <div className={styles.PhotoUpload}>
            <PhotoShow />
          </div>
          <div className={styles.DetailButtons}>
            <HeartButton />
            <ShareButton />
            <DeleteButton />
          </div>
        </div>
      ) : (
        <LoadingPage title={"현재 위치를 파악중입니다."} />
      )}
    </div>
  );
};
export default Detail;
