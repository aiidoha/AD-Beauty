import React from "react";
import "../pages/Main.css";
import mainImgLeft from "../assets/image 5.png";
import mainImgRight from "../assets/image 8.png";
import adLogo from "../assets/ad_logo.png";
const MainPage = () => {
  return (
    <div className="mainPage">
      <div className="mainLeft">
        <img className="mainImg" src={mainImgLeft} alt="" />
      </div>
      <div className="mainRight">
        <img className="mainImg" src={mainImgRight} alt="" />
      </div>
    </div>
  );
};

export default MainPage;
