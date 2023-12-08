import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <>
      <div className="loading d-flex justify-content-center">
        <Spinner
          style={{ width: "5rem", height: "5rem", margin: "10% 0 0 0" }}
          animation="border"
          variant="primary"
          role="status"
        >
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </div>
    </>
  );
};

export default Loading;
