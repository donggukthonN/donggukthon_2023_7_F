import React, { useState } from "react";
import styles from "./select.module.css";

const Select = ({ title }) => {
  const [searchType, setSearchType] = useState("author");

  const handleRadioChange = (event) => {
    setSearchType(event.target.id);
  };
  return (
    <div className={styles.frame}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.radioBox}>
        <label htmlFor={"author"}>
          <input
            type="radio"
            id={"WRITER"}
            name={"search"}
            checked={searchType === "WRITER"}
            onChange={handleRadioChange}
          />
          작가 이름
        </label>
        <label htmlFor={"title"}>
          <input
            type="radio"
            id={"TITLE"}
            name={"search"}
            checked={searchType === "TITLE"}
            onChange={handleRadioChange}
          />
          작품 제목
        </label>

        <label htmlFor={"location"}>
          <input
            type="radio"
            id={"LOCATION"}
            name={"search"}
            checked={searchType === "LOCATION"}
            onChange={handleRadioChange}
          />
          위치
        </label>
      </div>
    </div>
  );
};

export default Select;
