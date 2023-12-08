import React from "react";
import provincias from "/data/provincias.js?url";

const CheckoutForm = ({ handleForm, handleInputChange, values }) => {
  const renderCustomerInformation = () => {
    return (
      <div className="border border-1 bg-white">
        <div className="p-2 text-black antiquewhite">
          <h4>Datos de cliente</h4>
        </div>
        <div>
          <div className="px-3 my-3">
            <div className="row g-3">
              <div className="col-sm-6">
                <label className="form-label fs-12">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  maxLength="30"
                  placeholder="Ingrese su nombre"
                  className="form-control texto-s"
                  onChange={handleInputChange}
                  value={values.nombre}
                  required
                />
                <div className="invalid-feedback">
                  Por favor ingrese un nombre
                </div>
              </div>
              <div className="col-sm-6">
                <label className="form-label fs-12">Apellido</label>
                <input
                  type="text"
                  name="apellido"
                  maxLength="25"
                  placeholder="Ingrese su apellido"
                  className="form-control texto-s"
                  value={values.apellido}
                  onChange={handleInputChange}
                  required
                />
                <div className="invalid-feedback">
                  Por favor ingrese un apellido
                </div>
              </div>
              <div className="col-sm-6">
                <label className="form-label fs-12">Email</label>
                <input
                  value={values.email}
                  name="email"
                  type="email"
                  maxLength="30"
                  placeholder="Ingrese su email"
                  className="form-control texto-s"
                  onChange={handleInputChange}
                  required
                />
                <div className="invalid-feedback">
                  Por favor ingrese un email
                </div>
              </div>
              <div className="col-sm-6">
                <label className="form-label fs-12">Número de teléfono</label>
                <input
                  type="number"
                  name="telefono"
                  maxLength="25"
                  placeholder="Ingrese su teléfono"
                  className="form-control texto-s"
                  value={values.telefono}
                  onChange={handleInputChange}
                  required
                />
                <div className="invalid-feedback">
                  Por favor ingrese un número de teléfono
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderShippingDetails = () => {
    return (
      <div className="border border-1 bg-white">
        <div className="p-2 text-black antiquewhite">
          <h4>Información de envío</h4>
        </div>
        <div>
          <div className="px-3 my-3">
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label fs-12">Dirección</label>
                <input
                  type="text"
                  name="direccion"
                  maxLength="35"
                  placeholder="Ingrese su dirección"
                  className="form-control texto-s"
                  value={values.direccion}
                  onChange={handleInputChange}
                  required
                />
                <div className="invalid-feedback">
                  Por favor ingrese una dirección
                </div>
              </div>
              <div className="col-12">
                <label className="form-label fs-12">Ciudad</label>
                <input
                  type="text"
                  name="ciudad"
                  placeholder="Ingrese su ciudad"
                  maxLength="25"
                  className="form-control texto-s"
                  value={values.ciudad}
                  onChange={handleInputChange}
                  required
                />
                <div className="invalid-feedback">
                  Por favor ingrese una ciudad
                </div>
              </div>
              <div className="col-sm-6">
                <label className="form-label fs-12">Provincia</label>
                <select
                  className="form-select"
                  name="provincia"
                  value={values.provincia}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Seleccionar provincia
                  </option>
                  {provincias.map((provincia) => (
                    <option key={provincia.cod} value={provincia.name}>
                      {provincia.name}
                    </option>
                  ))}
                </select>
                <div className="invalid-feedback">
                  Por favor seleccione una provincia
                </div>
              </div>
              <div className="col-sm-6">
                <label className="form-label fs-12">Código postal</label>
                <input
                  type="text"
                  name="codigoPostal"
                  maxLength="15"
                  placeholder="Ingrese su código postal"
                  className="form-control texto-s"
                  value={values.codigoPostal}
                  onChange={handleInputChange}
                  required
                />
                <div className="invalid-feedback">
                  Por favor ingrese un código postal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderPaymentInformation = () => {
    return (
      <div className="border border-1 bg-white">
        <h2 className="">
          <div className="p-2 text-black antiquewhite">
            <h4>Forma de pago</h4>
          </div>
        </h2>
        <div className="px-3 my-3">
          <div className="px-3 my-3">
            <div>
              <div>Medios de pago:</div>
              <div>
                <span
                  role="img"
                  className="ux-textspans ux-textspans--PAYPAL"
                ></span>
                <span>&nbsp;</span>
                <span
                  role="img"
                  className="ux-textspans ux-textspans--GOOGLE_PAY"
                ></span>
                <span>&nbsp;</span>
                <span
                  role="img"
                  className="ux-textspans ux-textspans--VISA"
                ></span>
                <span>&nbsp;</span>
                <span
                  role="img"
                  className="ux-textspans ux-textspans--MASTER_CARD"
                ></span>
                <span>&nbsp;</span>
                <span
                  role="img"
                  className="ux-textspans ux-textspans--AM_EX"
                ></span>
              </div>
            </div>

            <div className="form-check my-4">
              <input
                type="checkbox"
                name="checkPay"
                className="form-check-input"
                required
              />
              <label className="form-check-label">
                Haz clic para marcar como pagado.
              </label>
            </div>
            <hr className="my-2" />
            <div className="d-flex justify-content-center align-items-center">
              <button
                type="submit"
                className="btn btn-dark btn-effect btn-jif bg-black bg-black px-5 fs-14"
              >
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <form onSubmit={handleForm} className="needs-validation" noValidate>
      {renderCustomerInformation()}
      {renderShippingDetails()}
      {renderPaymentInformation()}
    </form>
  );
};

export default CheckoutForm;
