import React from "react";
import './testimonials.css'
import Quotation from "../../assets/Quotatio-vector.svg";
import Client1 from "../../assets/client1-img.png";
import Client2 from "../../assets/client2-img.png";
import Client3 from "../../assets/client3-img.png";
import Zoom from 'react-reveal/Zoom';



const Testimonials = () => {
  return (
    <section id="testimonials">

      <div class="testimonial-top">
        <h2 class="orange-text">Testimonials</h2>
        <h1>What Clients Say About Me</h1>
        <p class="testimonial-message">I have worked with many clients far and near, with various needs and problems to resolve, and I can boldly say that I always deliver.</p>
        <div class="quotation-icon"><Zoom top><img class="quotation-vector" src={Quotation} alt="quotation"/></Zoom></div>
      </div>

      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="d-block w-100 testimonial-client">
                <h6 class="testimonial-text">Nath partnered with us to reimagine Msport design system and our team could not be happier. He is highly organized, malleable to team feedback yet principled, and the deliverables he helped us produce will absolutely help accelerate the velocity and collaboration.</h6>
                <div class="client-info">
                  <img class="chibu-img" src={Client1} alt="chuks-pics"/>
                  <div class="client-main">
                    <h3 class="testimonial-h3">Godson Chibuzo</h3>
                    <p class="testimonial-info">Devop Engineer</p>
                  </div>
                </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-block w-100 testimonial-client">
                <h6 class="testimonial-text">Without doubt one of the most talented front-end developer out there.  I always go back to Nathaniel when I'm out of my depth and he's never failed to deliver what I ask for. Smart, trustworthy and professional.  You won't be disappointed.</h6>
                <div class="client-info">
                  <img class="chibu-img" src={Client2} alt="chuks-pics"/>
                  <div class="client-main">
                    <h3 class="testimonial-h3">Alan Ckuks</h3>
                    <p class="testimonial-info">Project Manager</p>
                  </div>
                </div>
            </div> 
          </div>
          <div class="carousel-item">
            <div class="d-block w-100 testimonial-client">
                <h6 class="testimonial-text">Nath was very helpful and fast to respond to my inquiry to help with Wordpress website issues.  His knowledge was comprehensive.  Even better, his advice helped me enough to solve the problems and he did not accept any payment for this, very straight up guy. Thank you Nath.</h6>
                <div class="client-info">
                  <img class="chibu-img" src={Client3} alt="chuks-pics"/>
                  <div class="client-main">
                    <h3 class="testimonial-h3">Oluchi Achunike</h3>
                    <p class="testimonial-info">Software Engineer</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      

    </section>
  )
}

export default Testimonials