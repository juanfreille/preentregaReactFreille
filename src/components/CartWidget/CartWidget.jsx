import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <div className="header__nav-user">
      <Link to="/carrito" className="carrito-text">
        <AiOutlineShoppingCart className="imagen-carrito" />
        <span className="numeroCarrito badge rounded-circle">
          {getTotalItems()}
        </span>
        <div className="carrito-nav uppercase">mi carrito</div>
      </Link>
    </div>
  );
};

export default CartWidget;
