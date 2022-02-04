import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="about">
      <div className="about__content">
        <div className="inner-content">
          <p>
            Hi, I'm Nikola Djordjevic, a front-end developer based in Belgrade,
            Serbia. My main stack is JavaScript, React, Redux, SCSS. For the
            past six months, I have been working on developing a dispatch
            dashboard for a transportation company. I love developing
            user-experience based projects. I have a keen eye on animation and
            website design, too.
          </p>
          <br />
          <p>
            Wanna get to know me more? Feel free to get in touch with me via
            e-mail, or social media linked below.
          </p>

          <div className="links">
            <a href="/">LinkedIn</a>
            <a href="/">Twitter</a>
            <a href="/">Github</a>
          </div>
        </div>
        <div className="edge"></div>
      </div>
    </div>
  );
}

export default About;
