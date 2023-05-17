import React, { useContext, useEffect, useState } from "react";
import modalImg from "./assets/bgModalImg.png";
import "./Details.css";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useParams } from "react-router-dom";
import emptyHeart from "../Product/assets/Vector.png";
import fullHeart from "../Product/assets/Vector-1.png";
const Details = ({}) => {
  // const { products, getProducts, getProductDetails, productDetails } =
  //   useProducts();

  // const { id } = useParams();
  // useEffect(() => {
  //   getProductDetails(id);
  // }, []);

  // const [commentText, setCommentText] = useState("");

  // const { comments } = useProducts();

  // const handleCommentChange = (event) => {
  //   setCommentText(event.target.value);
  //   console.log(event);
  // };

  // const handleAddComment = () => {
  //   setCommentText("");
  // };
  const {
    products,
    getProducts,
    getProductDetails,
    productDetails,
    updateProductLikes,
  } = useProducts();

  const { id } = useParams();
  useEffect(() => {
    getProductDetails(id);
  }, []);

  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
    console.log(event);
  };

  const handleAddComment = () => {
    setComments([...comments, commentText]);
    setCommentText("");
  };

  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
    updateProductLikes(id, likes + 1);
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
            <div id="commentsAll">
              {comments.map((comment, id) => (
                <div key={id}>{comment}</div>
              ))}
            </div>
          </div>
          <div id="likes">
            <img
              src={isLiked ? fullHeart : emptyHeart}
              alt=""
              onClick={handleLikeClick}
            />
            <h3 id="likesCount">{likes}</h3>
          </div>
        </div>
      </>
    </>
  );
};

export default Details;
