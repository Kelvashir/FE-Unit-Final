import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Login from "./Login";

const MainNavigation = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const navLinks = [
    { to: "/home", text: "Home" },
    { to: "/parts-orders", text: "Work With Parts Orders" },
    { to: "/customers", text: "Customer Look Up" },
  ];

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to="/home" className="navbar-brand">
            Flow Control
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {navLinks.map((link, index) => (
                <Link key={index} to={link.to} className="nav-link">
                  {link.text}
                </Link>
              ))}
              <Nav.Link onClick={handleLoginClick}>Log In</Nav.Link>
              {/* <Nav.Link href="#link">Another Link</Nav.Link>

                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Login showModal={showLoginModal} onClose={handleCloseLoginModal} />
    </>
  );
};

export default MainNavigation;
