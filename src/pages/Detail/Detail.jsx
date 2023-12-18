import styles from "../../pages/Detail/Detail.module.css";
import { LocationInput } from "../../components/index";
import { useGeoLocation } from "../../hooks/useGeoLocation";
import { useReverseGeocoding } from "../../hooks/useReverseGeocoding";
import {
  HeartButton,
  PhotoUpload,
  ShareButton,
  DeleteButton,
} from "../../components/Button/Button";
import { useEffect, useState } from "react";

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

  return (
    <div className={styles.Detailpage}>
      <div className={styles.Detailcomponent}>
        <div className={styles.LocationInput}>
          <LocationInput location={address ? address : "현재 위치 로딩중"} />
        </div>
        <div className={styles.PhotoUpload}>
          <PhotoUpload />
        </div>
        <div className={styles.DetailButtons}>
          <HeartButton />
          <ShareButton />
          <DeleteButton />
        </div>
      </div>
    </div>
  );
};
export default Detail;
