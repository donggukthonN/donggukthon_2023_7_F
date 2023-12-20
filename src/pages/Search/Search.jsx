import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";
import { SearchInput, Select } from "../../components/index";
import Photoframe from "../Home/Photoframe";
import photoSearch from "../../apis/photoSearch";

const Search = ({ initialSearchType = "TITLE", initialSearchValue = "example title" }) => {
  const [searchType, setSearchType] = useState(initialSearchType);
  const [searchValue, setSearchValue] = useState(initialSearchValue);
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearchInputChange = (value) => {
    setSearchValue(value);
  };

  const handleSelectChange = (selectedType) => {
    setSearchType(selectedType);
  };

  const getInfo = async () => {
    try {
      setLoading(true);
      const res = await photoSearch(searchType, searchValue);

      console.log('API 응답:', res); // 전체 응답을 로그로 출력

      if (res && res.data && Array.isArray(res.data.photoList)) {
        setImageData(res.data.photoList);
      } else {
        console.error('데이터 가져오기 오류: 예상하지 못한 응답 형식', res);
      }
    } catch (error) {
      console.error('데이터 가져오기 오류:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInfo();
  }, [searchType, searchValue]);

  return (
    <div className={styles.frame}>
      <SearchInput
        onSearchInputChange={handleSearchInputChange}
        onClick={getInfo}
        disabled={loading}
      />
      <hr />
      <Select title={"카테고리"} onSelectChange={handleSelectChange} />

      <div className={styles.displayContainer}>
        {loading && <p>Loading...</p>}
        {imageData &&
          imageData.map((data, index) => (
            <Photoframe
              key={index}
              image={data.imageUrl}
              likes={data.likeCount}
              title={data.title}
              username={data.username}
            />
          ))}
      </div>
    </div>
  );
};

export default Search;
