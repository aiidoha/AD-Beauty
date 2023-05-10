import React from "react";
import logo from "../assets/ad_logo.png";
import decorMain from "../assets/decor.png";
import skincareMain from "../assets/skincare.png";
import "../MainPage/Main.css";
const MainPage = () => {
  return (
    <div style={{ position: "relative" }}>
      <img id="mainLogo" src={logo} alt="" />
      <div id="MainPics">
        <img id="decorMain" src={decorMain} alt="" />
        <img id="skincareMain" src={skincareMain} alt="" />
      </div>
    </div>
  );
};

export default MainPage;
