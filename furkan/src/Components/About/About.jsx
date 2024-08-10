import React from "react";
import "./about.css";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img
          src="data:image/svg+xml,%3csvg%20width='227'%20height='72'%20viewBox='0%200%20227%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2061.1395C0%2055.1999%205.16729%2050.5816%2011.0696%2051.2459L187.039%2071.052C209.597%2073.591%20228.703%2054.5844%20226.282%2032.0133C223.76%208.50255%20199.379%20-6.00841%20177.511%202.98631L13.7433%2070.3471C7.19098%2073.0422%200%2068.2245%200%2061.1395Z'%20fill='url(%23paint0_linear_2160_23)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2160_23'%20x1='851.318'%20y1='47.553'%20x2='756.751'%20y2='339.402'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
          alt="logo"
        />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img
            src="https://png.pngtree.com/png-clipart/20240110/original/pngtree-office-cartoon-business-man-jumping-free-buckle-element-decorative-material-png-image_14070928.png"
            alt="men-image"
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Creative and detail-oriented Front-End Developer with experience
              in building responsive and dynamic web applications. Proficient in
              HTML, CSS, JavaScript, React.js, and Tailwind CSS. Passionate
              about user-centered design, with a focus on creating intuitive and
              visually appealing user interfaces. Eager to continue learning and
              growing in the field of web development.
            </p>
            <p>
              <span className="future"> FUTURE LEARNING GOALS</span> <br />{" "}
              Mastering advanced React.js concepts such as server-side rendering
              with Next.js. Gaining proficiency in TypeScript for better code
              quality and maintainability. Learning Graph to optimize data
              fetching in web applications. Diving deeper into performance
              optimization techniques for faster loading times.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>
                HTML <hr style={{ width: "70%" }} />
              </p>
            </div>
            <div className="about-skill">
              <p>
                CSS <hr style={{ width: "70%" }} />
              </p>
            </div>
            <div className="about-skill">
              <p>
                JavaScript <hr style={{ width: "65%" }} />
              </p>
            </div>
            <div className="about-skill">
              <p>
                React JS
                <hr style={{ width: "60%" }} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default About;
