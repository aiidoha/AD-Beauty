import React from "react";
import emptyHeart from "../Product/assets/Vector.png";
import fullHeart from "../Product/assets/Vector-1.png";
import cardBg from "../Product/assets/cardBg.png";
import "../Product/ProductList/ProductList.css";
const AdminPanel = () => {
  return (
    <div id="productListContainer">
      <div id="productList">
        <div id="addBlock">
          <h2 id="addBlockH2">ALL</h2> <button id="add">ADD PRODUCT</button>
        </div>
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

export default AdminPanel;
