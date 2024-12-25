import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const KT = "KT"; // Define the KT variable
const Open = "{";
const Close = "}";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary border-bottom sticky-top"
        style={{ backgroundColor: "black" }}
      >
        <div
          className="container-fluid d-flex justify-content-between align-items-center"
          style={{ marginLeft: "6rem" }}
        >
          <a className="navbar-brand " href="#">
            <b className="fs-2">{Open}</b>
            <b className="kt fs-2">{KT}</b>
            <b className="fs-2">{Close}</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ marginRight: "10rem" }}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-4">
                <a className="nav-link active " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link active" aria-current="page" href="#">
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr/>
    </>
  );
}

export default Navbar;
