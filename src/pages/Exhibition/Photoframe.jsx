import React from "react";
import styles from "./Photoframe.module.css";

function Photoframe({ data }) {
    return (
        <img src={data} alt="액자" className={styles.image} />
    );
}

export default Photoframe;
