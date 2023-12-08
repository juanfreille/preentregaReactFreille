import React from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import CartView from "./components/CartView/CartView";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const bienvenida = "JIF Style Store";

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer mensaje={bienvenida} />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer mensaje={bienvenida} />}
            />
            <Route path="/item/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<CartView />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
