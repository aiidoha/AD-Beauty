import React from "react";
import emptyHeart from "../Product/assets/Vector.png";
import fullHeart from "../Product/assets/Vector-1.png";
import cardBg from "../Product/assets/cardBg.png";
import cartIcon from "../assets/cartIcon.png";
import "../Product/ProductList/ProductList.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContextProvider";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useAuth } from "../../contexts/AuthContextProvider";
import { ADMIN } from "../helpers/consts";
export default function ProductCard({ item }) {
  const { addProductToCart, checkProductInCart } = useCart();
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();
  const {
    user: { email },
  } = useAuth();
  return (
    <div id="admincardcont">
      <div
        onClick={() => navigate("/detailsModal")}
        id="cardAdmin"
        className="listCard"
      >
        <div className="listCardTop">
          <img
            className="listCardImg"
            src={item.image}
            style={{ height: "372px" }}
            alt=""
          />
          <img className="listCardHeart" src={emptyHeart} alt="" />
        </div>
        <div className="listCardBottom">
          <div className="listCardTitle">
            <h4>{item.title}</h4>
            {/* <span>type</span> */}
          </div>
          <div>
            <h3>${item.price}</h3>
            <img src={cartIcon} alt="aidai" style={{ padding: "5px 13px" }} />
          </div>
        </div>
      </div>
      {email === ADMIN ? (
        <div className="adminBtns">
          <button
            onClick={() => navigate(`/edit/${item.id}`)}
            className="editdelete"
          >
            EDIT
          </button>
          <button onClick={() => deleteProduct(item.id)} className="editdelete">
            DELETE
          </button>
        </div>
      ) : null}
    </div>
  );
}
