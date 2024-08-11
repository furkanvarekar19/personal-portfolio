import React from "react";
import "./hero.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  return (
    <div id="home" className="hero">
      <img
        src="https://cdn-icons-png.flaticon.com/128/3242/3242257.png"
        alt="profile"
      />
      <h1><span>I'm Furkan</span> , frontend developer based in India.</h1>
   
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
            obcaecati eligendi. Officia, ullam vel! Expedita atque magnam sequi,
            earum eaque
        </p>
      <div className="hero-action">
        <div className="hero-connect">
           <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me<p onClick={()=> setMenu("contact")}></p> </AnchorLink>
        </div>
        <div className="hero-resume"> My Resume</div>
      </div>
    </div>
  );
}

export default Hero;
