import React from "react";
import "./Init.css";
import { LOGO, SNOWMAN_IMAGE } from "../../assets";

const Init = () => {
  return (
    <div className="back">
      <div className="title">
        <img src={LOGO} alt="snowManHouse" className="logo" />
      </div>
      <img src={SNOWMAN_IMAGE} alt="snowMan" className="snowMan" />
    </div>
  );
};

export default Init;
