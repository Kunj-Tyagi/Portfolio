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
          <h3 style={{ marginLeft: "5.6rem", marginBottom:"0rem" , marginTop:"6rem"}}>🏠 WanderLust</h3>
          <p className="aboutme">
            WanderLust is a full-stack web app for listing and renting spaces,
            offering secure user authentication for easy login and signup. Users
            can create, view, and manage rental properties with image upload
            support for better visual representation. The platform is fully
            responsive, ensuring an optimized experience on all devices. Built
            with Node.js, Express.js, MongoDB, and JavaScript, it delivers a
            robust backend and seamless user interface. 🌟
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
                <a
                  href="https://wanderlust-4-vmpt.onrender.com/"
                  className="link"
                >
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
                    style={{
                      color: "#3ccf91",
                      fontSize: "2rem",
                      marginRight: "1rem",
                    }}
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
