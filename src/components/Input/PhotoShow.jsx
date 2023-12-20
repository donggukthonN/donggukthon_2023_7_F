import React from "react";
import styles from "./PhotoShow.module.css";
import { woodframephoto } from "../../assets";

function PhotoShow() {
    return (
        <>
            <div>
                <div className={styles.PhotoShow}><img src={woodframephoto} alt="first" className={styles.PhotoShow} /></div>
            </div>
        </>
    );
}

export default PhotoShow;