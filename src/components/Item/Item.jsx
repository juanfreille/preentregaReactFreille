import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ product }) => {
  return (
    <>
      <article className="col-6 col-xl-3 col-lg-4">
        <div className="tarjeta thumb-wrapper">
          <figure>
            <div className="image-container">
              <img
                className="card-img"
                src={`${product.imagen}`}
                alt={product.nombre}
              />
              <div className="mask"></div>
              <figcaption className="ocultar-mobile">
                <Link to={`/item/${product.id}`} className="btn btn-detalles">
                  Ver Detalles
                </Link>
              </figcaption>
            </div>
          </figure>
          <p>{product.nombre}</p>
          <p>$ {product.precio.toLocaleString(undefined)}</p>
          {product.stock === 0 && (
            <span className="stockless">
              <img src="https://i.ibb.co/59PsLPN/agotado.png" alt="agotado" />
            </span>
          )}
        </div>
      </article>
    </>
  );
};

export default Item;
