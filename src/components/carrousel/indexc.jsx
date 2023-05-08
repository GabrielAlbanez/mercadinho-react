import React from 'react'
import '../../App.css'
import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Carousel from "react-bootstrap/Carousel";
// import img from "./img/img2.png";
import { gsap } from "gsap";

import Card from "react-bootstrap/Card";

export default function indexc() {
  return (
    <div>
<MeuCarousel/>

    </div>
  )
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