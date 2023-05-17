import React, { createContext, useContext, useReducer, useState } from "react";
import {
  ACTIONS,
  JSON_API_PRODUCTS,
  JSON_API_SKIN_PRODUCTS,
} from "../components/helpers/consts";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const productContext = createContext();
// это кастомный хук для использования контекста
export const useProducts = () => {
  return useContext(productContext);
};
//здесь задаю начально состояние
const INIT_STATE = {
  products: [],
  productDetails: {},
};
// это функция reducer, которая в зависимости от action.type, меняет определенную часть состояния
const reducer = (state = INIT_STATE, action) => {
  // это свитч конструкция благодаря которой мы задаем изменения
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };

    case ACTIONS.GET_PRODUCTS_DETAILS:
      return { ...state, productDetails: action.payload };

    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // данная функция нужна нам для того чтобы получиь данные с нашего сервера то есть с апишки которую мы поместили в consts.jsx
  const getProducts = async () => {
    // гет запрос для того чтобы получить продукты
    const { data } = await axios(
      `${JSON_API_PRODUCTS}${window.location.search}`
    );
    // здесь мы поместили в состояние то что получили выше. можно заметить что под ключом payload теперь лежит data  которая как раз таки хранит в себе все данные api
    dispatch({ type: ACTIONS.GET_PRODUCTS, payload: data });
  };

  // filter для карточек скин или декор

  function notskin() {
    return state.products.filter((elem) => elem.division !== "skin");
  }
  function skin() {
    return state.products.filter((elem) => elem.division === "skin");
  }

  // !CREATE
  const addProduct = async (newProduct) => {
    await axios.post(JSON_API_PRODUCTS, newProduct);
    navigate("/products");
  };
  const addProductSkin = async (newProduct) => {
    await axios.post(JSON_API_PRODUCTS, newProduct);
    navigate("/productsSkin");
  };
  // !DELETE
  const deleteProduct = async (id) => {
    await axios.delete(`${JSON_API_PRODUCTS}/${id}`);
    getProducts();
  };
  // !DETAILS
  // получение деталей одного продукта
  const getProductDetails = async (id) => {
    const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);
    console.log(data);
    dispatch({
      type: ACTIONS.GET_PRODUCTS_DETAILS,
      payload: data,
    });
  };
  getProductDetails();
  // !EDIT
  // сохранение отредактированного продукта
  const saveEditedProduct = async (newProduct) => {
    // отправка patch запроса
    await axios.patch(`${JSON_API_PRODUCTS}/${newProduct.id}`, newProduct);
    //стягивание обновленных данных
    getProducts();
    navigate("/products");
  };
  const saveEditedProductSkin = async (newProduct) => {
    // отправка patch запроса
    await axios.patch(`${JSON_API_PRODUCTS}/${newProduct.id}`, newProduct);
    //стягивание обновленных данных
    getProducts();
    navigate("/productsSkin");
  };
  // !FILTER
  function categoryEye() {
    return state.products.filter((elem) => elem.type == "eye");
  }
  function categoryEssence() {
    return state.products.filter((elem) => elem.type == "essence");
  }
  function categoryLip() {
    return state.products.filter((elem) => elem.type == "lip");
  }
  function categoryFace() {
    return state.products.filter((elem) => elem.type == "face");
  }
  function categoryCream() {
    return state.products.filter((elem) => elem.type == "cream");
  }
  function categoryCleanser() {
    return state.products.filter((elem) => elem.type == "cleanser");
  }
  function categorySerum() {
    return state.products.filter((elem) => elem.type == "serum");
  }
  function categoryToner() {
    return state.products.filter((elem) => elem.type == "toner");
  }
  // ! COMMENTS
  const [comments, setComments] = useState([]);

  const values = {
    getProducts,
    products: state.products,
    notskin,
    skin,
    addProduct,
    addProductSkin,
    deleteProduct,
    getProductDetails,
    productDetails: state.productDetails,
    saveEditedProduct,
    saveEditedProductSkin,
    categoryEye,
    categoryEssence,
    categoryCleanser,
    categoryCream,
    categoryFace,
    categoryLip,
    categoryToner,
    categorySerum,
    comments,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
