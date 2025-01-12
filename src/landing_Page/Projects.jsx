import React from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  return (
    <div className="conatiner">
      <div className="row">
        <div className="col-lg-6 col-sm-12 ">
          <h1 className="Me" style={{ color: "white" }}>
            💻Projects
          </h1>
          <br></br>
          <br></br>
          <h3 style={{ marginLeft: "5.6rem" }}>🏠 WanderLust</h3>
          <p className="aboutme">
            WanderLust is a full-stack web application designed to simplify the
            process of listing and renting spaces. It features secure user
            authentication, allowing users to log in or sign up easily.<br></br>{" "}
            <br></br>With listing management, users can create, view, and manage
            their rental properties. The platform supports image uploads,
            enabling users to showcase their spaces visually. Its responsive
            design ensures an optimized experience across all devices.<br></br>{" "}
            <br></br>This application is built using Node.js, Express.js,
            MongoDB, and JavaScript, providing a robust backend and a seamless
            user interface. 🌟
          </p>
        </div>
        {/* <div className="col-lg-1"></div> */}
        <div className="col-lg-6 col-sm-12 right ">
          <div className="card">
            <img
              src="./WanderLust.png"
              className="card-img-top"
              alt="WanderLust"
            />
            <div className="card-body">
              <p className="card-text">
                <a href="https://wanderlust-4-vmpt.onrender.com/">
                  {" "}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    style={{
                      color: "rgb(60,207,145)",
                      fontSize: "2rem",
                      marginRight: "1rem",
                    }}
                  />
                </a>
                <a href="https://go.screenpal.com/watch/cZlXoannaUX">
                  <FontAwesomeIcon
                    icon={faVideo}
                    style={{ color: "#3ccf91", fontSize: "2rem",  marginRight: "1rem", }}
                  />
                </a>
                <a href="https://github.com/Kunj-Tyagi/WanderLust">
                 
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ color: "#3ccf91", fontSize: "2rem" }}
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
