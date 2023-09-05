import React from "react";
import './services.css'
import UI from "../../assets/UI-image.png";
import Graphics from "../../assets/Graphics-image.png";
import Painting from "../../assets/painting-image.png";
import Web from "../../assets/web-image.png";
import Research from "../../assets/research-image.png";
import Develop from "../../assets/develop-image.png";
import Fade from 'react-reveal/Fade';



const Services = () => {
  return (
    <section id="services">
    <div class="services-top">
      <h2 class="orange-text">Sevices</h2>
      <h1>I Have A Lot To Offer You</h1>
      <p class="service-message">I am very experienced at providing design and development services, and I aim at ensuring the optimal satisfaction of my clients.</p>
    </div>

    <div class="row g-8 services-group">
      <div class="col-md-6 col-lg-4 portfolio-card">
        <Fade bottom>
          <div class="card service-card-design">
            <div class="top-service-img">
              <img src={UI} class="service-img" alt="..."/>
            </div>
            <div class="card-body services-body">
              <h3 class="card-title">UI/UX Design</h3>
              <p class="service-text">Creating user-centered designs for easy navigation</p>
            </div>
          </div>
        </Fade>
      </div>

      <div class="col-md-6 col-lg-4 portfolio-card">
        <Fade bottom>   
          <div class="card service-card-design">
            <div class="top-service-img">
              <img src={Graphics} class="service-img" alt="..."/>
            </div>
            <div class="card-body services-body">
              <h3 class="card-title">Graphics Design</h3>
              <p class="service-text">Applies all graphics rules to deliver appealing design</p>
            </div>
          </div>
        </Fade>
      </div>

      <div class="col-md-6 col-lg-4 portfolio-card">
        <Fade bottom>
          <div class="card service-card-design">
            <div class="top-service-img">
              <img src={Painting} class="service-img" alt="..."/>
            </div>
            <div class="card-body services-body">
              <h3 class="card-title">Charcoal Painting</h3>
              <p class="service-text">Have been into the industry of charcoal drawing for years.</p>
            </div>
          </div>
        </Fade>
      </div>

      <div class="col-md-6 col-lg-4 portfolio-card">
        <Fade bottom>
          <div class="card service-card-design">
            <div class="top-service-img">
              <img src={Web} class="service-img" alt="..."/>
            </div>
            <div class="card-body services-body">
              <h3 class="card-title">Website Design</h3>
              <p class="service-text">Creates a captivating website that suits your business</p>
            </div>
          </div>
        </Fade>
      </div>

      <div class="col-md-6 col-lg-4 portfolio-card">
        <Fade bottom>
          <div class="card service-card-design">
            <div class="top-service-img">
              <img src={Research} class="service-img" alt="..."/>
            </div>
            <div class="card-body services-body">
              <h3 class="card-title">User Research</h3>
              <p class="service-text">I always try to identify the preoblems before solving them</p>
            </div>
          </div>
        </Fade>
      </div>

      <div class="col-md-6 col-lg-4 portfolio-card">
        <Fade bottom>
          <div class="card service-card-design">
            <div class="top-service-img">
              <img src={Develop} class="service-img" alt="..."/>
            </div>
            <div class="card-body services-body">
              <h3 class="card-title">Front-end development</h3>
              <p class="service-text">With my vast design experience, I deliver exellent work</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
    
  </section>
  )
}

export default Services