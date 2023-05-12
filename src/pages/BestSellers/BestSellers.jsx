import React, { useEffect } from "react";
import "../BestSellers/BestSellers.css";
import emptyHeart from "../assets/Vector.png";
import fullHeart from "../assets/Vector-1.png";
import cardBg from "../assets/cardBg.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import cartIcon from "../../components/assets/cartIcon.png";
import { useProducts } from "../../contexts/ProductContextProvider";
const BestSellers = ({}) => {
  const { products, getProducts } = useProducts();
  console.log(products);
  const product = [...products];
  function favs() {
    return product.filter((elem) => elem.category === "fav");
  }

  useEffect(() => {
    getProducts();
    favs();
  }, []);
  const favouriteProduct = favs();

  return (
    <>
      <Navbar />
      <div className="divider"></div>
      <div id="bestSellersContainer">
        <div id="bestSellers">
          <h2>BEST SELLERS</h2>
          <div id="bestSellersCards">
            {favouriteProduct.map((item) => (
              <div className="card">
                <div className="cardTop">
                  <img
                    style={{ height: "372px" }}
                    className="cardImg"
                    src={item.image}
                    alt=""
                  />
                  <img className="cardHeart" src={emptyHeart} alt="" />
                </div>
                <div className="cardBottom">
                  <div className="cardTitle">
                    <h4>{item.title}</h4>
                    {/* <span></span> */}
                  </div>
                  <div>
                    <h3>${item.price}</h3>
                    <img
                      src={cartIcon}
                      alt="aidai"
                      style={{ padding: "5px 13px" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BestSellers;
