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
import img from "./img/img2.png";
import { gsap } from "gsap";

import Card from "react-bootstrap/Card";
export default function index() {
  return (
    <div>

    <Headerzinho/>
    </div>
  )
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