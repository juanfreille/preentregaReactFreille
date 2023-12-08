import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();
const updateCartAndLocalStorage = (newCart) => {
  localStorage.setItem("cart", JSON.stringify(newCart));
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (cart.length === 0 && localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  const addToCart = (producto, cantidad) => {
    const itemAdded = { ...producto, cantidad };
    const newCart = [...cart];
    const isInCart = newCart.find((i) => i.id === itemAdded.id);
    if (isInCart) {
      isInCart.cantidad += cantidad;
    } else {
      newCart.push(itemAdded);
    }
    setCart(newCart);
    updateCartAndLocalStorage(newCart);
  };

  const isInCart = (itemId) => cart.some((i) => i.item.id === itemId);
  const getTotalItems = () => cart.reduce((cant, e) => (cant += e.cantidad), 0);
  const totalPrice = () =>
    cart.reduce((acc, prod) => (acc += prod.precio * prod.cantidad), 0);

  const removeItem = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart[index].cantidad -= 1;

      if (newCart[index].cantidad <= 0) {
        newCart.splice(index, 1);
      }

      setCart(newCart);
      updateCartAndLocalStorage(newCart);
    }
  };

  const removeProduct = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    updateCartAndLocalStorage(newCart);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        isInCart,
        getTotalItems,
        removeItem,
        clearCart,
        totalPrice,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
