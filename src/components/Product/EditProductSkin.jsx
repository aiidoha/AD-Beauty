import React from "react";
import "./EditProduct.css";
import NavbarSkin from "../Navbar/NavbarSkin";
import FooterSkin from "../Footer/FooterSkin";

const EditProductSkin = () => {
  return (
    <>
      <NavbarSkin />
      <div id="editProductSkin">
        <div id="inpContainer">
          <input className="inpEditProduct" type="text" placeholder="Title" />
          <input className="inpEditProduct" type="url" placeholder="Image" />
          <input className="inpEditProduct" type="text" placeholder="Type" />
          <input
            className="inpEditProduct"
            type="text"
            placeholder="Description"
          />
          <input className="inpEditProduct" type="number" placeholder="Price" />
          <button className="btnEditProductSkin">SAVE CHANGES</button>
        </div>
      </div>
      <FooterSkin />
    </>
  );
};

export default EditProductSkin;
