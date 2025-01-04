import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div
      className="hero"
      style={{
        marginLeft: "2.4rem",
        paddingTop: "2.9rem",
        paddingLeft: "3rem",
        paddingRight: "3rem",
        lineHeight: "1", // Ensures consistent line spacing
      }}
    >
      <style>
        {`
          @media (max-width: 768px) {
            .responsive-text {
              font-size: 1.5rem !important;
            }
            .responsive-title {
              font-size: 4rem !important;
            }
          }
        `}
      </style>
      <p className="responsive-text"
        style={{
          color: "rgb(60,207,145)",
          marginLeft: "0.4rem",
          marginBottom: "0", // Removes space below this line
          padding: "0", // Ensures no extra padding
          fontSize: "2rem",
          fontWeight: "600",
        }}
      >
        Hey there! This is -
      </p>
      <h2 className="responsive-title"
        style={{
          fontSize: "6rem",
          color: "white",
          fontWeight: "bold",
          lineHeight: "1", // Ensures no extra space above/below
          marginBottom: "3rem", // Removes all margins
          padding: "0", // Ensures no extra padding
        }}
      >
        Kunj Tyagi.
      </h2>
      <br></br>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-9 col-sm-10"
            style={{
              color: "rgb(123, 122, 122)",
              marginLeft: "0.4rem",
              marginBottom: ".5rem", // Removes space below this line
              padding: "0", // Ensures no extra padding
              fontSize: "2rem",
              fontWeight: "600",
            }}
          >
            <span style={{color: "rgb(244, 247, 246)"}}>Software Developer.</span> A self-taught developer with strong
            foundation and keen interest in Computer Science.
          </div>
          <div className="col-lg-3 col-sm-2"></div>
        </div>
      </div>
      <br></br><br></br>
      <p className="res"
        style={{
          color: "rgb(123, 122, 122)",
          marginLeft: "0.4rem",
          fontSize: "1.5rem",
          fontWeight: "400",
        }}
      >
        🚀 Currently specializing in MERN
        <br></br>
        <span style={{ marginTop: ".5rem", display: "inline-block" }}>
          ⚡ Fullstack Developer at MLCoE
        </span>
      </p>
      <div className="mt-5">
        <a href="https://github.com/Kunj-Tyagi">
          <button
            type="button"
            className="btn btn-secondary d-inline-block me-3 "
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#3ccf91", marginRight: "0.6rem" }}
            />
            GitHub
          </button>
        </a>
        <a href="https://www.linkedin.com/in/kunj-tyagi-7b2b5a1b1/">
          <button
            type="button"
            className="btn btn-secondary d-inline-block me-3"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#3ccf91", marginRight: "0.6rem" }}
            />
            LinkedIn
          </button>
        </a>
        <a href="mailto:kunjtyagi24@gmail.com">
          <button type="button" className="btn btn-secondary d-inline-block">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#3ccf91", marginRight: "0.6rem" }}
            />
            Email
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;