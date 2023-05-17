import React, { useEffect, useState } from "react";
import logoNavBar from "../assets/logoNavBar.png";
import searchNav from "../assets/searchNav.png";
import favorites from "../assets/favoritesNav.png";
import adminNav from "../assets/adminIconNav.png";
import burger from "../assets/burgerMenu.png";
import "../Navbar/NavBar.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import heartIcon from "../assets/heartNav.png";
import { useAuth } from "../../contexts/AuthContextProvider";
import { MenuItem, MenuList } from "@mui/material";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  // search
  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);
  // search

  // logout/login
  const {
    handleLogout,
    user: { email },
  } = useAuth();

  return (
    <div id="navcont">
      <div>
        <div className="container" id="navbar">
          <Link to="/">
            <img src={logoNavBar} alt="logo" />
          </Link>
          <ul>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/products"
            >
              <li className="navLi">SHOP NOW</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/bestsellers"
            >
              <li className="navLi">BEST SELLERS</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/catalogue"
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

            <img onClick={() => navigate("/cart")} src={favorites} alt="" />

            <img
              onClick={() => navigate("/authorization")}
              src={adminNav}
              alt=""
            />
            <img onClick={()=> navigate('/favs')} src={heartIcon} alt="" />
          </div>
          <img id="burger" src={burger} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
