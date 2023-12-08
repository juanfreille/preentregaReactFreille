import React from "react";
import { Link } from "react-router-dom";

const CheckoutSummary = ({
  cartItems,
  totalItems,
  totalPriceValue,
  valorEnvio,
}) => {
  return (
    <div className="border border-1">
      <div className="p-2 text-black antiquewhite d-flex justify-content-between align-items-center">
        <h4 className="mb-0">Resumen de compra</h4>
        <Link to="/carrito">
          <p className="mb-0 text-decoration-underline fs-6 text-black">
            Editar
          </p>
        </Link>
      </div>
      <div className="bg-white overflow">{cartItems}</div>
      <div className="p-3 antiquewhite">
        <h4 className="mb-0">Detalle de compra</h4>
      </div>
      <div>
        <table className="table table-borderless">
          <tbody>
            <tr>
              <td className="col-10 fs-14">Total de productos:</td>
              <td className="col-12 fs-14 text-end">{totalItems}</td>
            </tr>
            <tr>
              <td className="col-10 fs-14">Subtotal: </td>
              <td className="col-2 fs-14 text-end">
                ${totalPriceValue.toLocaleString()}
              </td>
            </tr>
            <tr>
              <td className="col-10 fs-14">Envío: </td>
              <td className="col-2 fs-14 text-end">
                ${valorEnvio.toLocaleString()}
              </td>
            </tr>
            <tr>
              <td className="col-10">Total estimado:</td>
              <td className="col-2 text-end">
                ${(totalPriceValue + valorEnvio).toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckoutSummary;
