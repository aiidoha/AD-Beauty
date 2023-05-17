import React, { useEffect, useState } from "react";
import cartIcon from "../../components/assets/cartIcon.png";
import { useFavs } from "../../contexts/FavoritesContextProvider";
import fullheart from "../../components/Product/assets/Vector-1.png";
import emptyheart from "../../components/Product/assets/Vector.png";
import "../BestSellers/BestSellers.css";
import "../../components/Product/ProductList/ProductList.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
function Favarites() {
  useEffect(() => {
    getFavs();
  }, []);

  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const {
    getFavs,
    favs,
    changeProductCount,
    deleteFavsProduct,
    checkProductInFavs,
    addProductToFavs,
  } = useFavs();
  React.useEffect(() => {
    getFavs();
  }, []);

  return (
    <>
      <Navbar />
      <div className="divider"></div>
      <div>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "1em",
            color: "#7f2549",
          }}
        >
          FAVORITES
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {favs?.products.map((elem) => (
            <div id="bestSellersContainer">
              <div id="favs" className="card">
                <div className="cardTop">
                  <img
                    style={{ height: "372px" }}
                    className="cardImg"
                    src={elem.item.image}
                    alt=""
                  />
                  <img className="cardHeart" alt="" />
                </div>
                <div className="cardBottom">
                  <div className="cardTitle">
                    <h4>{elem.item.title}</h4>
                    {/* <span></span> */}
                  </div>
                  <div>
                    <h3>${elem.item.price}</h3>
                    <img
                      src={cartIcon}
                      alt="aidai"
                      style={{ padding: "5px 13px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Favarites;
