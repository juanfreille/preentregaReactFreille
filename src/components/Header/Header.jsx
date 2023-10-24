import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import Cart from "../Cart/Cart";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Header = ({ initial, stock, mensaje }) => {
  let [counter, setCounter] = useState(initial);
  let [stockeo, setStockeo] = useState(stock);

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1);
      setStockeo(stockeo - 1);
    }
  };

  const decrement = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
      setStockeo(stockeo + 1);
    }
  };

  return (
    <>
      <header className="fuente-copada">
        <a id="header__logo-pc" href="./index.html">
          <img
            src="../src/assets/Logo-bg.webp"
            width="84"
            height="43"
            alt="logo de jifstyle"
          />
        </a>
        <div className="header__links">
          <Navbar />
          <a id="header__logo-mobile" href="./index.html">
            <img
              src="../src/assets/Logo-bg.webp"
              width="85"
              height="43"
              alt="logo de jifstyle"
            />
          </a>
          <div className="vr ocultar-mobile vr-mio"></div>
          <Cart numerito={counter} />
        </div>
      </header>
      <ItemListContainer mensaje={mensaje} />
      <div>
        <img width="250" src="../src/assets/baggy.webp" alt="Producto 1" />
        <p>Stock de producto: {stockeo}</p>
        <br />
        <button className="botonAdd" onClick={increment}>
          Agregar al carrito
        </button>
        <button className="botonAdd botonRemove" onClick={decrement}>
          Eliminar del carrito
        </button>
      </div>
    </>
  );
};
export default Header;
