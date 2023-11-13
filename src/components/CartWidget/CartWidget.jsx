import React from "react";
import "./CartWidget.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className="header__nav-user">
      <Link to="/carrito" className="carrito-text">
        <AiOutlineShoppingCart className="imagen-carrito" />
        <span id="numeroCarrito" className="badge rounded-circle">
          5
        </span>
        <div className="carrito-nav fuente-copada texto-xs">MI CARRITO</div>
      </Link>
    </div>
  );
};

export default CartWidget;
