import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ mensaje }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const db = getFirestore();
        const colectionRef = collection(db, "productos");
        const q = categoryId
          ? query(colectionRef, where("tipo", "==", categoryId))
          : colectionRef;
        const snapshot = await getDocs(q);
        const itemsCollection = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(itemsCollection);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [categoryId]);

  return (
    <>
      <section className="cuerpo">
        <h1 className="centrar my-3">{mensaje}</h1>
        <br />
        <div className="row centrar no-selection">
          {loading ? <Loading /> : <ItemList list={products} />}
        </div>
      </section>
    </>
  );
};

export default ItemListContainer;
