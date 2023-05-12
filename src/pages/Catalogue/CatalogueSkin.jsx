import React from "react";
import serum from "../assets/serum.png";
import "../Catalogue/CatalogueSkin.css";
import cream from "../assets/cream.png";
import cleanser from "../assets/cleanser.png";
import NavbarSkin from "../../components/Navbar/NavbarSkin";
import toner from "../assets/toner.png";
import essence from "../assets/essence.png";
const CatalogueSkin = () => {
  return (
    <>
      <NavbarSkin />
      <div id="catalogueContainer">
        <h2>SHOP BY CATEGORY</h2>
        <div id="catalogueWhiteBg">
          <div id="categoryLeft" className="categorySerum">
            <img className="categoryTitle" src={serum} alt="" />
          </div>
          <div id="categoryLeftToner" className="categoryToner">
            <img className="categoryTitle" src={toner} alt="" />
          </div>
          <div id="categoryRight">
            <div id="creamCont" className="categoryCream">
              <img className="categoryTitle" src={cream} alt="" />
            </div>
            <div id="cleanserCont" className="categoryCleanser">
              <img className="categoryTitle" src={cleanser} alt="" />
            </div>
            <div id="essenceCont" className="categoryEssence">
              <img className="categoryTitle" src={essence} alt="" />
            </div>
          </div>
        </div>
        <div id="adaptcatalogue">
          <div className="picSerum" style={{ marginBottom: "5%" }}>
            <img className="title" src={serum} alt="" />
          </div>

          <div className="picCream">
            <img className="title" src={cream} alt="" />
          </div>
          <div className="picCleanser">
            <img className="title" src={cleanser} alt="" />
          </div>
          <div className="picToner">
            <img className="title" src={toner} alt="" />
          </div>
          <div className="picEssence">
            <img className="title" src={essence} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogueSkin;
