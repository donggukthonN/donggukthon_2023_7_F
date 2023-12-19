import React, { useState, useEffect } from "react";
import styles from "./Title.module.css";

function Title() {
    const [title, setTitle] = useState(""); // 이름 상태를 관리하기 위한 state
  
    return (
      <div className={styles.title}><p>나의 작은 눈사람</p></div>
    );
  };

  export default Title;