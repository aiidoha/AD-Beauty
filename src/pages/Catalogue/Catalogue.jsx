import React from "react";
import eye from "../assets/eye.png";
import "../Catalogue/Catalogue.css";
import lip from "../assets/lip.png";
import face from "../assets/face.png";
import Navbar from "../../components/Navbar/Navbar";

import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
const Catalogue = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="divider"></div>
      <div id="catalogueContainer">
        <h2>SHOP BY CATEGORY</h2>
        <div id="catalogueWhiteBg">
          <div
            onClick={() => navigate("/eye")}
            id="categoryLeft"
            className="categoryEye"
          >
            <img className="categoryTitle" src={eye} alt="" />
          </div>
          <div id="categoryRight">
            <div
              onClick={() => navigate("/lip")}
              id="lipCont"
              className="categoryLip"
            >
              <img className="categoryTitle" src={lip} alt="" />
            </div>
            <div
              onClick={() => navigate("/face")}
              id="faceCont"
              className="categoryFace"
            >
              <img className="categoryTitle" src={face} alt="" />
            </div>
          </div>
        </div>
        <div id="adaptcatalogue">
          <div className="picEye">
            <img className="title" src={eye} alt="" />
          </div>

          <div className="picLip">
            <img className="title" src={lip} alt="" />
          </div>
          <div className="picFace">
            <img className="title" src={face} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Catalogue;
