import React from "react";
import "../BestSellers/BestSellers.css";
import emptyHeart from "../assets/Vector.png";
import fullHeart from "../assets/Vector-1.png";
import cardBg from "../assets/cardBg.png";
import Navbar from "../../components/Navbar/Navbar";
const BestSellers = () => {
  return (
    <>
      <Navbar />
      <div className="divider"></div>
      <div id="bestSellersContainer">
        <div id="bestSellers">
          <h2>BEST SELLERS</h2>
          <div id="bestSellersCards">
            <div className="card">
              <div className="cardTop">
                <img className="cardImg" src={cardBg} alt="" />
                <img className="cardHeart" src={emptyHeart} alt="" />
              </div>
              <div className="cardBottom">
                <div className="cardTitle">
                  <h4>Title</h4>
                  <span>type</span>
                </div>
                <h3>$$$$</h3>
              </div>
            </div>
            <div className="card">
              <div className="cardTop">
                <img className="cardImg" src={cardBg} alt="" />
                <img className="cardHeart" src={emptyHeart} alt="" />
              </div>
              <div className="cardBottom">
                <div className="cardTitle">
                  <h4>Title</h4>
                  <span>type</span>
                </div>
                <h3>$$$$</h3>
              </div>
            </div>
            <div className="card">
              <div className="cardTop">
                <img className="cardImg" src={cardBg} alt="" />
                <img className="cardHeart" src={emptyHeart} alt="" />
              </div>
              <div className="cardBottom">
                <div className="cardTitle">
                  <h4>Title</h4>
                  <span>type</span>
                </div>
                <h3>$$$$</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellers;
