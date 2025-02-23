import React from "react";
import "./Achievements.css";

function Achievements() {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <h2
            style={{
              marginBottom: "0rem",
              marginTop: "5rem",
              fontWeight: "700",
            }}
          >
            🎖️ Achievements
          </h2>
          <p
            className="info-text"
            style={{
              color: "#8F9094",
              fontSize: "1.25rem",
              marginBottom: "3rem",
            }}
          >
            Here are some of my achievements ...
          </p>
        </div>

        {/* Row 1 */}
        <div className="row">
          {/* Card 1 - Left */}
          <div className="col-6">
            <div className="card achievement-card">
              <div className="card-body">
                <p className="card-text">
                  Successfully attained an impressive CodeChef rating of 1459,
                  showcasing strong problem-solving and competitive programming
                  skills.
                </p>
                <a
                  href="https://www.codechef.com/users/rdx_kunj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  CodeChef
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 - Right */}
          <div className="col-6">
            <div className="card achievement-card">
              <div className="card-body">
                <p className="card-text">
                  Also achieved a Codeforces rating of 1070, demonstrating
                  proficiency in competitive programming and algorithmic
                  problem-solving.
                </p>
                <a
                  href="https://codeforces.com/profile/kunjtyagi3392"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  Codeforces
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row" style={{ marginTop: "3rem" }}>
          {/* Card 3 - Left */}
          <div className="col-6">
            <div className="card achievement-card">
              <div className="card-body">
                <p className="card-text">
                  Completed MERN Stack Development Course by Apna College,
                  gaining expertise in building full-stack web applications.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 - Right */}
          <div className="col-6">
            <div className="card achievement-card">
              <div className="card-body">
                <p className="card-text">
                  Completed C++ Programming Course by Physics Wallah, mastering
                  data structures and algorithms concepts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row" style={{ marginTop: "3rem" }}>
          {/* Card 5 - Left */}
          <div className="col-6">
            <div className="card achievement-card">
              <div className="card-body">
                <p className="card-text">
                  Completed a self-initiated 30-day React series,
                  'React-o-Clock,' sharing core concepts and best practices on
                  Instagram and LinkedIn.
                </p>
                <a
                  href="https://www.instagram.com/nextgen.devs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  Instagram
                </a>{" "}
                <a
                  href="https://www.linkedin.com/in/code-connectors-985952336/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link set-margin"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achievements;
