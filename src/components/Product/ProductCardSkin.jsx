import React from "react";
import { useNavigate } from "react-router-dom";
import emptyHeart from "../Product/assets/Vector.png";
import fullHeart from "../Product/assets/Vector-1.png";
import cardBg from "../Product/assets/cardBg.png";
import cartIcon from "../assets/cartIcon.png";
import "../Product/ProductList/ProductListSkin.css";
import { useCart } from "../../contexts/CartContextProvider";
const ProductCardSkin = ({ item }) => {
  const { addProductToCart, checkProductInCart } = useCart();

  const navigate = useNavigate();
  return (
    <div className="listCardSkin">
      <div className="listCardTopSkin">
        <img
          className="listCardImgSkin"
          src={item.image}
          alt=""
          style={{ height: "372px" }}
        />
        <img className="listCardHeartSkin" src={emptyHeart} alt="" />
      </div>
      <div className="listCardBottomSkin">
        <div className="listCardTitleSkin">
          <h4>{item.title}</h4>
          {/* <span>type</span> */}
        </div>
        <div>
          <h3>${item.price}</h3>
          <img
            onClick={() => addProductToCart(item)}
            src={cartIcon}
            alt="aidai"
            style={{ padding: "5px 13px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkin;
