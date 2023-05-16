import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./EditProduct.css";
import Footer from "../Footer/Footer";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { saveEditedProduct, getProductDetails, productDetails } =
    useProducts();
  console.log(productDetails);

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const [product, setProduct] = useState(productDetails);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  console.log(product);
  return (
    <>
      <Navbar />
      <div id="editProduct">
        <div className="inpContainer">
          <input
            value={product.title || ""}
            className="inpEditProduct"
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleInp}
          />

          <input
            value={product.image || ""}
            className="inpEditProduct"
            type="url"
            name="image"
            placeholder="Image"
            onChange={handleInp}
          />
          <input
            value={product.type || ""}
            className="inpEditProduct"
            type="text"
            name="type"
            placeholder="Type"
            onChange={handleInp}
          />
          <input
            value={product.description || ""}
            className="inpEditProduct"
            type="text"
            name="description"
            placeholder="Description"
          />
          <input
            value={product.price || ""}
            className="inpEditProduct"
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleInp}
          />
          <button
            onClick={() => saveEditedProduct(product)}
            className="btnEditProduct"
          >
            SAVE CHANGES
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProduct;
