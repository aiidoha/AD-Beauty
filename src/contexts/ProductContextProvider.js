import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, JSON_API_PRODUCTS } from "../components/helpers/consts";
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

  const values = {
    getProducts,
    products: state.products,
    notskin,
    skin,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
