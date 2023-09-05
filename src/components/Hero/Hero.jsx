import React from "react";
import './hero.css'
import Me from "../../assets/Me-photo.png";
import Illustrator from "../../assets/Illustrator.svg";
import Invision from "../../assets/Invision.svg";
import Figma from "../../assets/Figma.svg";
import Shapes from "../../assets/Shapes.svg";
import Middle from "../../assets/Middle.svg";
import Typed from "react-typed";
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, } from '@fortawesome/free-brands-svg-icons';
import { faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn, } from '@fortawesome/free-brands-svg-icons';
import { faBehance, } from '@fortawesome/free-brands-svg-icons';


const Hero = () => {
  return (
    <section id="hero">

      <div class="row">
          <div class="col-lg-6 hero-writeup">
            <h3>Hello, I am</h3>
            <h1>Nathaniel Akobundu</h1> 
            <h3>A
              <span>
                <Typed
                  class="typed-text"
                  strings={["UI/UX Designer", "FrontEnd Developer", "Graphics Designer"]}
                  typeSpeed={80}
                  backSpeed={60}
                  loop
                />
              </span> From Lagos
            </h3>
            <p class="hero-p">I am a product designer and a front-end developer based in Lagos,<br /> I create experiences that make people's lives simple.</p>
            <div class="about-media">
              <Fade left><button type="button" class="about-me"> <a href="#about">About Me</a></button></Fade>
              <a class="hero-socials" href="https://github.com/natario57" target='_blank'><FontAwesomeIcon icon={faGithub} size="lg" style={{color: "#ffffff",}} /></a>
              <a class="hero-socials" href="https://instagram.com/natario57?igshid=MzNlNGNkZWQ4Mg==" target='_blank'><FontAwesomeIcon icon={faInstagram} size="lg" style={{color: "#ffffff",}} /></a>
              <a class="hero-socials" href="https://www.linkedin.com/in/nathaniel-akobundu-68a7b3118/" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} size="lg" style={{color: "#ffffff",}} /></a>
              <a class="hero-socials" href="https://www.behance.net/udochukakobund" target='_blank'><FontAwesomeIcon icon={faBehance} size="lg" style={{color: "#ffffff",}} /></a>
            </div>
          </div>
        <div class="col-lg-6 image-icons">
          <div class="hero-image"><img class="my-image" src={Me} alt="my-picture"/></div>
          <div class="illustrator-icon hero-svg"><img class="my-illustrator" src={Illustrator} alt="AI"/></div>
          <div class="invision-icon hero-svg"><img class="my-invision" src={Invision} alt="invision"/></div>
          <div class="figma-icon hero-svg"><img class="my-figma" src={Figma} alt="figma"/></div>
          <div class="shape-icon"><img class="my-shape" src={Shapes} alt="angles"/></div>
          <div class="middle-icon"><img class="my-middle" src={Middle} alt="middle"/></div>
        </div>
      </div>

    </section>
  )
}

export default Hero