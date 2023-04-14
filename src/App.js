import React from "react";
import "./App.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Carousel from "react-bootstrap/Carousel";
import img from "./img/img2.png";
import { gsap } from "gsap";

import Card from "react-bootstrap/Card";

const logotipo = [
  <img
    src="https://logodownload.org/wp-content/uploads/2015/02/carrefour-logo-1-1.png"
    width="100"
    height="80"
  />,
];

export default function App() {
  return (
    <div>
      <NavScrollExample />
      <Headerzinho />
      <MeuCarousel />
      <Foterzinho />
      <div className="center">
        <div>
          <h1>Produtos</h1>
          <Espacamento />
          <Cardizinho />
          <Espacamento />
        </div>
      </div>
    </div>
  );
}

function NavScrollExample() {
  const [teste, setTeste] = useState(false);
  return (
    <div className={teste ? "seguradora" : "seguradora-responsive"}>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className="logo">
            {logotipo[0]}
          </Navbar.Brand>

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
              <Nav.Link href="#action1" style={{ color: "#009966" }}>
                <nav className="texsize">Home</nav>
              </Nav.Link>
              <Nav.Link href="#action2" style={{ color: "#009966" }}>
                <nav className="texsize">Ofertas e Cupões</nav>
              </Nav.Link>

              <Nav.Link href="action3" style={{ color: "#009966" }}>
                <nav className="texsize">Carrinho</nav>
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
            <Button variant="outline-success">Search</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

function MeuCarousel() {
  return (
    <Container>
      <Carousel style={{ height: 340 }}>
        <Carousel.Item style={{ height: 500 }}>
          <img
            className="d-block w-100"
            src="https://static.clubeextra.com.br/static/ex/1680618252835-desk-230404-tvflash-desk-ext-nestle.jpg?im=Resize,width=1600"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: 500 }}>
          <img
            className="d-block w-100"
            src="https://static.clubeextra.com.br/static/ex/1680551953357-desk-230404-desk-carrossel-pascoa-vinhos.jpg?im=Resize,width=1600"
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: 500 }}>
          <img
            className="d-block w-100"
            src="https://static.clubeextra.com.br/static/ex/1680552764050-desk-230404-desk-carrossel-pascoa-adc.jpg?im=Resize,width=1600"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: 500 }}>
          <img
            className="d-block w-100"
            src="https://static.clubeextra.com.br/static/ex/1680551811532-desk-230404-desk-carrossel-pascoa-bacalhau.jpg?im=Resize,width=1600"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: 500 }}>
          <img
            className="d-block w-100"
            src="https://static.clubeextra.com.br/static/ex/1679422327898-desk-230321-desk-carrossel-feiradaeconomia-frete.jpg?im=Resize,width=1600"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: 500 }}>
          <img
            className="d-block w-100"
            src="https://static.clubeextra.com.br/static/ex/1680776664008-desk-230405-tvflash-desk-industria-scj.jpg?im=Resize,width=1600"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

function Headerzinho() {
  return (
    <div className="imagenComeco">
      <div className="primeiraImagen"></div>
      <div className="segundaImagen">
        <h1></h1>
      </div>
    </div>
  );
}

function Foterzinho() {
  return (
    <div className="imagenComeco">
      <div className="primeiraImagen2"></div>
    </div>
  );
}

function Cardizinho() {
  return (
    <Container fluid className="flex-grow-1 pe-3 teste  w-100 asd">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://assets.revistacultivar.com.br/391ac-Morango---Wenderson-Araujo---CNA.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img className="tamnahoImg" variant="top" src="https://www.tirol.com.br/wp-content/uploads/apollo13_images/leites-2-1-6xiu5n1uub8j8znt1h9bg160b8y8cgkc4a.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img className="tamnahoImg" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyEaR74Z-HOdiHtD_gYBYf9awibzwGqirSPciqnMfW4HjqaBymmt8r4Q1B8DicDTveko&usqp=CAU" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img className="tamnahoImg" variant="top" src="https://www.portaldbo.com.br/wp-content/uploads/2022/02/carne-premium_destaque.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img className="tamnahoImg" variant="top" src="https://m.media-amazon.com/images/I/811pHh7hYfL._AC_SX425_.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

function Espacamento() {
  return <div className="espaco"></div>;
}
