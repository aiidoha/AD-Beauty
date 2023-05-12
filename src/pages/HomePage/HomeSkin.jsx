import React from "react";
import HomeBgSkin from "../assets/homeBgSkin.png";
import "../HomePage/HomeSkin.css";
import NavbarSkin from "../../components/Navbar/NavbarSkin";
import ProductListSkin from "../../components/Product/ProductList/ProductListSkin";
const HomeSkin = () => {
  return (
    <div>
      <NavbarSkin />
      <div id="HomePage">
        <div id="leftHomePage">
          <h1>YOUR FAVE LIP COMBO</h1>
          <h3>shop your favorite lip kits</h3>
          <a href="#all">
            <button>SHOP NOW</button>
          </a>
        </div>
        <img id="rightHomePage" src={HomeBgSkin} alt="" />
      </div>
      <ProductListSkin />
    </div>
  );
};

export default HomeSkin;
