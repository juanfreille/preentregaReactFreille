import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { FaTrashAlt } from "react-icons/fa";

const CartViewList = ({ cart, handleRemove }) => {
  return (
    <div className="border border-1 bg-white">
      <div className="text-black antiquewhite p-2">
        <h4>Productos en carrito</h4>
      </div>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="d-flex border-bottom py-3">
            <Link to={`/item/${item.id}`}>
              <img
                className="carrito21BoxCol1"
                src={`${item.imagen}`}
                alt={item.nombre}
              />
            </Link>
            <div className="carrito21BoxCol2">
              <h4 className="tituloNombreCart">{item.nombre}</h4>
              <h5 className="texto-s mt-2">
                Precio x unidad:&nbsp; $
                <strong>{item.precio.toLocaleString()}</strong>
              </h5>
              <h5 className="texto-s mt-5">
                Unidades:&nbsp;&nbsp;<strong>{item.cantidad}</strong>
              </h5>
              <h5 className="texto-s mt-3">
                Precio x lote ({item.cantidad}):&nbsp; $
                <strong>
                  {(item.precio * item.cantidad).toLocaleString()}
                </strong>
              </h5>
            </div>
            <div className="textRemovers">
              <Dropdown as={ButtonGroup}>
                <Button variant="dark">
                  <FaTrashAlt style={{ marginTop: -3 }} /> Eliminar
                </Button>

                <Dropdown.Toggle
                  split
                  variant="dark"
                  id="dropdown-split-basic"
                />
                <Dropdown.Menu variant="dark">
                  <Dropdown.Item onClick={() => handleRemove(item.id, true)}>
                    Todas las unidades ({item.cantidad})
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleRemove(item.id)}>
                    Una sola unidad (1)
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartViewList;
