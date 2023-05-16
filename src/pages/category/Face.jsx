import React, { useEffect, useState } from "react";
import emptyHeart from "../assets/Vector.png";
import fullHeart from "../assets/Vector-1.png";
import cardBg from "../assets/cardBg.png";
import "../../components/Product/ProductList/ProductList.css";
import cartIcon from "../../components/assets/cartIcon.png";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useSearchParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { Pagination } from "@mui/material";
import ProductCard from "../../components/Product/ProductCard";
import Navbar from "../../components/Navbar/Navbar";

const Face = () => {
  const { products, getProducts, categoryFace, notskin } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const facecat = categoryFace();
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
    notskin();
  }, []);
  const skinProducts = notskin();

  useEffect(() => {
    getProducts();
    categoryFace();
  }, []);
  // !PAGINATION

  //pagination
  const [page, setPage] = useState(1); // текущая страница
  const itemsPerPage = 3; // кол-во элементов на одной странице
  const count = Math.ceil(facecat?.length / itemsPerPage); // общее кол-во страниц пагинации

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
    return facecat.slice(begin, end);
  }

  return (
    <>
      <Navbar />
      <div className="divider"></div>
      <div id="prodcont">
        <div id="productListContainer">
          <div id="productList">
            <h2 id="all" className="addBlockH2">
              ALL
            </h2>
            <div id="productListCards">
              {currentData().map((item) => (
                <ProductCard key={item.id} item={item} />
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
      <Footer />
    </>
  );
};

export default Face;
