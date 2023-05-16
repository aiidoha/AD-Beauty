import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/HomePage/Home";
import BestSellers from "./pages/BestSellers/BestSellers";
import Catalogue from "./pages/Catalogue/Catalogue";
import ProductList from "./components/Product/ProductList/ProductList";
import AddProduct from "./components/Product/AddProduct";

import MainRoutes from "./routes/MainRoutes";
// import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div>
      <MainRoutes />
    </div>
  );
};

export default App;
