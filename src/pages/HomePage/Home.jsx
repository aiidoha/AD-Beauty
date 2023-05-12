import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HomeBg from "../assets/homeBg.png";
import "../HomePage/Home.css";
import ProductList from "../../components/Product/ProductList/ProductList";


const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div id="HomePage">
          <div id="leftHomePage">
            <h1>YOUR FAVE LIP COMBO</h1>
            <h3>shop your favorite lip kits</h3>
            <a href="#all">
              <button>SHOP NOW</button>
            </a>
          </div>
          <img id="rightHomePage" src={HomeBg} alt="" />
        </div>
        <ProductList />
    
      </div>
    </>
  );
};

export default Home;
