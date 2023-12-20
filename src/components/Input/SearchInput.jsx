import React from "react";
import styles from "./Input.module.css";
import { SEARCH_IMAGE } from "../../assets";

// SearchInput 컴포넌트에서 onClick 처리 부분 수정
const SearchInput = ({ onSearchInputChange, onClick }) => {
  const handleOnClick = () => {
    onClick(); // 여기서 onClick을 직접 호출
  };

  const handleOnChange = (e) => {
    onSearchInputChange(e.target.value);
  };

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
