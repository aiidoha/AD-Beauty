import React from "react";
import { useNavigate } from "react-router-dom";
import emptyHeart from "../Product/assets/Vector.png";
import fullHeart from "../Product/assets/Vector-1.png";
import cardBg from "../Product/assets/cardBg.png";
import cartIcon from "../assets/cartIcon.png";
import "../Product/ProductList/ProductListSkin.css";
import { useCart } from "../../contexts/CartContextProvider";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useAuth } from "../../contexts/AuthContextProvider";
import { ADMIN } from "../helpers/consts";
const ProductCardSkin = ({ item, id }) => {
  const { addProductToCart, checkProductInCart } = useCart();
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();
  const {
    user: { email },
  } = useAuth();
  return (
    <div id="skinadmincardcont">
      <div
        onClick={() => navigate(`/detailsModal/${id}`)}
        id="skinCardAdmin"
        className="listCardSkin"
      >
        <div className="listCardTopSkin">
          <img
            className="listCardImgSkin"
            style={{ height: "372px" }}
            src={item.image}
            alt=""
          />
          <img className="listCardHeartSkin" src={emptyHeart} alt="" />
        </div>
        <div className="listCardBottomSkin">
          <div className="listCardTitleSkin">
            <h4>{item.title}</h4>
            {/* <span>type</span> */}
          </div>
          <div>
            <h3>{item.price}</h3>{" "}
            <img src={cartIcon} alt="aidai" style={{ padding: "5px 13px" }} />
          </div>
        </div>
      </div>
      {email === ADMIN ? (
        <div className="adminBtnsSkin">
          <button
            onClick={() => navigate(`/editSkin/${item.id}`)}
            className="editdeleteSkin"
          >
            EDIT
          </button>
          <button
            onClick={() => deleteProduct(item.id)}
            className="editdeleteSkin"
          >
            DELETE
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ProductCardSkin;
