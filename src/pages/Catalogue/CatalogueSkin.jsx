import React from "react";
import serum from "../assets/serum.png";
import "../Catalogue/CatalogueSkin.css";
import cream from "../assets/cream.png";
import cleanser from "../assets/cleanser.png";
import NavbarSkin from "../../components/Navbar/NavbarSkin";
import toner from "../assets/toner.png";
import essence from "../assets/essence.png";

import FooterSkin from "../../components/Footer/FooterSkin";
import { useNavigate } from "react-router-dom";
const CatalogueSkin = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavbarSkin />
      <div id="heightSkin">
        <div id="catalogueContainerSkin">
          <h2>SHOP BY CATEGORY</h2>
          <div id="catalogueWhiteBgSkin">
            <div
              onClick={() => navigate("/serum")}
              id="categoryLeftSkin"
              className="categorySerum"
            >
              <img className="categoryTitleSkin" src={serum} alt="" />
            </div>
            <div
              onClick={() => navigate("/toner")}
              id="categoryLeftToner"
              className="categoryToner"
            >
              <img className="categoryTitleSkin" src={toner} alt="" />
            </div>
            <div id="categoryRightSkin">
              <div
                onClick={() => navigate("/cream")}
                id="creamCont"
                className="categoryCream"
              >
                <img className="categoryTitleSkin" src={cream} alt="" />
              </div>
              <div
                onClick={() => navigate("/cleanser")}
                id="cleanserCont"
                className="categoryCleanser"
              >
                <img className="categoryTitleSkin" src={cleanser} alt="" />
              </div>
              <div
                onClick={() => navigate("/essence")}
                id="essenceCont"
                className="categoryEssence"
              >
                <img className="categoryTitleSkin" src={essence} alt="" />
              </div>
            </div>
          </div>
          <div id="adaptcatalogueSkin">
            <div className="picSerum">
              <img className="titleSkin" src={serum} alt="" />
            </div>

            <div className="picCream">
              <img className="titleSkin" src={cream} alt="" />
            </div>
            <div className="picCleanser">
              <img className="titleSkin" src={cleanser} alt="" />
            </div>
            <div className="picToner">
              <img className="titleSkin" src={toner} alt="" />
            </div>
            <div className="picEssence">
              <img className="titleSkin" src={essence} alt="" />
            </div>
          </div>{" "}
        </div>
        <FooterSkin />
      </div>
    </>
  );
};

export default CatalogueSkin;
