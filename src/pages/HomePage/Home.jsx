import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HomeBg from "../assets/homeBg.png";
import "../HomePage/Home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div id="HomePage">
        <div id="leftHomePage">
          <h1>YOUR FAVE LIP COMBO</h1>
          <h3>shop your favorite lip kits</h3>
          <button>SHOP NOW</button>
        </div>
        <img id="rightHomePage" src={HomeBg} alt="" />
      </div>
    </div>
  );
};

export default Home;
