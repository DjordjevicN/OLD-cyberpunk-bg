import React from "react";
import "./Project.scss";

function Project({
  title,
  text,
  image,
  githubLink,
  visitLink,
  extraLink,
  buttonTitle,
  tech,
}) {
  return (
    <div className="project">
      <div className="project__content">
        <div className="imagePreview">
          <img src={image} alt={`${title} project`} />
          <div className="information">
            <div className="left">
              <div className="title">
                <h2>{title}</h2>
              </div>
              <div className="text">
                <p>{text}</p>
                <p className="tech">{`Tech: ${tech}`}</p>
              </div>
            </div>
            <div className="right">
              {githubLink && (
                <div className="button">
                  <a href={githubLink}>GITHUB</a>
                </div>
              )}
              {visitLink && (
                <div className="button">
                  <a href={visitLink}>VISIT</a>
                </div>
              )}

              {extraLink && (
                <div className="button">
                  <a href={extraLink}>{buttonTitle}</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="edge" />
    </div>
  );
}

export default Project;
