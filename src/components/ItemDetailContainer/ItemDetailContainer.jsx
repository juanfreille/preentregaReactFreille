import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { idProduct } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://650de701a8b42265ec2ccfd9.mockapi.io/dbProductos"
        );
        const data = await response.json();
        const foundProduct = data.find((item) => item.id == idProduct);
        setProduct(foundProduct);
      } catch (error) {
        return console.log(error);
      }
    };

    fetchData();
  }, [idProduct]);

  return (
    <section>
      {product ? <ItemDetail item={product} /> : <p>Cargando...</p>}
    </section>
  );
};

export default ItemDetailContainer;
