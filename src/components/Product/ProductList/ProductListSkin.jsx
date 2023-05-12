import React from "react";
import emptyHeart from "../assets/Vector.png";
import fullHeart from "../assets/Vector-1.png";
import cardBg from "../assets/cardBg.png";
import "../ProductList/ProductListSkin.css";
import cartIcon from "../../assets/cartIcon.png";

import NavbarSkin from "../../Navbar/NavbarSkin";
import FooterSkin from "../../Footer/FooterSkin";

const ProductListSkin = () => {
  return (
    <>
      <NavbarSkin />
      <div id="all" className="divider"></div>
      <div id="prodcontSkin">
        <div id="productListContainerSkin">
          <div id="productListSkin">
            <h2 className="addBlockH2Skin">ALL</h2>
            <div id="productListCardsSkin">
              <div className="listCardSkin">
                <div className="listCardTopSkin">
                  <img className="listCardImgSkin" src={cardBg} alt="" />
                  <img className="listCardHeartSkin" src={emptyHeart} alt="" />
                </div>
                <div className="listCardBottomSkin">
                  <div className="listCardTitleSkin">
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
              <div className="listCardSkin">
                <div className="listCardTopSkin">
                  <img className="listCardImgSkin" src={cardBg} alt="" />
                  <img className="listCardHeartSkin" src={emptyHeart} alt="" />
                </div>
                <div className="listCardBottomSkin">
                  <div className="listCardTitleSkin">
                    <h4>Title</h4>
                    <span>type</span>
                  </div>
                  <h3>$$$$</h3>
                </div>
              </div>
              <div className="listCardSkin">
                <div className="listCardTopSkin">
                  <img className="listCardImgSkin" src={cardBg} alt="" />
                  <img className="listCardHeartSkin" src={emptyHeart} alt="" />
                </div>
                <div className="listCardBottomSkin">
                  <div className="listCardTitleSkin">
                    <h4>Title</h4>
                    <span>type</span>
                  </div>
                  <h3>$$$$</h3>
                </div>
              </div>
              <div className="listCardSkin">
                <div className="listCardTopSkin">
                  <img className="listCardImgSkin" src={cardBg} alt="" />
                  <img className="listCardHeartSkin" src={emptyHeart} alt="" />
                </div>
                <div className="listCardBottomSkin">
                  <div className="listCardTitleSkin">
                    <h4>Title</h4>
                    <span>type</span>
                  </div>
                  <h3>$$$$</h3>
                </div>
              </div>
              <div className="listCardSkin">
                <div className="listCardTopSkin">
                  <img className="listCardImgSkin" src={cardBg} alt="" />
                  <img className="listCardHeartSkin" src={emptyHeart} alt="" />
                </div>
                <div className="listCardBottomSkin">
                  <div className="listCardTitleSkin">
                    <h4>Title</h4>
                    <span>type</span>
                  </div>
                  <h3>$$$$</h3>
                </div>
              </div>
              <div className="listCardSkin">
                <div className="listCardTopSkin">
                  <img className="listCardImgSkin" src={cardBg} alt="" />
                  <img className="listCardHeartSkin" src={emptyHeart} alt="" />
                </div>
                <div className="listCardBottomSkin">
                  <div className="listCardTitleSkin">
                    <h4>Title</h4>
                    <span>type</span>
                  </div>
                  <h3>$$$$</h3>
                </div>
              </div>
              <div className="listCardSkin">
                <div className="listCardTopSkin">
                  <img className="listCardImgSkin" src={cardBg} alt="" />
                  <img className="listCardHeartSkin" src={emptyHeart} alt="" />
                </div>
                <div className="listCardBottomSkin">
                  <div className="listCardTitleSkin">
                    <h4>Title</h4>
                    <span>type</span>
                  </div>
                  <h3>$$$$</h3>
                </div>
              </div>
              <div className="listCardSkin">
                <div className="listCardTopSkin">
                  <img className="listCardImgSkin" src={cardBg} alt="" />
                  <img className="listCardHeartSkin" src={emptyHeart} alt="" />
                </div>
                <div className="listCardBottomSkin">
                  <div className="listCardTitleSkin">
                    <h4>Title</h4>
                    <span>type</span>
                  </div>
                  <h3>$$$$</h3>
                </div>
              </div>
              <div className="listCardSkin">
                <div className="listCardTopSkin">
                  <img className="listCardImgSkin" src={cardBg} alt="" />
                  <img className="listCardHeartSkin" src={emptyHeart} alt="" />
                </div>
                <div className="listCardBottomSkin">
                  <div className="listCardTitleSkin">
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
      <FooterSkin />
    </>
  );
};

export default ProductListSkin;
