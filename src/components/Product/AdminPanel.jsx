import React, { useEffect } from "react";
import emptyHeart from "../Product/assets/Vector.png";
import fullHeart from "../Product/assets/Vector-1.png";
import cardBg from "../Product/assets/cardBg.png";
import "../Product/ProductList/ProductList.css";
import cartIcon from "../assets/cartIcon.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useProducts } from "../../contexts/ProductContextProvider";
import { Link, useNavigate } from "react-router-dom";
const AdminPanel = () => {
  const navigate = useNavigate();
  const { getProducts, notskin, deleteProduct } = useProducts();

  useEffect(() => {
    getProducts();
    notskin();
  }, []);
  const products = notskin();
  console.log(products);
  return (
    <>
      <div className="divider"></div>
      <Navbar />
      <div id="prodcont">
        <div id="productListContainer">
          <div id="productList">
            <div id="addBlock">
              <h2 className="addBlockH2">ALL</h2>{" "}
              <Link id="add" to="/add">
                <button>ADD PRODUCT</button>
              </Link>
            </div>
            <div id="productListCards">
              {/*  */}
              {products.map((item) => (
                <div id="admincardcont">
                  <div id="cardAdmin" className="listCard">
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
                        <img
                          src={cartIcon}
                          alt="aidai"
                          style={{ padding: "5px 13px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="adminBtns">
                    <button
                      onClick={() => navigate(`/edit/${item.id}`)}
                      className="editdelete"
                    >
                      EDIT
                    </button>
                    <button
                      onClick={() => deleteProduct(item.id)}
                      className="editdelete"
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              ))}
              ;{/*  */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminPanel;
