import React from "react";
import  estilzar from  "../../App.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Carousel from "react-bootstrap/Carousel";
import img from "../../img/img.png";
import img2 from "../../img/img2.png";
import { gsap } from "gsap";
import Card from "react-bootstrap/Card";
import { Link, useLocation } from "react-router-dom";

const logotipo = [
  <img
    src="https://logodownload.org/wp-content/uploads/2015/02/carrefour-logo-1-1.png"
    width="100"
    height="80"
  />,
];



export default function Index() {
  return (
    <div>
      <NavScrollExample />
    </div>
  );
}

function NavScrollExample() {
  const [teste, setTeste] = useState(false);
  const local = useLocation()
 


  return (
    <div className={teste ? "seguradora" : "seguradora-responsive"}>
      <Navbar expand="lg">
        <Container fluid>
          <Link to={"/"}>
          <Navbar.Brand href="#" className="logo">
            {logotipo[0]}
          </Navbar.Brand>
          </Link>

          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={() => {
              teste === false ? setTeste(true) : setTeste(false);
              gsap.fromTo(
                ".logo",
                { opacity: 0, x: -100 },
                { opacity: 1, x: 0, duration: 1 }
              );

              gsap.fromTo(
                ".seguradora",
                { opacity: 0, y: 0 },
                { opacity: 1, y: 0, duration: 0.4 }
              );
            }}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="flex-grow-1 pe-3 teste"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" style={{ color: "#044ca4" }}>
                <Link to={'/'} className={
                  `
                ${estilzar.link}
                ${local.pathname === "/" ? estilzar.linkEstilizado : ""}
                
                `}>
                  <nav className="texsize">Home</nav>
                </Link>
              </Nav.Link>
              <Nav.Link href="#action2" style={{ color: "#044ca4" }}>
                <Link to={'/ofertas'} className={
                  `
                ${estilzar.link}
                ${local.pathname === "/ofertas" ? estilzar.linkEstilizado : ""}
                
                `}>
                  <nav className="texsize">OFertas e Cupões</nav>
                </Link>
              </Nav.Link>

              <Nav.Link href="action3" style={{ color: "#044ca4" }}>
                <Link to={'/carrinho'} className={
                  `
                ${estilzar.link}
                ${local.pathname === "/carrinho" ? estilzar.linkEstilizado : ""}
                
                `}>
                  <nav className="texsize">Carrinho</nav>
                </Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex pt-2 pb-2">
              {/* <Form className="d-flex p-3 flex-column"> */}
              <Form.Control
                type="search"
                placeholder="Procurar Produtos"
                className="me-3"
                aria-label="Search"
              />
            </Form>
            <Button variant="outline-primary"  >Search</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
