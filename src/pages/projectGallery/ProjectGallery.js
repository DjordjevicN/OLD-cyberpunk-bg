import React from "react";
import "./ProjectGallery.scss";

function ProjectGallery() {
  const multi = [0, 1, 2];

  const data = [
    {
      id: 0,
      title: "LANDLINE",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Repellat deserunt laudantium error cum",
      tech: "ReactJS, Redux, GatsbyJS, ",
      mainImage:
        "https://raw.githubusercontent.com/DjordjevicN/imagesRep/master/landline-booking-devices.png",
      img1: "https://raw.githubusercontent.com/DjordjevicN/imagesRep/master/portfolio/landline1.png",
      img2: "https://raw.githubusercontent.com/DjordjevicN/imagesRep/master/portfolio/landline2.png",
      img3: "https://raw.githubusercontent.com/DjordjevicN/imagesRep/master/portfolio/landline3.png",
    },
    {
      id: 1,
      title: "MAIA.RS",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Repellat deserunt laudantium error cum",
      tech: "Wordpress ",
      mainImage: "",
      img1: "",
      img2: "",
      img3: "",
    },
    {
      id: 2,
      title: "ZANATLIJE.RS",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Repellat deserunt laudantium error cum",
      tech: "ReactJS, Redux, Express, MySQL ",
      mainImage: "",
      img1: "",
      img2: "",
      img3: "",
    },
  ];

  return (
    <div className="gallery">
      <div className="gallery__content">
        {data.map((project) => {
          return (
            <div className="project" key={project.id}>
              <div className="project__content">
                <div className="text">
                  <div className="inner">
                    <h2>{project.title}</h2>
                    <img
                      src="https://raw.githubusercontent.com/DjordjevicN/imagesRep/master/cyberpunk-linesplit.png"
                      alt="splitLine"
                    />
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Repellat deserunt laudantium error cum, ducimus adipisci
                      molestias possimus at facilis ipsam officiis quos ab!
                      Fugit necessitatibus omnis, aliquam non numquam eum.
                    </p>
                  </div>
                  <div className="edge" />
                </div>
                <div className="display">
                  <div className="display__content">
                    <div className="mainImage">
                      <img
                        src="https://raw.githubusercontent.com/DjordjevicN/imagesRep/master/landline-booking-devices.png"
                        alt=""
                      />
                    </div>
                    <div className="restOfImages">
                      <div className="images">
                        <div className="image__wrapper">
                          <img src={project.img1} alt="asdad" />
                        </div>
                        <div className="edge"></div>
                      </div>
                      <div className="images">
                        <div className="image__wrapper">
                          <img src={project.img2} alt="asdad" />
                        </div>
                        <div className="edge"></div>
                      </div>
                      <div className="images">
                        <div className="image__wrapper">
                          <img src={project.img3} alt="asdad" />
                        </div>
                        <div className="edge"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectGallery;
