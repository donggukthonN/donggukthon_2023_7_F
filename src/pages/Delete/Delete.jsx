import { LocationInput } from "../../components/index";
import {
  HeartButton,
  PhotoUpload,
  ShareButton,
  PhotoDisplay
} from "../../components/Button/Button";
import { PasswordCheck } from "../../components/Input/Input";
import { useGeoLocation } from "../../hooks/useGeoLocation";

import styles from "../../pages/Delete/Delete.module.css";

const Delete = () => {
  const { loc } = useGeoLocation();

  return (
    <div className={styles.Deletepage}>
      <div className={styles.Deletecomponen}>
        <div className={styles.LocationInput}>
          <LocationInput
            location={
              loc
                ? `lat : ${loc.latitude} lng : ${loc.longitude}`
                : "현재 위치 로딩중"
            }
          />
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
    </div>
  );
};

export default Delete;
