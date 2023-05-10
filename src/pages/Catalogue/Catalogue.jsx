import React from "react";
import eye from "../assets/eye.png";
import "../Catalogue/Catalogue.css";
import lip from "../assets/lip.png";
import face from "../assets/face.png";
const Catalogue = () => {
  return (
    <div id="catalogueContainer">
      <h2>SHOP BY CATEGORY</h2>
      <div id="catalogueWhiteBg">
        <div id="categoryLeft" className="category">
          <img className="categoryTitle" src={eye} alt="" />
        </div>
        <div id="categoryRight">
          <div id="lipCont" className="category">
            <img className="categoryTitle" src={lip} alt="" />
          </div>
          <div id="faceCont" className="category">
            <img className="categoryTitle" src={face} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
