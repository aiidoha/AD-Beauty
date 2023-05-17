import React, { createContext, useContext, useReducer } from "react";
import {
  calcTotalPrice,
  getCountProductsInFavs,
} from "../components/helpers/functions";
import { FAVS } from "../components/helpers/consts";

// создание контекста и кастомного хука для использования данного контекста
export const favsContext = createContext();
export const useFavs = () => useContext(favsContext);

// начальное состояние для корзины
const INIT_STATE = {
  favs: JSON.parse(localStorage.getItem("favs")),
  favsLength: getCountProductsInFavs(),
};
//
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case FAVS.GET_FAVS:
      return { ...state, favs: action.payload };
    case FAVS.GET_FAVS_LENGTH:
      return { ...state, favsLength: action.payload };
    default:
      return state;
  }
}
const FavoritesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // функция для получения данных корзины из localStorage
  const getFavs = () => {
    // достаем данные из localstorage под ключом cart
    let favs = JSON.parse(localStorage.getItem("favs"));

    // делаем проверку на то, что favs существует, если его в хранилище нет, то добавляем под ключом favs объект
    if (!favs) {
      localStorage.setItem(
        "favs",
        JSON.stringify({
          products: [],
        })
      );
      favs = {
        products: [],
      };
    }

    // обновление состояние корзины
    dispatch({
      type: FAVS.GET_FAVS,
      payload: favs,
    });
  };

  // функция добавления в корзину
  const addProductToFavs = (product) => {
    let favs = JSON.parse(localStorage.getItem("favs"));

    // проверка на существование favs
    if (!favs) {
      favs = { products: [] };
    }
    // формирование продукта, который будет хранится в корзине
    let newProduct = {
      item: product, // сам продукт
    };

    // проверка на то, содержится ли уже в корзине продукт, который хотим добавить
    let productToFind = favs.products.filter(
      (elem) => elem.item.id === product.id
    );
    if (productToFind.length === 0) {
      favs.products.push(newProduct); // добавляем продукт, если его не было в корзине
    } else {
      favs.products = favs.products.filter(
        (elem) => elem.item.id != product.id // удаляем, если был
      );
    }

    // помещаем одновленные данные в localStorage
    localStorage.setItem("favs", JSON.stringify(favs));
    //обновляем состояние
    dispatch({ type: FAVS.GET_FAVS, payload: favs });
  };

  // проверям находится ли товар в корзине (для стилей кнопки)
  const checkProductInFavs = (id) => {
    let favs = JSON.parse(localStorage.getItem("favs"));
    if (favs) {
      let newFavs = favs.products.filter((elem) => elem.item.id == id);
      return newFavs.length > 0 ? true : false;
    }
  };

  //   // функция для изменения кол-ва одной позиции в корзине, принимает кол-во и id того продукта, у которого это количество должно поменяться
  //   const changeProductCount = (count, id) => {
  //     let cart = JSON.parse(localStorage.getItem("cart"));
  //     cart.products = cart.products.map((product) => {
  //       if (product.item.id === id) {
  //         product.count = count;
  //         product.subPrice = calcSubPrice(product);
  //       }
  //       return product;
  //     });
  //     cart.totalPrice = calcTotalPrice(cart.products);
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //     dispatch({ type: CART.GET_CART, payload: cart });
  //   };

  // удаление товара из корзины
  const deleteFavsProduct = (id) => {
    let favs = JSON.parse(localStorage.getItem("favs"));

    // перебираем массив favs.products, в резульате перебора останутся только те продукты, у которых id не совпадает с переданным id при вызове
    favs.products = favs.products.filter((elem) => elem.item.id !== id);

    favs.totalPrice = calcTotalPrice(favs.products);
    localStorage.setItem("favs", JSON.stringify(favs));

    dispatch({
      type: FAVS.GET_FAVS,
      payload: favs,
    });
  };

  const values = {
    getFavs,
    addProductToFavs,
    checkProductInFavs,
    favs: state.favs,
    deleteFavsProduct,
  };
  return (
    <div>
      <favsContext.Provider value={values}>{children}</favsContext.Provider>
    </div>
  );
};

export default FavoritesContextProvider;
