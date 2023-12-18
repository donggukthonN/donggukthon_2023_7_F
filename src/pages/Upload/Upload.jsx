import { LocationInput } from "../../components/index";
import { PhotoUpload, UploadButton } from "../../components/Button/Button";
import { Name, PasswordInput } from "../../components/Input/Input";

import styles from "../../pages/Upload/Upload.module.css";

const Upload = () => {
    return (
        <div className={styles.Uploadback}>
        <div className={styles.Uploadpage}>
            <div>
                <div className={styles.PhotoUpload}><LocationInput /></div>
                <div className={styles.PhotoUpload}><PhotoUpload /></div>
            </div>
            <div className={styles.UploadInput}> <Name /> <PasswordInput /> </div>
            <div className={styles.UploadButton}><UploadButton /></div>
        </div>
        </div>
    );
}

export default Upload;