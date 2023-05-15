import React, { useEffect, useState } from "react";
import logoNavBar from "../assets/logoNavBar.png";
import searchNav from "../assets/searchNav.png";
import favorites from "../assets/favoritesNav.png";
import adminNav from "../assets/adminIconNav.png";
import burger from "../assets/burgerMenu.png";
import "../Navbar/NavbarSkin.css";
import { Link, useSearchParams } from "react-router-dom";
import heartIcon from "../assets/heartNav.png";

const NavbarSkin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);
  return (
    <div id="navcontSkin">
      <div>
        <div className="container" id="navbarSkin">
          <Link to="/">
            <img src={logoNavBar} alt="logo" />
          </Link>
          <ul>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/productsSkin"
            >
              <li className="navLi">SHOP NOW</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/bestsellersSkin"
            >
              <li className="navLi">BEST SELLERS</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/catalogueSkin"
            >
              <li className="navLi">CATALOGUE</li>
            </Link>
          </ul>
          <div id="iconsNav">
            <input
              onChange={(e) => setSearch(e.target.value)}
              id="searchInp"
              type="text"
            />
            <img src={searchNav} alt="" />
            <img src={favorites} alt="" />
            <img src={adminNav} alt="" />

            <img src={heartIcon} alt="" />
          </div>
          <img id="burger" src={burger} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavbarSkin;
