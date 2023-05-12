import React from "react";
import emptyHeart from "../Product/assets/Vector.png";
import fullHeart from "../Product/assets/Vector-1.png";
import cardBg from "../Product/assets/cardBg.png";
import "../Product/ProductList/ProductList.css";
import cartIcon from "../assets/cartIcon.png";
import NavbarSkin from "../Navbar/NavbarSkin";
import FooterSkin from "../Footer/FooterSkin";
const AdminPanelSkin = () => {
  return (
    <>
      <NavbarSkin />

      <div id="prodcont">
        <div id="productListContainerSkin">
          <div id="productListSkin">
            <div id="addBlockSkin">
              <h2 className="addBlockH2Skin">ALL</h2>{" "}
              <button id="add">ADD PRODUCT</button>
            </div>
            <div id="productListCardsSkin">
              {/*  */}
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
                <div className="adminBtnsSkin">
                  <button className="editdeleteSkin">EDIT</button>
                  <button className="editdeleteSkin">DELETE</button>
                </div>
              </div>
              {/*  */}
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

export default AdminPanelSkin;
