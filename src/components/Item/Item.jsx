import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <>
      <article className="col-6 col-xl-3 col-lg-4">
        <div className="tarjeta thumb-wrapper">
          <figure>
            <div className="image-container">
              <img
                className="card-img"
                src={`../../${product.imagen}`}
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
        </div>
      </article>
    </>
  );
};

export default Item;
