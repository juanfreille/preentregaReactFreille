import React from "react";
import { Link } from "react-router-dom";

const CartDetailList = ({ totalItems, totalPriceValue }) => {
  return (
    <div className="col-3">
      <div className="border border-1 bg-white">
        <div className="p-2 text-black antiquewhite">
          <h4>Detalle de compra</h4>
        </div>
        <div>
          <table className="table table-borderless align-middle">
            <tbody>
              <tr>
                <td className="col-10 fs-14">Cantidad de productos:</td>
                <td className="col-12 fs-14 text-end">{totalItems}</td>
              </tr>
              <tr>
                <td className="col-10 fs-14">Subtotal: </td>
                <td className="col-2 fs-14 text-end">
                  ${totalPriceValue.toLocaleString()}
                </td>
              </tr>
              <tr>
                <td className="col-10 fs-14">Descuento: </td>
                <td className="col-2 fs-14 text-end">$0.00</td>
              </tr>
              <tr className="">
                <td className="col-10">Total:</td>
                <td className="col-2 text-end">
                  ${totalPriceValue.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="iniciarCompra">
        <Link
          to="/checkout"
          className="btn btn-effect btn-dark btn-jif bg-black px-5 uppercase"
        >
          Iniciar Compra
        </Link>
      </div>
    </div>
  );
};

export default CartDetailList;
