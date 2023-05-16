import React, { useEffect } from "react";
import emptyHeart from "../Product/assets/Vector.png";
import fullHeart from "../Product/assets/Vector-1.png";
import cardBg from "../Product/assets/cardBg.png";
import "../Product/ProductList/ProductList.css";
import cartIcon from "../assets/cartIcon.png";

import FooterSkin from "../Footer/FooterSkin";
import { useProducts } from "../../contexts/ProductContextProvider";
import NavbarSkin from "../Navbar/NavbarSkin";
import { useNavigate } from "react-router-dom";
const AdminPanelSkin = () => {
  const { skin, getProducts } = useProducts();
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
    skin();
  }, []);
  const skinProducts = skin();

  return (
    <>
      <div className="divider"></div>
      <NavbarSkin />
      <NavbarSkin />

      <div id="prodcont">
        <div id="productListContainerSkin">
          <div id="productListSkin">
            <div id="addBlockSkin">
              <h2 className="addBlockH2Skin">ALL</h2>{" "}
              <button onClick={() => navigate("/addSkin")} id="add">
                ADD PRODUCT
              </button>
            </div>
            <div id="productListCardsSkin">
              {/*  */}
              {skinProducts.map((item) => (
                <div id="skinadmincardcont">
                  <div id="skinCardAdmin" className="listCardSkin">
                    <div className="listCardTopSkin">
                      <img
                        className="listCardImgSkin"
                        src={item.image}
                        alt=""
                      />
                      <img
                        className="listCardHeartSkin"
                        src={emptyHeart}
                        alt=""
                      />
                    </div>
                    <div className="listCardBottomSkin">
                      <div className="listCardTitleSkin">
                        <h4>{item.title}</h4>
                        {/* <span>type</span> */}
                      </div>
                      <div>
                        <h3>item.price</h3>{" "}
                        <img
                          src={cartIcon}
                          alt="aidai"
                          style={{ padding: "5px 13px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="adminBtnsSkin">
                    <button className="editdeleteSkin">EDIT</button>
                    <button className="editdeleteSkin">DELETE</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterSkin />
    </>
  );
};

export default AdminPanelSkin;
