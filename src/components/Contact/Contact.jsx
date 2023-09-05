import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q0nrkel', 'template_6d4zgh8', form.current, 'Xp19-vL67fV3OpF4-')

    e.target.reset()

  };

  return (
    <section id="contact">

      <div class="contact-top">
        <h2 class="orange-text">Contact Me</h2>
        <h1>I Want To Hear From You</h1>
        <p class="contact-message">Click on the icons to get in touch, or send a direct message from the form field</p>
      </div>

      <div class="row g-4">
  <div class="col-md-6 col-lg-5 blog-card left-side">
    <div class="contact-design">
      <a href="https://api.whatsapp.com/send?phone=2347038988434" target='_blank'><FontAwesomeIcon icon={faPhone} style={{color: "#ffffff",}} /></a>
      <div class="contact-info">
        <h5 class="info-title">Phone Number</h5>
        <p class="info-main">+2347038988434</p>
      </div>
    </div>
    <div class="contact-design">
      <a href="mailto:udaice57@gmail.com" target='_blank'><FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} /></a>
      <div class="contact-info">
        <h5 class="info-title">Email Address</h5>
        <p class="info-main">udaice57@gmail.com</p>
      </div>
    </div>
    <div class="contact-design">
      <a href="https://maps.app.goo.gl/Lozbdd4nm7Nx7Dqf7" target='_blank'><FontAwesomeIcon icon={faLocationDot} style={{color: "#ffffff",}} /></a>
      <div class="contact-info">
        <h5 class="info-title">Location</h5>
        <p class="info-main">13 Adeyemi strt, Maryland</p>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-lg-7 blog-card right-card">

    <form ref={form} onSubmit={sendEmail}>

      <div class="card form-design">
        <div class="form-floating mb-3">
          <input type="text" name='name' class="form-control" id="floatingInput" placeholder="Full Name" required/>
          <label for="floatingInput">Your Name</label>
        </div>
        <div class="phone-email">
          <div class="form-floating mb-3">
            <input type="text" name='number' class="form-control" id="floatingInput" placeholder="Phone Number" required/>
            <label for="floatingPassword">Phone Number</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" name='email' class="form-control" id="floatingInput" placeholder="Your Email" required/>
            <label for="floatingInput">Email Address</label>
          </div>
        </div>
        <div class="form-floating mb-3">
          <input type="text" name='subject' class="form-control" id="floatingInput" placeholder="Subject" required/>
          <label for="floatingPassword">Subject</label>
        </div>
        <div class="form-floating mb-3">
          <textarea name='message' class="form-control" placeholder="Leave a comment here" required id="floatingTextarea2" style={{height: "150px"}}></textarea>
          <label for="floatingTextarea2">Your Message</label>
        </div>
        <button type="submit" class="send-message">Send Message</button>
      </div>

    </form>
    
  </div>
</div>
    </section>
  )
}

export default Contact