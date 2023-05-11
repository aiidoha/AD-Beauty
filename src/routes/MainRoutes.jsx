import React from "react";
import MainPage from "../pages/MainPage/MainPage";
import Home from "../pages/HomePage/Home";
import BestSellers from "../pages/BestSellers/BestSellers";
import ProductList from "../components/Product/ProductList/ProductList";
import Catalogue from "../pages/Catalogue/Catalogue";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import AdminPanel from "../components/Product/AdminPanel";
import BestSellersSkin from "../pages/BestSellers/BestSellersSkin";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <MainPage />, id: 1 },
    { link: "/home", element: <Home />, id: 2 },
    { link: "/bestsellers", element: <BestSellers />, id: 3 },
    { link: "/catalogue", element: <Catalogue />, id: 4 },
    { link: "/products", element: <ProductList />, id: 5 },
    { link: "*", element: <NotFoundPage />, id: 6 },
    { link: "/admin", element: <AdminPanel />, id: 7 },
    // { link: "/edit/:id", element: <EditProductPage />, id: 8 },
    // { link: "/news", element: <NewsPages />, id: 9 },
    // { link: "/cart", element: <CartPage />, id: 10 },
    { link: "/bestsellersSkin", element: <BestSellersSkin />, id: 11 },
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
