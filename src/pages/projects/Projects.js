import React from "react";
import "./Projects.scss";
import { MdPlayArrow } from "react-icons/md";

function Projects() {
  const projects = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="projects">
      {/* <div className="scroll">
        <div className="arrow arrow1">
          <MdPlayArrow />
        </div>
        <div className="arrow arrow2">
          <MdPlayArrow />
        </div>
        <div className="arrow arrow3">
          <MdPlayArrow />
        </div>
        <div className="arrow arrow4">
          <MdPlayArrow />
        </div>
      </div> */}
      <div className="projects__content">
        {projects.map((project) => {
          return (
            <div className="project">
              <div className="project__content">
                <div className="innerContent">
                  <img
                    src="https://raw.githubusercontent.com/DjordjevicN/imagesRep/master/landline-platform.png"
                    alt=""
                  />
                  <div className="textBox">
                    <h3>Landline.com</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae, veritatis error! Deserunt inventore dolorem
                      voluptatibus aspernatur molestiae beatae omnis dolores,
                      delectus laboriosam cupiditate recusandae dolor. Expedita
                      eveniet saepe totam numquam.
                    </p>
                  </div>
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
