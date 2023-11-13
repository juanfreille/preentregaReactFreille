import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="../src/assets/Logo-bg.webp"
            width="84"
            height="43"
            alt="logo de jifstyle"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/category/pantalones/">
            Pantalones
          </Nav.Link>
          <Nav.Link as={Link} to="/category/buzos/">
            Buzos
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
