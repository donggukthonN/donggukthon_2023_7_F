import React, { useState, useEffect } from "react";
import { LocationInput } from "../../components/index";
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

  return (
    <div className={styles.Deletepage}>
      {address ? (
        <div className={styles.Deletecomponen}>
          <div className={styles.LocationInput}>
            <LocationInput location={address} />
          </div>
          <div className={styles.PhotoDisplay}>
            <PhotoDisplay />
          </div>
          <div className={styles.DeleteButtons}>
            <HeartButton />
            <ShareButton />
            <PasswordCheck />
          </div>
        </div>
      ) : (
        <LoadingPage title={"현재 위치를 파악중입니다."} />
      )}
    </div>
  );
};

export default Delete;
