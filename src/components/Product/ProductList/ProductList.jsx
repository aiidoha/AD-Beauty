import React from "react";
import emptyHeart from "../assets/Vector.png";
import fullHeart from "../assets/Vector-1.png";
import cardBg from "../assets/cardBg.png";
import "../ProductList/ProductList.css";
import cartIcon from "../../assets/cartIcon.png";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const ProductList = () => {
  return (
    <>
      <Navbar />
      <div id="all" className="divider"></div>
      <div id="prodcont">
        <div id="productListContainer">
          <div id="productList">
            <h2 className="addBlockH2">ALL</h2>
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
                  <div>
                    <h3>$$$$</h3>{" "}
                    <img
                      src={cartIcon}
                      alt="aidai"
                      style={{ padding: "5px 13px" }}
                    />
                  </div>
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
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
