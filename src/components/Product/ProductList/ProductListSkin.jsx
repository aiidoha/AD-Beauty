import React, { useEffect } from "react";
import emptyHeart from "../assets/Vector.png";
import fullHeart from "../assets/Vector-1.png";
import cardBg from "../assets/cardBg.png";
import "../ProductList/ProductListSkin.css";
import cartIcon from "../../assets/cartIcon.png";

import NavbarSkin from "../../Navbar/NavbarSkin";
import FooterSkin from "../../Footer/FooterSkin";
import ProductCardSkin from "../ProductCardSkin";
import { useProducts } from "../../../contexts/ProductContextProvider";

const ProductListSkin = () => {
  const { skin, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
    skin();
  }, []);
  const skinProducts = skin();

  return (
    <>
      <NavbarSkin />
      <div className="divider"></div>
      <div id="prodcontSkin">
        <div id="productListContainerSkin">
          <div id="productListSkin">
            <h2 id="all" className="addBlockH2Skin">
              ALL
            </h2>
            <div id="productListCardsSkin">
              {skinProducts.map((item) => (
                <ProductCardSkin key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterSkin />
    </>
  );
};

export default ProductListSkin;
