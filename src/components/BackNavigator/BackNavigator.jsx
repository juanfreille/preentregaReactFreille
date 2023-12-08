import React from "react";
import { Link } from "react-router-dom";

const BackNavigator = () => {
  return (
    <div className="row">
      <div className="m-2">
        <div className="d-flex justify-content-center align-items-center my-3">
          <Link to="/" className="btn btn-effect btn-dark btn-jif bg-black ">
            <span title="Continuar comprando">&#9668; Continuar comprando</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BackNavigator;
