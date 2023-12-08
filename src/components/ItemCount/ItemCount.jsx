import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Toast } from "../Toasty/Toasty";
import { Link } from "react-router-dom";
import "./itemCount.css";

const ItemCount = ({ initial, stock, onAdd, id }) => {
  const [count, setCount] = useState(initial);
  const { cart } = useContext(CartContext);

  const showToast = (icon, title) => {
    Toast.fire({ icon, title });
  };

  const canIncrement =
    count < stock &&
    (!cart.find((item) => item.id === id) ||
      count < stock - cart.find((item) => item.id === id).cantidad);

  const addProduct = (num) => {
    setCount(count + num);
  };

  const handleAddToCart = () => {
    onAdd(count);
    showToast("success", "Producto agregado al carrito");
    setCount(initial);
  };

  const showMe =
    count <= stock &&
    (!cart.find((item) => item.id === id) ||
      count <= stock - cart.find((item) => item.id === id).cantidad);

  const QuantitySelect = () => (
    <div className="quantity-select">
      <input type="text" value={count} min="1" max={stock} readOnly />
      <button
        className="dec qtybutton bg-transparent border-0"
        onClick={() => addProduct(-1)}
        disabled={count === initial}
      >
        -
      </button>
      <button
        className="inc qtybutton bg-transparent border-0"
        onClick={() => addProduct(+1)}
        disabled={count === stock || !canIncrement}
      >
        +
      </button>
    </div>
  );

  const AddToCartButton = () => (
    <button
      className="btn btn-dark btn-jif bg-black mx-4"
      onClick={handleAddToCart}
    >
      Agregar al carrito
    </button>
  );

  const renderButtons = () => (
    <div className="d-flex justify-content-around align-items-center">
      {renderLink("/", "Seguir comprando")}
      {renderLink("/carrito", "Ir a carrito")}
    </div>
  );

  const renderLink = (to, label) => (
    <Link
      to={to}
      className="btn btn-dark btn-effect btn-jif mt-2 btn-agregar-carrito-detail2"
    >
      {label}
    </Link>
  );

  return (
    <div className="product-details-quantity">
      {stock === 0 ? (
        <>
          {renderButtons()}
          <div className="alert alert-warning centrar mx-3">
            No hay más stock de este producto.
          </div>
        </>
      ) : (
        <>
          {showMe ? (
            <>
              <QuantitySelect />
              <AddToCartButton />
            </>
          ) : (
            <>
              {renderButtons()}
              <div className="alert alert-warning centrar mx-3">
                Ya tienes todo el stock disponible en el carrito.
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ItemCount;
