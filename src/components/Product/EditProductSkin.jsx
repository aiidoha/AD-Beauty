import React, { useEffect, useState } from "react";
import "./EditProduct.css";
import NavbarSkin from "../Navbar/NavbarSkin";
import FooterSkin from "../Footer/FooterSkin";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useParams } from "react-router-dom";

const EditProductSkin = () => {
  const { saveEditedProductSkin, getProductDetails, productDetails } =
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
      <NavbarSkin />
      <div id="editProductSkin">
        <div className="inpContainer">
          <input
            value={product.title || ""}
            className="inpEditProduct"
            type="text"
            placeholder="Title"
            name="title"
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
            onClick={() => saveEditedProductSkin(product)}
            className="btnEditProduct"
          >
            SAVE CHANGES
          </button>
        </div>
      </div>
      <FooterSkin />
    </>
  );
};

export default EditProductSkin;
