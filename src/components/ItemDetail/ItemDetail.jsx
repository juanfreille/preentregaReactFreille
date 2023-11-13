import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(0);

  const onAdd = (quantityToAdd) => {
    setQuantity(quantityToAdd);
  };

  console.log(
    quantity ? `${quantity} agregados` : "no hay prodcutos agregados"
  );

  return (
    <article className="centrar">
      <div className="tarjeta-detail wrapper">
        <img className="card-img" src={`../${item.imagen}`} alt={item.nombre} />
        <h1>{item.nombre}</h1>
        <p>Precio: $ {item.precio.toLocaleString(undefined)}</p>
        <p>Stock: {item.stock}</p>
        {quantity ? (
          <Link to={"/carrito"}>Ver {quantity} productos</Link>
        ) : (
          <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
        )}
      </div>
    </article>
  );
};

export default ItemDetail;
