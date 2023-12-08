import { Link } from "react-router-dom";

const CheckoutItem = ({ imagen, nombre, cantidad, precio, id }) => {
  return (
    <div className="d-flex border-bottom py-3">
      <div className="col-4" style={{ padding: "10px" }}>
        <Link to={`/item/${id}`}>
          <img className="img-fluid" src={imagen} alt={nombre} width="90" />
        </Link>
      </div>
      <div className="col-8" style={{ padding: "8px 20px 8px 12px" }}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="fs-14 mb-0">{nombre}</h5>
          <p className="fs-14 mb-0">${(cantidad * precio).toLocaleString()}</p>
        </div>
        <p style={{ fontSize: "14px" }}>Cantidad: {cantidad}</p>
      </div>
    </div>
  );
};

export default CheckoutItem;
