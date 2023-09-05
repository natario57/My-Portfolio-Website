import React from "react";
import './features.css'
import Search from "../../assets/Search.svg";
import Bulb from "../../assets/Bulb.svg";
import Dart from "../../assets/Dart.svg";
import Fade from 'react-reveal/Fade';

const Features = () => {
  return (
    <section id="features">

      <div class="row features-cont">

        <div class="col-lg-4 features">
          <Fade top><img class="features-box" src={Search} alt="Lens"/></Fade>
          <h2>User Research</h2>
          <p>I use both qualitative and quantitative research methods to help improve the product experiences.</p>
        </div>
        <div class="col-lg-4 features">
          <Fade top><img class="features-box" src={Bulb} alt="Light"/></Fade>
          <h2>Awesome Ideas</h2>
          <p>With a little insight about your brand and your target audience, I can bring your ideas to life.</p>
        </div>
        <div class="col-lg-4 features">
          <Fade top><img class="features-box" src={Dart} alt="Target"/></Fade>
          <h2>Pixel Perfect</h2>
          <p>With a mobile first approach, I create a captivating user interface screens suitable for your eyes.</p>
        </div>
        
      </div>
    
  </section>
  )
}

export default Features