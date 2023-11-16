import React from "react";
import './portfolio.css'
import Workit from "../../assets/workit.png";
import Letterhead from "../../assets/SG-Letterhead.png";
import Aqua7even from "../../assets/Aqua7even.png";
import Cove from "../../assets/Da-Cove.png";
import Carvera from "../../assets/Carvera-care.png";
import Mikel from "../../assets/mikel-portrait.png";
import Famboree from "../../assets/Famboree.png";
import Ethos from "../../assets/Ethos.png";
import Polar from "../../assets/Polar.png";
import Guideline from "../../assets/Design-guideline.png";
import Code from "../../assets/Code-image.png";
import Wireframe from "../../assets/Wireframe.png";
import First from "../../assets/First-design.png";
import Last from "../../assets/Last-design.png";






const Portfolio = () => {
  return (
  <section id="portfolio">
    <div class="portfolio-top">
      <h2 class="orange-text">Portfolio</h2>
      <h1>My Amazing Works</h1>
      <p class="portfolio-message">Most of my great jobs delivered successfuly to clients arranged for your great view and interet, kindly see where I can help you with</p>
    </div>

    <div class="row g-4">
      <div class="col-md-6 col-lg-4 portfolio-card">
        <div class="card card-design">
          <div class="card-img">
            <img src={Workit} class="card-img-top" alt="..."/>
          </div>
          <div class="card-body portfolio-body">
            <h3 class="card-title">UI/UX Design</h3>
            <p class="card-text">Figma, Invision, Adobe Illustrator</p>
            <div class="portfolio-button">
              <button type="button" class="live-demo"><a href="https://youtu.be/PHuhCC59Rbc" target="_blank">Live Demo</a></button>
              <button type="button" class="behance"><a href="https://www.behance.net/gallery/144651467/Workit-Mobile-App-UIUX-design" target="_blank">View Details</a></button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 portfolio-card">
        <div class="card card-design">
          <div class="card-img">
            <img src={Letterhead} class="card-img-top" alt="..."/>
          </div>
          <div class="card-body portfolio-body">
            <h3 class="card-title">Front-end development</h3>
            <p class="card-text">HTML, CSS, Bootstrap, Javascript</p>
            <div class="portfolio-button">
              <button type="button" class="live-demo"> <a href="https://lepoll.com/" target="_blank">Visit Site</a></button>
              <button type="button" class="behance"> <a href="https://github.com/natario57" target="_blank">View Details</a></button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 portfolio-card">
        <div class="card card-design">
          <div class="card-img">
            <img src={Aqua7even} class="card-img-top" alt="..."/>
          </div>
          <div class="card-body portfolio-body">
            <h3 class="card-title">Website Design</h3>
            <p class="card-text">Figma, Invision, Adobe Illustrator</p>
            <div class="portfolio-button">
              <button type="button" class="live-demo"> <a href="https://aqua7even.com/" target="_blank">Visit Site</a></button>
              <button type="button" class="behance"> <a href="https://www.behance.net/gallery/174479523/Aqua7even-Website-Revamp"target="_blank">View Details</a></button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 portfolio-card">
        <div class="card card-design">
          <div class="card-img">
            <img src={Cove} class="card-img-top" alt="..."/>
          </div>
          <div class="card-body portfolio-body">
            <h3 class="card-title">Mobile/Tab App Design</h3>
            <p class="card-text">Figma, Invision, Adobe Illustrator</p>
            <div class="portfolio-button">
              <button type="button" class="live-demo"> <a href="https://youtu.be/ewlXGZ4F8u4" target="_blank">Live Demo</a></button>
              <button type="button" class="behance"> <a href="https://www.behance.net/gallery/139278735/Drizzy-Story-book" target="_blank">View Details</a></button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 portfolio-card">
        <div class="card card-design">
          <div class="card-img">
            <img src={Carvera} class="card-img-top" alt="..."/>
          </div>
          <div class="card-body portfolio-body">
            <h3 class="card-title">Barnd Identity</h3>
            <p class="card-text">Adobe Illustrator, Photoshop, Figma</p>
            <div class="portfolio-button">
              <button type="button" class="live-demo"> <a href="https://solaragroup.com/" target="_blank">Visit Site</a></button>
              <button type="button" class="behance"> <a href="https://www.behance.net/gallery/163436835/Solara-Group-Website-Design" target="_blank">View Details</a></button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 portfolio-card">
        <div class="card card-design">
          <div class="card-img">
            <img src={Mikel} class="card-img-top" alt="..."/>
          </div>
          <div class="card-body portfolio-body">
            <h3 class="card-title">Portrait Art Works</h3>
            <p class="card-text">Pencil, Charcoal, Alabaster, Brush</p>
            <div class="portfolio-button">
              <button type="button" class="live-demo"> <a href="https://www.instagram.com/p/CFdZAz1go3H/?igshid=MTc4MmM1YmI2Ng==" target="_blank">Live Demo</a></button>
              <button type="button" class="behance"> <a href="https://www.instagram.com/p/CGx_tdngfWe/?igshid=MTc4MmM1YmI2Ng==" target="_blank">Instagram</a></button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 portfolio-card">
        <div class="card card-design">
          <div class="card-img">
            <img src={Famboree} class="card-img-top" alt="..."/>
          </div>
          <div class="card-body portfolio-body">
            <h3 class="card-title">Graphics Design</h3>
            <p class="card-text">Photoshop, Adobe Illustrator, Figma</p>
            <div class="portfolio-button">
              <button type="button" class="live-demo"> <a href="https://instagram.com/foamboree?igshid=MzRlODBiNWFlZA==" target="_blank">See Designs</a></button>
              <button type="button" class="behance"> <a href="https://instagram.com/paragonrealtyllc?igshid=MzRlODBiNWFlZA==" target="_blank">View SM</a></button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 portfolio-card">
        <div class="card card-design">
          <div class="card-img">
            <img src={Polar} class="card-img-top" alt="..."/>
          </div>
          <div class="card-body portfolio-body">
            <h3 class="card-title">Wordpress development</h3>
            <p class="card-text">Elementor, WooCommerce</p>
            <div class="portfolio-button">
              <button type="button" class="live-demo"> <a href="https://polar-afriqueconsulting.com/" target="_blank">Visit Site</a></button>
              <button type="button" class="behance"> <a href="https://www.behance.net/gallery/178536595/Polar-afrique-consulting-website-revamp" target="_blank">View Details</a></button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 portfolio-card">
        <div class="card card-design">
          <div class="card-img">
            <img src={Ethos} class="card-img-top" alt="..."/>
          </div>
          <div class="card-body portfolio-body">
            <h3 class="card-title">Logo Design</h3>
            <p class="card-text">Adobe Illustrator, Photoshop, Figma</p>
            <div class="portfolio-button">
              <button type="button" class="live-demo"> <a href="https://solaragroup.com/solara-logistics/" target="_blank">Visit Site</a></button>
              <button type="button" class="behance"> <a href="https://cbflservices.com/" target="_blank">More Logos</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button type="button" class="view-projects" data-bs-toggle="modal" data-bs-target="#exampleModal">Website Development Stages</button>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Development Stages</h1>
            <button type="button" class="btn-close close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark fa-2xl" style={{color: "#ffffff"}}></i></button>
          </div>

          <div class="modal-body">

            <div class="project-main">
              <h3 class="project-title">About Website</h3>
              <img class="project-img" src={Guideline} alt="chuks-pics"/>
              <p class="project-info">This is a project I built to help expand my audience and clients. it's a reactjs application running on a nodejs back-end, hosted on Hostinger.</p>
            </div>
            <hr/>

            <div class="project-main">
              <h3 class="project-title">Low-Fidelity Wireframe</h3>
              <img class="project-img" src={Wireframe} alt="chuks-pics"/>
              <p class="project-info">After carrying out series of research and consulted a couple of sites for insipiration, I was able to sketch out how I wanted my website to look like. From there, I proceeded to design the Low-fidelity Wireframe with Invision.</p>
            </div>
            <hr/>

            <div class="project-main">
              <h3 class="project-title">High-Fidelity UI Design</h3>
              <img class="project-img" src={First} alt="chuks-pics"/>
              <p class="project-info">After being satisfied with my low-fidelity wireframes, I proceeded to adding colors and features to the design. I picked my colors, icons and illustrations carefully, paying attention to  visual hierarchy, white spacing, pixel perfect and color combination to match with the design.</p>
            </div>
            <hr/>

            <div class="project-main">
              <h3 class="project-title">Usability Testing Final Design</h3>
              <img class="project-img" src={Last} alt="chuks-pics"/>
              <p class="project-info">I embarked on usability testing by carrying out user-centered research and making enquiries from other UI/UX Designers, Developers, and the public, after which I decided to make some changes to better the site's interface and be more user-friendly</p>
            </div>
            <hr/>

            <div class="project-main">
              <h3 class="project-title">Development With ReactJS</h3>
              <img class="project-img" src={Code} alt="chuks-pics"/>
              <p class="project-info">My final stage was developing the site, I used reactjs for the development, I first of all prepared my dev enmironment by creating the various components, and bringing in my assets for the website, with which I made this very captivating and responsive website, then hosted it on Hostinger.</p>
            </div>

          </div>
         
        </div>
      </div>
    </div>
    
  </section>
  )
}

export default Portfolio