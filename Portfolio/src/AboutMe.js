import React from 'react';
import "./AboutMe.css";

function AboutMe() {
    return (
        <>
            <div className="container mb-5">
            {/* A Bootstrap class that provides padding and margins to keep content centered. */}
                <div className="row">
                {/* Defines a Bootstrap row to create a grid layout. */}
                    {/* Left Section: Text */}
                    <div className="col-md-6">
                    {/* A Bootstrap grid class that sets the column width to 50% (6 out of 12 columns) for medium (md) and larger screens. */}
                    {/* This means on small screens, it may take the full width. */}
                        <h2 className='mb-4 mt-5'> &#x26A1; About Me</h2>
                        <p className="about-text">
                            Hey! I'm Kunj Tyagi. I've been fascinated by technology since an early age, and my passion for coding has only grown over the years.
                        </p>
                        <p className="about-text">
                            I started by exploring how things work behind the scenes, building small projects, and automating tasks. Fast-forward to today, I work with various programming languages and technologies. I've had the opportunity to contribute to exciting projects in <span style={{ color: "#3CCF91" }}>web development</span> and backend systems.
                        </p>
                        <p className="about-text">
                            Currently, I'm focused on <span style={{ color: "#3CCF91" }}>MERN Stack Development</span> and <span style={{ color: "#3CCF91" }}>Competitive Programming</span>. I love taking on challenges that push my limits and allow me to learn and grow.
                        </p>
                        <p className="about-text">
                            When I'm not coding, you'll find me exploring new things, watching a good series, or enjoying with friends!
                        </p>
                    </div>

                    {/* Right Section: Image */}
                    {/* d-flex → Applies Flexbox to this div. */}
                    {/* justify-content-center → Horizontally centers the content (image) inside the div. */}
                    {/* align-items-center → Vertically centers the content (image) inside the div. */}
                    {/* ✅ Result: The image will be perfectly centered both horizontally and vertically within this column. */}
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img
                            src="media/images/Kunj_Tyagi.jpg"
                            className="profile-image" 
                            alt="Kunj Tyagi"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;
