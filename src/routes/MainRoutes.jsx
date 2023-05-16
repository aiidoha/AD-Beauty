import React from "react";
import MainPage from "../pages/MainPage/MainPage";
import Home from "../pages/HomePage/Home";
import BestSellers from "../pages/BestSellers/BestSellers";
import ProductList from "../components/Product/ProductList/ProductList";
import Catalogue from "../pages/Catalogue/Catalogue";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";

import ProductListSkin from "../components/Product/ProductList/ProductListSkin";
import BestSellersSkin from "../pages/BestSellers/BestSellersSkin";
import CatalogueSkin from "../pages/Catalogue/CatalogueSkin";
import HomeSkin from "../pages/HomePage/HomeSkin";

import EditProductSkin from "../components/Product/EditProductSkin";
import AddProduct from "../components/Product/AddProduct";
import AddProductSkin from "../components/Product/AddProductSkin";
import EditProduct from "../components/Product/EditProduct";
import Details from "../components/Product/Details";
import Authorization from "../components/Product/Authorization";
import AuthorizationSkin from "../components/Product/AuthorizationSkin";
import Eye from "../pages/category/Eye";
import Essence from "../pages/categorySkin/Essence";
import Lip from "../pages/category/Lip";
import Face from "../pages/category/Face";
import Cream from "../pages/categorySkin/Cream";
import Serum from "../pages/categorySkin/Serum";
import Toner from "../pages/categorySkin/Toner";
import Cleanser from "../pages/categorySkin/Cleanser";
import CartDecor from "../components/Cart/CartDecor";
import BuyNow from "../components/Cart/BuyNow";
import CartSkin from "../components/Cart/CartSkin";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <MainPage />, id: 1 },
    { link: "/home", element: <Home />, id: 2 },
    { link: "/bestsellers", element: <BestSellers />, id: 3 },
    { link: "/catalogue", element: <Catalogue />, id: 4 },
    { link: "/products", element: <ProductList />, id: 5 },
    { link: "*", element: <NotFoundPage />, id: 6 },

    { link: "/edit/:id", element: <EditProduct />, id: 8 },
    // { link: "/news", element: <NewsPages />, id: 9 },
    // { link: "/cart", element: <CartPage />, id: 10 },
    { link: "/productsSkin", element: <ProductListSkin />, id: 11 },
    { link: "/bestsellersSkin", element: <BestSellersSkin />, id: 12 },
    { link: "/catalogueSkin", element: <CatalogueSkin />, id: 13 },
    { link: "/homeSkin", element: <HomeSkin />, id: 14 },

    { link: "/editSkin/:id", element: <EditProductSkin />, id: 16 },
    { link: "/add", element: <AddProduct />, id: 17 },
    { link: "/addSkin", element: <AddProductSkin />, id: 18 },
    { link: "/detailsModal", element: <Details />, id: 19 },
    { link: "/authorization", element: <Authorization />, id: 20 },
    { link: "/authorizationSkin", element: <AuthorizationSkin />, id: 21 },
    { link: "/eye", element: <Eye />, id: 22 },
    { link: "/essence", element: <Essence />, id: 23 },
    { link: "/lip", element: <Lip />, id: 24 },
    { link: "/face", element: <Face />, id: 25 },
    { link: "/cream", element: <Cream />, id: 26 },
    { link: "/serum", element: <Serum />, id: 27 },
    { link: "/toner", element: <Toner />, id: 28 },
    { link: "/cleanser", element: <Cleanser />, id: 29 },
    { link: "/cart", element: <CartDecor />, id: 30 },
    { link: "/buy", element: <BuyNow />, id: 31 },
    { link: "/cartSkin", element: <CartSkin />, id: 32 },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
