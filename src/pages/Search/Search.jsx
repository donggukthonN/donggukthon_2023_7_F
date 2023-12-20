import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";
import { SearchInput, Select } from "../../components/index";
import Photoframe from "../Home/Photoframe";
import photoSearch from "../../apis/photoSearch";
import { FRAME_DATA } from "../../assets";
import Photoframe from "../Home/Photoframe";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState("TITLE");
  const [searchValue, setSearchValue] = useState("");
  const [imageData, setImageData] = useState(null);

  const handleSearchInputChange = (value) => {
    setSearchValue(value);
  };

  const handleSelectChange = (selectedType) => {
    setSearchType(selectedType);
  };

  const moveDetail = (photoID) => {
    navigate(`/detail/${photoID}`);
  };

  const getInfo = async () => {
    if (searchType && searchValue) {
      const res = await photoSearch(searchType, searchValue);
      console.log(res);
      setImageData(res);
    }
  };

  return (
    <div className={styles.frame}>
      <SearchInput
        onSearchInputChange={handleSearchInputChange}
        onClick={getInfo}
      />
      <hr />
      <Select title={"카테고리"} onSelectChange={handleSelectChange} />
      <div className={styles.displayContainer}>
        {imageData &&
          imageData.map((data, index) => (
            <Photoframe
              // key={index}
              data={FRAME_DATA[0]}
              image={data.imageUrl}
              likes={data.likeCount}
              photoID={data.id}
              moveDetail={moveDetail}
            />
          ))}
      </div>
    </div>
  );
};

export default Search;
