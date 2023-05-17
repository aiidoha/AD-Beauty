import React, { useEffect } from "react";
import modalImg from "./assets/bgModalImg.png";
import "./Details.css";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useParams } from "react-router-dom";
const Details = ({}) => {
  const { products, getProducts, getProductDetails, productDetails } =
    useProducts();

  const product = [...products];
  // const id = () => {
  //   product.map((item) => item.id);
  // };
  const { id } = useParams();
  useEffect(() => {
    getProductDetails(id);
  }, []);

  return (
    <>
      <>
        <div id="detailModal">
          <div id="detailLeft">
            <h4>{productDetails.title}</h4>
            <p>{productDetails.description}</p>
            <button>{`ADD TO CART $${productDetails.price}  `}</button>
          </div>
          <img src={productDetails.image} id="detailRight" />
          <div id="commentsDetail">
            <h3>Comments</h3>
            <input type="text" />
            <button>Add comment</button>
          </div>
        </div>
      </>
    </>
  );
};

export default Details;
