import React from "react";
import styles from "./Input.module.css";
import { SEARCH_IMAGE } from "../../assets";

const SearchInput = ({onSearchInputChange, onClick}) => {
  const handleOnClick = () => {
    onClick()
  }
  const handleOnChange = (e) => {
    onSearchInputChange(e.target.value)
  }
  return (
    <div className={styles.SearchInputFrame}>
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.search}
          onChange={handleOnChange}
          placeholder={"작가, 제목, 위치"}
        />
        <button className={styles.searchButton} onClick={handleOnClick}>
          <img src={SEARCH_IMAGE} alt="" className={styles.searchImg} />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
