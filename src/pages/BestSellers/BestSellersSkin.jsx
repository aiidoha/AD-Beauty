import React, { useEffect } from "react";
import "../BestSellers/BestSellersSkin.css";
import emptyHeart from "../assets/Vector.png";
import fullHeart from "../assets/Vector-1.png";
import cardBg from "../assets/cardBg.png";
import cartIcon from "../../components/assets/cartIcon.png";
import NavbarSkin from "../../components/Navbar/NavbarSkin";
import FooterSkin from "../../components/Footer/FooterSkin";
import { useProducts } from "../../contexts/ProductContextProvider";
const BestSellersSkin = () => {
  const { products, getProducts } = useProducts();
  console.log(products);
  const product = [...products];
  function skinFavs() {
    return product.filter((elem) => elem.category === "skinFav");
  }

  useEffect(() => {
    getProducts();
    skinFavs();
  }, []);
  const favouriteSkinProduct = skinFavs();

  return (
    <>
      <NavbarSkin />
      <div className="divider"></div>
      <div id="bestSellersContainerSkin">
        <div id="bestSellersSkin">
          <h2>BEST SELLERS</h2>
          <div id="bestSellersCardsSkin">
            {favouriteSkinProduct.map((item) => (
              <div className="cardSkin">
                <div className="cardTopSkin">
                  <img
                    className="cardImgSkin"
                    style={{ height: "372px" }}
                    src={item.image}
                    alt=""
                  />
                  <img className="cardHeartSkin" src={emptyHeart} alt="" />
                </div>
                <div className="cardBottomSkin">
                  <div className="cardTitleSkin">
                    <h4>{item.title}</h4>
                    {/* <span>type</span> */}
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
      <FooterSkin />
    </>
  );
};

export default BestSellersSkin;
