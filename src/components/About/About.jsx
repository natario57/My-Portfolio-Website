import React from "react";
import './about.css'
import Round from "../../assets/Round.svg";
import Second from "../../assets/Second-Photo.png";
import Projects from "../../assets/200-Projects.svg";
import Years from "../../assets/5-Years.svg";
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <section id="about">
    <div class="row about-container">
      <div class="col-lg-6 image-icons">
        <h2 class="orange-text">About Me</h2>
        <div class="rope-icon"><img class="my-rope" src={Round} alt="Rope"/></div>
        <div class="about-image"><img class="second-image" src={Second} alt="my-picture"/></div>
        <div class="project-icon"><Fade right><img class="my-projects" src={Projects} alt="ptojects"/></Fade></div>
        <div class="years-icon"><Fade left><img class="my-years" src={Years} alt="years"/></Fade></div>
      </div>

      <div class="col-lg-6 about-right">
        <div class="about-writeup">
          <h3 class="orange-text">I am a designer</h3>
          <h1>I am very passionate about solving UX problems</h1>
          <p class="about-p">I am a product designer and a front-end developer, my
          artistic experience gives me the unique ability to apply
          design in all its forms to business processes. I have over
          4 year of experience in user-centered design, user
          research, design thinking and strategy, with 2years of
          experience in front-end development, my design tools
          include Figma, Illustrator, Invision, HTML, CSS, Bootstrap and React.</p>
          <div class="hire-media">
            <Fade bottom><button type="button" class="hire-me"><a href="#contact">Hire Me</a></button></Fade>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About