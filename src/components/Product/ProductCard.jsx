import React from "react";
import emptyHeart from "../Product/assets/Vector.png";
import fullHeart from "../Product/assets/Vector-1.png";
import cardBg from "../Product/assets/cardBg.png";
import cartIcon from "../assets/cartIcon.png";
import "../Product/ProductList/ProductList.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContextProvider";
export default function ProductCard({ item }) {
  const { addProductToCart, checkProductInCart } = useCart();
  const navigate = useNavigate();
  return (
    <div className="listCard">
      <div className="listCardTop">
        <img
          className="listCardImg"
          style={{ height: "372px" }}
          src={item.image}
          alt=""
        />
        <img className="listCardHeart" src={emptyHeart} alt="" />
      </div>
      <div className="listCardBottom">
        <div className="listCardTitle">
          <h4>{item.title}</h4>
          {/* <span>{item.type}</span> */}
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
}
