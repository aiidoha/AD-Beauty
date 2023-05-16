import React, { useState, useRef } from "react";
import logo from "../assets/ad_logo.png";
import decorMain from "../assets/decor.png";
import skincareMain from "../assets/skincare.png";
import "../MainPage/Main.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import videodecor from "../MainPage/decorMain.mp4";
import skinMain from "../MainPage/skinMainMob.mp4";

const MainPage = () => {
  const navigate = useNavigate();
  const decorVideoRef = useRef(null);
  const skinVideoRef = useRef(null);
  const [isDecorPlaying, setIsDecorPlaying] = useState(false);
  const [isSkinPlaying, setIsSkinPlaying] = useState(false);

  const handleDecorMouseEnter = () => {
    if (decorVideoRef.current) {
      decorVideoRef.current.play();
      setIsDecorPlaying(true);
    }
  };

  const handleDecorMouseLeave = () => {
    if (decorVideoRef.current) {
      decorVideoRef.current.pause();
      setIsDecorPlaying(false);
    }
  };

  const handleSkinMouseEnter = () => {
    if (skinVideoRef.current) {
      skinVideoRef.current.play();
      setIsSkinPlaying(true);
    }
  };

  const handleSkinMouseLeave = () => {
    if (skinVideoRef.current) {
      skinVideoRef.current.pause();
      setIsSkinPlaying(false);
    }
  };

  return (
    <div id="cont" style={{ position: "relative" }}>
      <img id="mainLogo" src={logo} alt="" />
      <div id="MainPics">
        <div id="decorVid">
          <video
            id="decorMain"
            ref={decorVideoRef}
            onMouseEnter={handleDecorMouseEnter}
            onMouseLeave={handleDecorMouseLeave}
            onClick={() => navigate(`/home`)}
            muted
            autoPlay={isDecorPlaying}
          >
            <source src={videodecor} type="video/mp4" />
          </video>
        </div>
        <div id="skinVid">
          <video
            id="skincareMain"
            ref={skinVideoRef}
            onMouseEnter={handleSkinMouseEnter}
            onMouseLeave={handleSkinMouseLeave}
            onClick={() => navigate(`/homeSkin`)}
            muted
            autoPlay={isSkinPlaying}
          >
            <source src={skinMain} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
