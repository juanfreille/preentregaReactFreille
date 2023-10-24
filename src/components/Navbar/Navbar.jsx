import React from "react";

const Navbar = () => {
  return (
    <nav>
      <input type="checkbox" id="header__check" />
      <label htmlFor="header__check" className="bar-btn">
        <i className="fa fa-bars"></i>
      </label>
      <ul className="header__nav-menu texto-xs">
        <li>
          <a href="./index.html">
            <i className="fa fa-envelope fa-mio"></i>Administrar Ropa (ADMIN)
          </a>
        </li>
        <li>
          <a href="./index.html" className="header__pagina-activa">
            <i className="fa fa-shop fa-mio"></i>Tienda
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
