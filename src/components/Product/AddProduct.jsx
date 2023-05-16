import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./AddProduct.css";
import Footer from "../Footer/Footer";
import { useProducts } from "../../contexts/ProductContextProvider";

const AddProduct = () => {
  const { addProduct } = useProducts();
  const [product, setProduct] = useState({
    title: "",
    image: "",
    type: "",
    description: "",
    price: "",
    category: "",
  });
  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else if (e.target.value.trim() === "") {
      e.preventDefault();
      alert("Please, fill in the fields!");
      addProduct((e) => e.preventDefault());
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
      <div id="addProduct">
        <div className="inpContainerAdd">
          <input
            onChange={handleInp}
            className="inpAddProduct"
            type="text"
            name="title"
            placeholder="Title"
            required
          />
          <input
            onChange={handleInp}
            className="inpAddProduct"
            type="url"
            name="image"
            placeholder="Image"
            required
          />
          <input
            onChange={handleInp}
            className="inpAddProduct"
            type="text"
            name="type"
            placeholder="Type"
            required
          />
          <input
            onChange={handleInp}
            className="inpAddProduct"
            type="text"
            name="description"
            placeholder="Description"
            required
          />
          <input
            onChange={handleInp}
            className="inpAddProduct"
            type="number"
            name="price"
            placeholder="Price"
            required
          />
          <button
            className="btnAddProductSkin"
            onClick={() => addProduct(product)}
          >
            ADD PRODUCT
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddProduct;
