import React from "react";
import "./hero.css";

function Hero() {
  return (
    <div className="hero">
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
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume"> My Resume</div>
      </div>
    </div>
  );
}

export default Hero;
