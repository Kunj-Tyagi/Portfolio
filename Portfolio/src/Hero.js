import React from 'react';
import "./Hero.css";

function Hero() {
    return (
        <div className='container mb-5 mt-5' >
            <div className='row'>

                <div className='mb-5'>
                    <h2 className="hero-subheading">Hey there! I'm -</h2>
                    <h1 className="hero-heading">Kunj Tyagi.</h1>
                </div>


                <h2 className='desc mb-5'>Full Stack Developer.<span style={{ color: "#8F9094" }}> A self-taught developer with an interest in Computer Science.</span></h2>

                <div className='mb-3'>
                    <p className="info-text">
                        &#x1F680; Currently specializing in Backend (Node.js)
                    </p>
                    <p className="info-text">
                        &#x26A1; Student at Ajay Kumar Garg Engineering College, Ghaziabad
                    </p>
                </div>


                <div className="mt-4">
                    <a href="https://github.com/Kunj-Tyagi" className="btn btn-dark me-3" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github" style={{ color: "#3CCF91" }}></i> GitHub
                    </a>

                    <a href="https://www.linkedin.com/in/kunj-tyagi-07688423b/" className="btn btn-dark me-3" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin" style={{ color: "#3CCF91" }}></i> LinkedIn
                    </a>

                    <a href="mailto:kunjtyagi24@gmail.com" className="btn btn-dark" target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-envelope" style={{ color: "#3CCF91" }}></i> Email
                    </a>
                </div>

                {/* noopener: Prevents the new tab from accessing the window.opener property, improving security.
                    noreferrer: Prevents the new tab from knowing which website opened it. */}


            </div>

        </div>
    );
}

export default Hero;