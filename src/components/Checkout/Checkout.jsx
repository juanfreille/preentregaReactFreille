import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import BackNavigator from "../BackNavigator/BackNavigator";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";
import { customSwalert } from "../Toasty/Toasty";
import "./Checkout.css";

const Checkout = () => {
  const { cart, getTotalItems, totalPrice } = useContext(CartContext);
  const [pedidoId, setPedidoId] = useState("");
  const [valorEnvio, setValorEnvio] = useState(0);
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    provincia: "",
    codigoPostal: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    if (name === "provincia") {
      const precioEnvio = getPrecioEnvio(value);
      setValorEnvio(precioEnvio);
    }
  };

  const getPrecioEnvio = (provincia) => {
    return provincia === "Córdoba" ? 3700 : 5000;
  };

  const handleForm = (event) => {
    event.preventDefault();
    validateForm(event);
  };

  const showPopupSuccess = (email, pedidoId, title, message) => {
    customSwalert.fire({
      title: title,
      html: `<div class='modal-body'><p>${message}</p><br /><p>El número identificador de tu pedido es: <b>${pedidoId}</b></p><p>Te enviaremos un email a <b>${email}</b> con los detalles.</p></div>`,
      icon: "success",
      allowEscapeKey: true,
      showConfirmButton: false,
      showCloseButton: true,
    });
  };

  const showPopupError = (message) => {
    customSwalert.fire({
      title: "Error al cargar los datos",
      html: `<div class='modal-body'><br /><p>${message}</p><br /><p>* Compruebe que completó todos los datos solicitados y recuerde marcar la casilla de pago del final.</p></div>`,
      icon: "error",
      allowEscapeKey: true,
    });
  };

  const createPedidoData = () => {
    const cliente = {
      nombre: values.nombre,
      apellido: values.apellido,
      email: values.email,
      telefono: values.telefono,
      direccion: values.direccion,
      ciudad: values.ciudad,
      provincia: values.provincia,
      codigoPostal: values.codigoPostal,
    };

    const items = cart.map((item) => ({
      id: item.id,
      nombre: item.nombre,
      cantidad: item.cantidad,
      precio: item.precio,
      imagen: item.imagen,
    }));

    const fecha = new Date().toLocaleDateString();
    const total = totalPrice();
    const cantidadItems = getTotalItems();
    return { cliente, items, fecha, total, cantidadItems };
  };

  const validateForm = (event) => {
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      showPopupError("Formulario inválido, no se puede enviar el pedido.");
    } else {
      const pedido = createPedidoData();
      const precioEnvio = getPrecioEnvio(values.provincia);
      mandarPedido(pedido, precioEnvio);
    }
    form.classList.add("was-validated");
  };

  const isEmptyCart = cart.length === 0;

  const mandarPedido = (pedido, precioEnvio) => {
    const db = getFirestore();
    const pedidosCollection = collection(db, "pedidos");
    const pedidoConEnvio = { ...pedido, precioEnvio: precioEnvio };
    addDoc(pedidosCollection, pedidoConEnvio)
      .then((docRef) => {
        setPedidoId(docRef.id);
        showPopupSuccess(
          values.email,
          docRef.id,
          "Compra confirmada",
          "Muchas gracias por tu compra!"
        );
      })
      .catch((error) => {
        console.error("Error: ", error);
        showPopupError(
          "Hubo un error al procesar el pedido. Inténtelo nuevamente más tarde."
        );
      });
  };

  const renderEmptyCart = () => (
    <div className="d-flex align-items-center flex-column mb-3">
      <h1 className="text-center text-black m-5">No tienes ningún producto</h1>
      <Link to="/" className="btn btn-dark btn-jif bg-black zoomy">
        Tienda
      </Link>
    </div>
  );

  const renderElementItems = () => (
    <>
      <BackNavigator />
      <article>
        <div className="row gap-3 px-3 justify-content-evenly left-col">
          <div id="columnaIzquierda" className="col-8 px-0">
            <CheckoutForm
              handleForm={handleForm}
              handleInputChange={handleInputChange}
              values={values}
            />
          </div>
          <div id="columnaDerecha" className="col-3 px-0">
            <CheckoutSummary
              cartItems={cart.map((item) => (
                <CheckoutItem {...item} key={item.id} />
              ))}
              totalItems={getTotalItems()}
              totalPriceValue={totalPrice()}
              valorEnvio={valorEnvio}
            />
          </div>
        </div>
      </article>
    </>
  );

  return (
    <>
      <div className="container-fluid">
        {isEmptyCart ? renderEmptyCart() : renderElementItems()}
      </div>
    </>
  );
};

export default Checkout;
