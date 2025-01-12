import React from "react";
import "./Projects1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Aboutme() {
  return (
    <div className="conatiner">
      <div className="row">
        <div className="col-lg-5 col-sm-12 mt-4">
          <div className="card">
            <img src="./Video.webp" className="card-img-top" alt="WanderLust" />
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
        <div className="col-lg-1"></div>
        <div className="col-lg-6 col-sm-12 ">
          <h3 style={{ marginLeft: "5.6rem" , marginTop:"6rem"}}>🏠 Video Conferencing App</h3>
          <p className="aboutme">
            The Video Conferencing App is a full-stack web app for secure
            virtual communication, featuring user authentication for easy login
            and registration. Users can join or create video calls with
            real-time video/audio, screen sharing, and efficient collaboration.
            Optimized for all devices, it ensures a smooth experience on
            desktops, tablets, and smartphones. Built with Node.js, Express.js,
            MongoDB, and JavaScript, it offers a reliable backend and intuitive
            front-end. 🌟
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
