import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBarItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Pantalones",
    path: "/category/pantalones/",
  },
  {
    label: "Buzos",
    path: "/category/buzos/",
  },
];

function NavBar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };
    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeNavCollapse = () => {
    setIsNavCollapsed(true);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary fixed-top"
      expanded={!isNavCollapsed}
    >
      <Container>
        {!isSmallScreen && (
          <Navbar.Brand className="mx-auto" as={Link} to="/">
            <img
              src="https://i.ibb.co/b57zjNG/Logo-bg.webp"
              width="84"
              height="43"
              alt="logo de jifstyle"
            />
          </Navbar.Brand>
        )}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleNavCollapse}
        />
        {isSmallScreen && (
          <Navbar.Brand className="mx-auto" as={Link} to="/">
            <img
              src="https://i.ibb.co/b57zjNG/Logo-bg.webp"
              width="84"
              height="43"
              alt="logo de jifstyle"
            />
          </Navbar.Brand>
        )}
        {isSmallScreen && <CartWidget />}

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={`navbar-collapse justify-content-center ${
            isNavCollapsed ? "collapse" : ""
          }`}
        >
          <Nav className="uppercase letterspace-1 col-11 justify-content-center">
            {NavBarItems.map((item) => (
              <Nav.Link
                as={Link}
                to={item.path}
                key={item.label}
                onClick={closeNavCollapse}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        {!isSmallScreen && <CartWidget />}
      </Container>
    </Navbar>
  );
}

export default NavBar;
