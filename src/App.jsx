import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const bienvenida = "Bienvenido a JIF Style Store";

  return (
    <>
      <Header initial={0} stock={10} mensaje={bienvenida} />
    </>
  );
}

export default App;
