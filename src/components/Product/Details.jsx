import React, { useEffect } from "react";
import modalImg from "./assets/bgModalImg.png";
import "./Details.css";
import { useProducts } from "../../contexts/ProductContextProvider";
const Details = ({}) => {
  const { products, getProducts, getProductDetails, productDetails } =
    useProducts();

  const product = [...products];
  const id = () => {
    product.map((item) => item.id);
  };
  useEffect(() => {
    getProductDetails(id());
  }, []);

  return (
    <>
      {product.map((item) => (
        <div id="detailModal">
          <div id="detailLeft">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <button>{`ADD TO CART $${item.price}  `}</button>
          </div>
          <img src={item.image} id="detailRight" />
        </div>
      ))}
    </>
  );
};

export default Details;
