import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import { Card, Container, Navbar,Row,Col, Button } from "react-bootstrap"
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {

  return (
    <>
   
     <Nav/>
     <Home/>
    <About/>
    <Services/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
