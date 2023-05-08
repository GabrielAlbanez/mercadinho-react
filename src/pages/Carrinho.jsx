import React from 'react'
import Index from '../components/navbar/Index'
import Indexh from '../components/header/indexh'
import Indexc from '../components/carrousel/indexc'
import Indexf from '../components/footer/indexf'
import IndexCard from '../components/card/indexCard'
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Carousel from "react-bootstrap/Carousel";
import { gsap } from "gsap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function Carrinho() {
  return (
    <div>
    <Index/>

    </div>
  )
}