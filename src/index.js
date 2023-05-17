import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";
import FavoritesContextProvider from "./contexts/FavoritesContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <CartContextProvider>
        <FavoritesContextProvider>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </FavoritesContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
