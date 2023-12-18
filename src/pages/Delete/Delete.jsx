import { LocationInput } from "../../components/index";
import { HeartButton, PhotoUpload, ShareButton} from "../../components/Button/Button";
import { PasswordCheck } from "../../components/Input/Input";

import styles from "../../pages/Delete/Delete.module.css"

const Delete = () => {
    return (
        <div className={styles.Detailpage}>
        <div className={styles.Detailcomponent}>
            <div className={styles.LocationInput}><LocationInput location={"서울특별시 중구"} /></div>
            <div className={styles.PhotoUpload}><PhotoUpload /></div>
            <div className={styles.DetailButtons}>
                    <HeartButton />
                    <ShareButton />
                    <PasswordCheck />
            </div>
        </div>
        </div>
    );
};

export default Delete;