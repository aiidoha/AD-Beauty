import React, { useEffect, useState } from "react";
import emptyHeart from "../assets/Vector.png";
import fullHeart from "../assets/Vector-1.png";
import cardBg from "../assets/cardBg.png";
import "../ProductList/ProductListSkin.css";
import cartIcon from "../../assets/cartIcon.png";

import NavbarSkin from "../../Navbar/NavbarSkin";
import FooterSkin from "../../Footer/FooterSkin";
import ProductCardSkin from "../ProductCardSkin";

import { useNavigate, useSearchParams } from "react-router-dom";
import { Pagination } from "@mui/material";

import { ADMIN } from "../../helpers/consts";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useAuth } from "../../../contexts/AuthContextProvider";

const ProductListSkin = () => {
  const { products, getProducts, skin } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const {
    user: { email },
  } = useAuth();
  // !SEARCH
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  // const product = [...products];
  // ! фильтр для отображения декор
  useEffect(() => {
    getProducts();
    skin();
  }, []);

  const skinprod = skin();

  useEffect(() => {
    getProducts();
  }, []);
  // !PAGINATION

  //pagination
  const [page, setPage] = useState(1); // текущая страница
  const itemsPerPage = 3; // кол-во элементов на одной странице
  const count = Math.ceil(skinprod?.length / itemsPerPage); // общее кол-во страниц пагинации

  // функция для изменения состояния текущей страницы
  const handleChange = (e, p) => {
    setPage(p);
  };

  // функция, которая возвращает только те элементы, которые должны отображаться на текущей странице
  function currentData() {
    // начальный индекс
    const begin = (page - 1) * itemsPerPage;
    // конечный индекс
    const end = begin + itemsPerPage;
    // возвращаем массив, состоящий из фиксированного кол-ва элементов
    return skinprod.slice(begin, end);
  }

  return (
    <>
      <NavbarSkin />
      <div className="divider"></div>
      <div id="prodcont">
        <div id="productListContainer">
          <div id="productList">
            {email === ADMIN ? (
              <div id="addBlockSkin">
                <h2 className="addBlockH2Skin">ALL</h2>{" "}
                <button onClick={() => navigate("/addSkin")} id="add">
                  ADD PRODUCT
                </button>
              </div>
            ) : (
              <h2 id="all" className="addBlockH2">
                ALL
              </h2>
            )}

            <div id="productListCards">
              {currentData().map((item) => (
                <ProductCardSkin key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Pagination
        sx={{ display: "flex", justifyContent: "center" }}
        count={count}
        page={page}
        onChange={handleChange}
        variant="outlined"
        color="secondary"
      />
      <FooterSkin />
    </>
  );
};

export default ProductListSkin;
