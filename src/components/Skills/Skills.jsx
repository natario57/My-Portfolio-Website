import React from "react";
import './skills.css'
import Showcase from "../../assets/Skills-showcase.svg";
import Office from "../../assets/Office.png"
import Fade from 'react-reveal/Fade';


const Skills = () => {
  return (
    <section id="skills">
    <div class="row">
      <div class="col-lg-6 left-skills">
        <h2 class="orange-text">My Skills</h2>
        <h1>My Software Skills</h1>
        <p class="skills-p">These are some of the softwares I am experienced in, they help me to achieve my design and development goals.</p>
        <Fade left>
          <div class="skills-image"><img class="skills-showcase" src={Showcase} alt="my-skills"/></div>
        </Fade>
      </div>

      <div class="col-lg-6 right-skills">
        <div class="office-image"><img class="office-img-image" src={Office} alt="office-picture"/></div>
      </div>
    </div>
  </section>
  )
}

export default Skills