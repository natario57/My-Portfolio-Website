import React from "react";
import './navbar.css'
import Logo from "../../assets/Main-Logo.png";
import Cv from "../../assets/Nathaniel-CV.pdf";
import Fade from 'react-reveal/Fade';

const Navbar = () => {
  return (
    <section id='navbar'>

      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid nav-container">
          <Fade top>
            <a class="navbar-brand" href="#"><img class="main-logo" src={Logo} alt="Logo"/></a>
          </Fade>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#hero">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#services">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#blog">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">contact</a>
              </li>
              <li class="nav-item download">
                <button type="button" class="download-cv"> <a href={Cv} download>Download CV</a></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar