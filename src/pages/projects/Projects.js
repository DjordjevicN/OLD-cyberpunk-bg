import React from "react";
import "./Projects.scss";
import Project from "../../components/project/Project";
import { projects } from "../../components/project/data";

function Projects() {
  return (
    <div className="projects">
      <div className="projects__content">
        {projects.map((project) => {
          return (
            <Project
              key={project.id}
              title={project.title}
              text={project.text}
              image={project.image}
              tech={project.tech}
              githubLink={project.buttonTitle}
              visitLink={project.visitLink}
              extraLink={project.extraLink}
              buttonTitle={project.buttonTitle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
