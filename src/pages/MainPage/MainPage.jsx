import React from "react";
import logo from "../assets/ad_logo.png";
import decorMain from "../assets/decor.png";
import skincareMain from "../assets/skincare.png";
import "../MainPage/Main.css";
import { useNavigate } from "react-router-dom";
const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div id="cont" style={{ position: "relative" }}>
      <img id="mainLogo" src={logo} alt="" />
      <div id="MainPics">
        <img
          id="decorMain"
          src={decorMain}
          alt=""
          onClick={() => navigate(`/home`)}
        />
        <img
          id="skincareMain"
          src={skincareMain}
          alt=""
          onClick={() => navigate("/homeSkin")}
        />
      </div>
    </div>
  );
};

export default MainPage;
