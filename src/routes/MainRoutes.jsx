import React from "react";
import MainPage from "../pages/MainPage/MainPage";
import Home from "../pages/HomePage/Home";
import BestSellers from "../pages/BestSellers/BestSellers";
import ProductList from "../components/Product/ProductList/ProductList";
import Catalogue from "../pages/Catalogue/Catalogue";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import AdminPanel from "../components/Product/AdminPanel";
import ProductListSkin from "../components/Product/ProductList/ProductListSkin";
import BestSellersSkin from "../pages/BestSellers/BestSellersSkin";
import CatalogueSkin from "../pages/Catalogue/CatalogueSkin";
import HomeSkin from "../pages/HomePage/HomeSkin";
import AdminPanelSkin from "../components/Product/AdminPanelSkin";
import EditProductSkin from "../components/Product/EditProductSkin";
import AddProduct from "../components/Product/AddProduct";
import AddProductSkin from "../components/Product/AddProductSkin";
import EditProduct from "../components/Product/EditProduct";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <MainPage />, id: 1 },
    { link: "/home", element: <Home />, id: 2 },
    { link: "/bestsellers", element: <BestSellers />, id: 3 },
    { link: "/catalogue", element: <Catalogue />, id: 4 },
    { link: "/products", element: <ProductList />, id: 5 },
    { link: "*", element: <NotFoundPage />, id: 6 },
    { link: "/admin", element: <AdminPanel />, id: 7 },
    { link: "/edit/:id", element: <EditProduct />, id: 8 },
    // { link: "/news", element: <NewsPages />, id: 9 },
    // { link: "/cart", element: <CartPage />, id: 10 },
    { link: "/productsSkin", element: <ProductListSkin />, id: 11 },
    { link: "/bestsellersSkin", element: <BestSellersSkin />, id: 12 },
    { link: "/catalogueSkin", element: <CatalogueSkin />, id: 13 },
    { link: "/homeSkin", element: <HomeSkin />, id: 14 },
    { link: "/adminSkin", element: <AdminPanelSkin />, id: 15 },
    { link: "/editSkin/:id", element: <EditProductSkin />, id: 16 },
    { link: "/add", element: <AddProduct />, id: 17 },
    { link: "/addSkin", element: <AddProductSkin />, id: 18 },
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
