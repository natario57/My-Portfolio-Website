import React from "react";
import './footer.css'
import Logo from "../../assets/Main-Logo.png";

const Footer = () => {
  return (
    <footer id="footer">

      <div class="services-top">
        <a class="navbar-brand" href="#"><img class="footer-logo" src={Logo} alt="Logo"/></a>
        <p class="footer-message">I believe you're satisfied with what you've seen. Now let's talk about your business and that revamp it need, I will always be happy to be part of your sucess story.</p>
      </div>

      <div class="social-media">
        <a href="https://twitter.com/natario57?t=fn6YuirU3bxK2efZtqZZag&s=03" target='_blank'>
          <div class=" socials twitter">
            <div class="twitter-icon">
              <i class="fa-brands fa-twitter fa-lg"></i>
            </div>
            <p>Twitter</p>
          </div>
        </a>

        <a href="https://www.facebook.com/Udaice?mibextid=ZbWKwL" target='_blank'>
          <div class="socials facebook">
            <div class="facebook-icon">
            < i class="fa-brands fa-facebook-f fa-lg"></i>
            </div>
            <p>Facebook</p>
          </div>
        </a>

        <a href="https://instagram.com/natario57?igshid=MzNlNGNkZWQ4Mg==" target='_blank'>
          <div class="socials instagram">
            <div class="instagram-icon">
              <i class="fa-brands fa-instagram fa-lg"></i>
            </div>
            <p>Instagram</p>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/nathaniel-akobundu-68a7b3118/" target='_blank'>
          <div class="socials linked-in">
            <div class="linked-in-icon">
              <i class="fa-brands fa-linkedin-in fa-lg"></i>
            </div>
            <p>Linked In</p>
          </div>
        </a>
      </div>
      <small class="my-copy">© 2023 Nathaniel Akobundu, all rights reserved</small>

    </footer>
  )
}

export default Footer