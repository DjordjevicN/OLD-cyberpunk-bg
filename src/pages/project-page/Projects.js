import React from "react";
import "./Projects.scss";

function Projects() {
  const projects = [1, 2, 3, 4];
  return (
    <div className="projects">
      <div className="projects__content">
        {projects.map((item) => {
          return (
            <div className="project">
              <div className="project__content">
                <div className="inner">
                  <img
                    src="https://raw.githubusercontent.com/DjordjevicN/imagesRep/master/landline-platform.png"
                    alt=""
                  />
                  <h2 className="title">title</h2>
                  <p className="textBox">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, animi porro esse optio vel obcaecati fugit saepe
                    corporis, blanditiis laborum voluptates illo nisi, sequi
                    earum nihil soluta harum ex quaerat.
                  </p>
                </div>
                <div className="edge"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
