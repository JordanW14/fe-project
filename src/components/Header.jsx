import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";
import { Container } from "react-bootstrap";
import logo from "../assets/NC_Logo.png";

const Header = () => {
    return (
      <>
        <Navbar expand="lg" className="custom-navbar">
          <Container fluid>
            <Navbar.Brand href="#home" className="d-flex align-items-center">
              <img
                alt="Northcoders logo"
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-top me-3"
              />
            </Navbar.Brand>
              <Nav className="me-auto">
                <Link to="/articles" className="custom-text">
                  Articles
                </Link>{" "}
                <Link to="/topics" className="custom-text">
                  Topics
                </Link>{" "}
              </Nav>
  
              <Nav className="ms-auto d-flex align-items-center">
              </Nav>
          </Container>
        </Navbar>
      </>
    );
  };
  
  export default Header;