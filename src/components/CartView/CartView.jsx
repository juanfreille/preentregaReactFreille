import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import BackNavigator from "../BackNavigator/BackNavigator";
import CartViewList from "../CartViewList/CartViewList";
import CartDetailList from "../CartDetailList/CartDetailList";
import { Toast } from "../Toasty/Toasty";
import { customSwalert } from "../Toasty/Toasty";
import "./CartView.css";

const CartView = () => {
  const {
    cart,
    clearCart,
    removeItem,
    getTotalItems,
    totalPrice,
    removeProduct,
  } = useContext(CartContext);

  const handleRemove = (productId, isAll = false) => {
    const title = isAll
      ? "Producto eliminado."
      : "Unidad del producto eliminada.";

    Toast.fire({
      icon: "success",
      title: title,
    });

    isAll ? removeProduct(productId) : removeItem(productId);
  };

  const popUpEmptyCart = () => {
    customSwalert
      .fire({
        title: "Eliminar carrito",
        reverseButtons: true,
        html: "<div class='modal-body'><p>¿Está seguro que desea eliminar el carrito de compras?</p><p>Esta operación no puede ser revertida.</p></div>",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Si, eliminar carrito",
      })
      .then((result) => {
        if (result.isConfirmed) {
          clearCart();
          Toast.fire({
            icon: "success",
            title: "El carrito de compras ha sido eliminado",
          });
        }
      });
  };

  const renderEmptyCart = () => (
    <div className="d-flex align-items-center flex-column mb-3">
      <h1 className="centrar text-black m-5">No tienes ningún producto</h1>
      <Link to="/" className="btn btn-effect btn-dark btn-jif bg-black zoomy">
        Regresar a la tienda
      </Link>
    </div>
  );

  const renderCartLeftColumn = () => {
    return (
      <div className="col-8">
        <CartViewList CartItemsList cart={cart} handleRemove={handleRemove} />
        <button
          className="btn btn-effect btn-dark btn-jif px-5 mt-3 uppercase"
          onClick={() => popUpEmptyCart()}
        >
          Vaciar carrito
        </button>
      </div>
    );
  };

  const renderCartRightColumn = () => {
    return (
      <CartDetailList
        totalItems={getTotalItems()}
        totalPriceValue={totalPrice()}
      />
    );
  };

  return (
    <article>
      {cart.length === 0 ? (
        renderEmptyCart()
      ) : (
        <>
          <BackNavigator />
          <div className="row gap-3 justify-content-evenly">
            {renderCartLeftColumn()}
            {renderCartRightColumn()}
          </div>
        </>
      )}
    </article>
  );
};

export default CartView;
