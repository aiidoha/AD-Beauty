import React from "react";
import "../BestSellers/BestSellersSkin.css";
import emptyHeart from "../assets/Vector.png";
import fullHeart from "../assets/Vector-1.png";
import cardBg from "../assets/cardBg.png";

import NavbarSkin from "../../components/Navbar/NavbarSkin";
import FooterSkin from "../../components/Footer/FooterSkin";
const BestSellersSkin = () => {
  return (
    <>
      <NavbarSkin />
      <div className="divider"></div>
      <div id="bestSellersContainerSkin">
        <div id="bestSellersSkin">
          <h2>BEST SELLERS</h2>
          <div id="bestSellersCardsSkin">
            <div className="cardSkin">
              <div className="cardTopSkin">
                <img className="cardImgSkin" src={cardBg} alt="" />
                <img className="cardHeartSkin" src={emptyHeart} alt="" />
              </div>
              <div className="cardBottomSkin">
                <div className="cardTitleSkin">
                  <h4>Title</h4>
                  <span>type</span>
                </div>
                <h3>$$$$</h3>
              </div>
            </div>
           <div className="cardSkin">
              <div className="cardTopSkin">
                <img className="cardImgSkin" src={cardBg} alt="" />
                <img className="cardHeartSkin" src={emptyHeart} alt="" />
              </div>
              <div className="cardBottomSkin">
                <div className="cardTitleSkin">
                  <h4>Title</h4>
                  <span>type</span>
                </div>
                <h3>$$$$</h3>
              </div>
            </div>
             <div className="cardSkin">
              <div className="cardTopSkin">
                <img className="cardImgSkin" src={cardBg} alt="" />
                <img className="cardHeartSkin" src={emptyHeart} alt="" />
              </div>
              <div className="cardBottomSkin">
                <div className="cardTitleSkin">
                  <h4>Title</h4>
                  <span>type</span>
                </div>
                <h3>$$$$</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSkin />
    </>
  );
};

export default BestSellersSkin;
