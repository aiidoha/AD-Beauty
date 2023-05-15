import React, { useEffect } from "react";
import emptyHeart from "../assets/Vector.png";
import fullHeart from "../assets/Vector-1.png";
import cardBg from "../assets/cardBg.png";
import "../ProductList/ProductList.css";
import cartIcon from "../../assets/cartIcon.png";
import Navbar from "../../Navbar/Navbar";
import { useProducts } from "../../../contexts/ProductContextProvider";
import ProductCard from "../ProductCard";
import Footer from "../../Footer/Footer";

const ProductList = () => {
  const { products, getProducts, notskin } = useProducts();
  console.log(products);
  // const product = [...products];

  useEffect(() => {
    getProducts();
    notskin();
  }, []);
  const skinProducts = notskin();

  return (
    <>
      <Navbar />
      <div className="divider"></div>
      <div id="prodcont">
        <div id="productListContainer">
          <div id="productList">
            <h2 id="all" className="addBlockH2">
              ALL
            </h2>
            <div id="productListCards">
              {skinProducts.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
