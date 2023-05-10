import React from "react";
import emptyHeart from "../assets/Vector.png";
import fullHeart from "../assets/Vector-1.png";
import cardBg from "../assets/cardBg.png";
import "../ProductList/ProductList.css";
const ProductList = () => {
  return (
    <div id="productListContainer">
      <div id="productList">
        <h2>ALL</h2>
        <div id="productListCards">
          <div className="listCard">
            <div className="listCardTop">
              <img className="listCardImg" src={cardBg} alt="" />
              <img className="listCardHeart" src={emptyHeart} alt="" />
            </div>
            <div className="listCardBottom">
              <div className="listCardTitle">
                <h4>Title</h4>
                <span>type</span>
              </div>
              <h3>$$$$</h3>
            </div>
          </div>
          <div className="listCard">
            <div className="listCardTop">
              <img className="listCardImg" src={cardBg} alt="" />
              <img className="listCardHeart" src={emptyHeart} alt="" />
            </div>
            <div className="listCardBottom">
              <div className="listCardTitle">
                <h4>Title</h4>
                <span>type</span>
              </div>
              <h3>$$$$</h3>
            </div>
          </div>
          <div className="listCard">
            <div className="listCardTop">
              <img className="listCardImg" src={cardBg} alt="" />
              <img className="listCardHeart" src={emptyHeart} alt="" />
            </div>
            <div className="listCardBottom">
              <div className="listCardTitle">
                <h4>Title</h4>
                <span>type</span>
              </div>
              <h3>$$$$</h3>
            </div>
          </div>
          <div className="listCard">
            <div className="listCardTop">
              <img className="listCardImg" src={cardBg} alt="" />
              <img className="listCardHeart" src={emptyHeart} alt="" />
            </div>
            <div className="listCardBottom">
              <div className="listCardTitle">
                <h4>Title</h4>
                <span>type</span>
              </div>
              <h3>$$$$</h3>
            </div>
          </div>
          <div className="listCard">
            <div className="listCardTop">
              <img className="listCardImg" src={cardBg} alt="" />
              <img className="listCardHeart" src={emptyHeart} alt="" />
            </div>
            <div className="listCardBottom">
              <div className="listCardTitle">
                <h4>Title</h4>
                <span>type</span>
              </div>
              <h3>$$$$</h3>
            </div>
          </div>
          <div className="listCard">
            <div className="listCardTop">
              <img className="listCardImg" src={cardBg} alt="" />
              <img className="listCardHeart" src={emptyHeart} alt="" />
            </div>
            <div className="listCardBottom">
              <div className="listCardTitle">
                <h4>Title</h4>
                <span>type</span>
              </div>
              <h3>$$$$</h3>
            </div>
          </div>
          <div className="listCard">
            <div className="listCardTop">
              <img className="listCardImg" src={cardBg} alt="" />
              <img className="listCardHeart" src={emptyHeart} alt="" />
            </div>
            <div className="listCardBottom">
              <div className="listCardTitle">
                <h4>Title</h4>
                <span>type</span>
              </div>
              <h3>$$$$</h3>
            </div>
          </div>
          <div className="listCard">
            <div className="listCardTop">
              <img className="listCardImg" src={cardBg} alt="" />
              <img className="listCardHeart" src={emptyHeart} alt="" />
            </div>
            <div className="listCardBottom">
              <div className="listCardTitle">
                <h4>Title</h4>
                <span>type</span>
              </div>
              <h3>$$$$</h3>
            </div>
          </div>
          <div className="listCard">
            <div className="listCardTop">
              <img className="listCardImg" src={cardBg} alt="" />
              <img className="listCardHeart" src={emptyHeart} alt="" />
            </div>
            <div className="listCardBottom">
              <div className="listCardTitle">
                <h4>Title</h4>
                <span>type</span>
              </div>
              <h3>$$$$</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
