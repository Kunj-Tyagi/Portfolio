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
          <h3 style={{ marginLeft: "5.6rem" }}>🏠 Video Conferencing App</h3>
          <p className="aboutme">
            The Video Conferencing App is a full-stack web application that
            enables seamless and secure virtual communication. It features user
            authentication for easy login and registration, allowing users to
            join or create video calls with ease.
            <br></br>
            <br></br>
            With real-time video and audio communication, users can interact in
            a virtual meeting space, share screens, and collaborate efficiently.
            The platform is optimized for all devices, ensuring a smooth user
            experience across desktops, tablets, and smartphones.
            <br></br>
            <br></br>
            Built with Node.js, Express.js, MongoDB, and JavaScript, this
            application provides a reliable backend and an intuitive front-end
            interface, making video conferencing simple and accessible. 🌟
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
