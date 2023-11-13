import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import CartView from "./components/CartView/CartView";

function App() {
  const bienvenida = "Bienvenido a JIF Style Store";

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer mensaje={bienvenida} />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer mensaje={bienvenida} />}
          />
          <Route path="/item/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
