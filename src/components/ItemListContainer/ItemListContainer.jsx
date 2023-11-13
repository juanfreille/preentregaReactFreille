import React, { useState, useEffect } from "react";
// import productsJson from "/data/productos.json?url";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ mensaje }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = () => {
      return fetch("https://650de701a8b42265ec2ccfd9.mockapi.io/dbProductos")
        .then((response) => response.json())
        .then((data) => {
          if (categoryId) {
            const filterProducts = data.filter((p) => p.tipo == categoryId);
            setProducts(filterProducts);
          } else {
            setProducts(data);
          }
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, [categoryId]);

  return (
    <>
      <section className="cuerpo">
        <h1 className="centrar">{mensaje}</h1>
        <div className="row row-mio no-selection">
          {products.length ? (
            <ItemList list={products} />
          ) : (
            <p>No hay productos</p>
          )}
        </div>
      </section>
    </>
  );
};

export default ItemListContainer;
