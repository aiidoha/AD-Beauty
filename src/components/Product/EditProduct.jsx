import React from "react";
import Navbar from "../Navbar/Navbar";
import "./EditProduct.css";
import Footer from "../Footer/Footer";

const EditProduct = () => {
  return (
    <>
      <Navbar />
      <div id="editProduct">
        <div className="inpContainer">
          <input className="inpEditProduct" type="text" placeholder="Title" />
          <input className="inpEditProduct" type="url" placeholder="Image" />
          <input className="inpEditProduct" type="text" placeholder="Type" />
          <input
            className="inpEditProduct"
            type="text"
            placeholder="Description"
          />
          <input className="inpEditProduct" type="number" placeholder="Price" />
          <button className="btnEditProduct">SAVE CHANGES</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProduct;
