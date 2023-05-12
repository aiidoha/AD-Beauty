import React from "react";

import "./AddProduct.css";

import NavbarSkin from "../Navbar/NavbarSkin";
import FooterSkin from "../Footer/FooterSkin";

const AddProductSkin = () => {
  return (
    <>
      <NavbarSkin />
      <div id="addProductSkin">
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
      <FooterSkin />
    </>
  );
};

export default AddProductSkin;
