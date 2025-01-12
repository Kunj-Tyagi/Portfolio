import React from "react";
import "./Aboutme.css";

function Aboutme() {
  return (
    <div className="conatiner">
      <div className="row">
        <div className="col-lg-6 col-sm-12 ">
          <h1 className="Me" style={{ color: "white" }}>
            ⚡ About Me
          </h1>
          <p className="aboutme">
            Hey! I'm Kunj Tyagi, I've been close to a computer since an early
            age, and been passionate about it ever since.
            <br></br>
            <br></br> I really liked to build stuff using no-code tools back in
            2010, and from that, I explored how to code myself, fast-forward to
            today, I do programming in various languages and technologies, and
            had the privilege to worked in a Recruitment Company and a SaaS
            Company I'm interested in building something awesome with code and
            automate tasks with code, currently focused on Web & Mobile
            Development, Open Source and Competitive Programming<br></br>
            <br></br> When I'm not coding I play games with my friends, watch
            some show on Netflix, or if the weather's good, play basketball! 🏀
          </p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5 col-sm-12 mt-5 text-center">
          <img className="image img-fluid" src="/kunj.jpg" alt="Kunj" />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
