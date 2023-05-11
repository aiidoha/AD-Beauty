import React from "react";
import eye from "../assets/eye.png";
import "../Catalogue/Catalogue.css";
import lip from "../assets/lip.png";
import face from "../assets/face.png";
import Navbar from "../../components/Navbar/Navbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import faceBg from "../assets/faceBg.jpg";
import eyebg from "../assets/eyeBg.jpg";
import lipsBg from "../assets/lipsBg.jpg";
const Catalogue = () => {
  return (
    <>
      <Navbar />
      <div id="catalogueContainer">
        <h2>SHOP BY CATEGORY</h2>
        <div id="catalogueWhiteBg">
          <div id="categoryLeft" className="categoryEye">
            <img className="categoryTitle" src={eye} alt="" />
          </div>
          <div id="categoryRight">
            <div id="lipCont" className="categoryLip">
              <img className="categoryTitle" src={lip} alt="" />
            </div>
            <div id="faceCont" className="categoryFace">
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
    </>
  );
};

export default Catalogue;
