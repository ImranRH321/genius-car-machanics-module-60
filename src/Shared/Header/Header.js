import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="primary"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img height={30} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="home#service">Service</Nav.Link>
              <Nav.Link href="home#expert">Experts</Nav.Link>
            
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            {
              user && <>
                  <Nav.Link as={Link} to="/addservice">
                AddService
              </Nav.Link>
                   <Nav.Link as={Link} to="/manges">
                MangeService
              </Nav.Link>
              </>
            }
              {user ? (
                <button onClick={logOut} class="btn btn-danger">
                  SignOut
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
