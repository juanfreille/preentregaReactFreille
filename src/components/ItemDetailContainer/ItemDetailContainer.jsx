import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { idProduct } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const itemRef = doc(db, "productos", idProduct);
        const snapshot = await getDoc(itemRef);

        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [idProduct]);

  return (
    <section>
      {loading ? (
        <Loading />
      ) : product ? (
        <ItemDetail item={product} />
      ) : (
        <p>No se encontró el producto</p>
      )}
    </section>
  );
};

export default ItemDetailContainer;
