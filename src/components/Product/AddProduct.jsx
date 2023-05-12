import React from "react";
import Navbar from "../Navbar/Navbar";
import "./AddProduct.css";
import Footer from "../Footer/Footer";

const AddProduct = () => {
  return (
    <>
      <Navbar />
      <div id="addProduct">
        <div className="inpContainerAdd">
          <input className="inpAddProduct" type="text" placeholder="Title" />
          <input className="inpAddProduct" type="url" placeholder="Image" />
          <input className="inpAddProduct" type="text" placeholder="Type" />
          <input
            className="inpAddProduct"
            type="text"
            placeholder="Description"
          />
          <input className="inpAddProduct" type="number" placeholder="Price" />
          <button className="btnAddProductSkin">ADD PRODUCT</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddProduct;
