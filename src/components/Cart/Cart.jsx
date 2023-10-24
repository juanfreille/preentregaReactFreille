import React from "react";
import "./Cart.css";

const Cart = ({ numerito }) => {
  return (
    <div className="header__nav-user">
      <a href="./index.html" className="carrito-text">
        <img
          src="../src/assets/carrito.webp"
          alt="carrito de compras"
          className="imagen-carrito"
        />
        <span id="numeroCarrito" className="badge rounded-circle">
          {numerito}
        </span>

        <div className="carrito-nav fuente-copada texto-xs">MI CARRITO</div>
      </a>
    </div>
  );
};

export default Cart;
