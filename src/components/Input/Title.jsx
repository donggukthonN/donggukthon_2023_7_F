import React from "react";
import styles from "./Title.module.css";

function Title({ title }) {
  return (
    <div className={styles.title}>
      <p>{title}</p>
    </div>
  );
}

export default Title;
