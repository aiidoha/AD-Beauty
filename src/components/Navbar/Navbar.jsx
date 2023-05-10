import React from "react";
import logoNavBar from "../assets/logoNavBar.png";
import searchNav from "../assets/searchNav.png";
import favorites from "../assets/favoritesNav.png";
import adminNav from "../assets/adminIconNav.png";
import burger from "../assets/burgerMenu.png";
import "../Navbar/NavBar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div>
        <div className="container" id="navbar">
          <img src={logoNavBar} alt="logo" />
          <ul>
            <Link to="/products">
              <li className="navLi">SHOP NOW</li>
            </Link>
            <Link to="/bestsellers">
              <li className="navLi">BEST SELLERS</li>
            </Link>
            <Link to="/catalogue">
              <li className="navLi">CATALOGUE</li>
            </Link>
          </ul>
          <div id="iconsNav">
            <img src={searchNav} alt="" />
            <img src={favorites} alt="" />
            <img src={adminNav} alt="" />
          </div>
          <img id="burger" src={burger} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
