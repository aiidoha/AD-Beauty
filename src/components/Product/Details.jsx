import React, { useContext, useEffect, useState } from "react";
import modalImg from "./assets/bgModalImg.png";
import "./Details.css";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useParams } from "react-router-dom";

const Details = ({}) => {
  const { products, getProducts, getProductDetails, productDetails } =
    useProducts();

  const { id } = useParams();
  useEffect(() => {
    getProductDetails(id);
  }, []);

  const [commentText, setCommentText] = useState("");

  const { comments } = useProducts();

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
    console.log(event);
  };

  const handleAddComment = () => {
    setCommentText("");
  };

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
            <input
              type="text"
              value={commentText}
              onChange={handleCommentChange}
            />
            <button onClick={handleAddComment}>Add comment</button>
            {comments.map((comment, id) => (
              <div key={id}>{comment}</div>
            ))}
          </div>
        </div>
      </>
    </>
  );
};

export default Details;
