import React from 'react';
import "./Project.css";

function Project() {
    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    {/* Left Section: Text */}
                    {/* <div className="col-md-6 mt-5"> */}
                        <h2 style={{ marginBottom: "0rem", marginTop:"5rem", fontWeight: "700" }}>
                        💡 All Creative Works
                        </h2>
                        <p
                            className="info-text"
                            style={{
                                color: "#8F9094",
                                fontSize: "1.25rem",
                                marginBottom:"3rem"
                            }}
                        >
                            Here's some of my projects that I have worked on.
                        </p>
                    {/* </div> */}

                    
                    {/* Card Section 1 */}
                    <div
                        className="card-left"
                        style={{
                            width: "30rem",
                            backgroundColor: "rgb(10, 10, 10)",
                            color: "white",
                            margin: "auto",//This ensures that the cards are centered horizontally and spaced vertically
                            marginTop: "1rem",
                            border: "solid 1.5px rgba(52, 51, 51, 0.5)", // Thin border with slight transparency
                            borderRadius: "10px",
                            overflow: "hidden", //this ensures that the image does not overflow the card
                        }}
                    >
                        {/* Card Image */}
                        <img
                            src="media/images/WanderLust.png"
                            className="card-img-top"
                            alt="..."
                            style={{
                                width: "100%", // Ensures the image stretches to the full width of the card
                                height: "200px", // Maintain desired height
                                objectFit: "cover", // Ensures the image scales proportionally
                                margin: "0rem", // Removes any default margin
                                marginTop: "1rem"   
                            }}
                        />

                        {/* Card Body */}
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h3 className="card-title mb-0">WanderLust</h3>
                                <div>
                                    <a
                                        href="https://wanderlust-4-vmpt.onrender.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ marginRight: "1rem", color: "white", fontSize: "1.25rem" }}
                                    >
                                        <i className="fa-solid fa-arrow-up-right-from-square" title="Live Site"></i>
                                    </a>
                                    <a
                                        href="https://github.com/Kunj-Tyagi/WanderLust"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "white", fontSize: "1.5rem" }}
                                    >
                                        <i className="fa-brands fa-github" title="GitHub Repository"></i>
                                    </a>
                                </div>
                            </div>


                            <div className="badges mb-3">
                                <span
                                    style={{
                                        backgroundColor: "#FAF08925",
                                        color: "#FAF089",
                                        padding: "0.2rem 1rem",
                                        borderRadius: "5px",
                                        fontSize: "0.9rem",
                                        marginRight: "1rem"
                                    }}
                                >
                                    <i class="fa-brands fa-js" style={{ color: "#FAF089", marginRight: "0.5rem" }}></i> JavaScript
                                </span>
                                <span
                                    style={{
                                        backgroundColor: "#9AE6B429",
                                        color: "#9AE6B4",
                                        padding: "0.2rem 1rem",
                                        borderRadius: "5px",
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    <i class="fa-brands fa-node-js" style={{ color: "#9AE6B4", marginRight: "0.5rem" }}></i> Node.js
                                </span>
                               <div className="nav-line"></div>  {/* //bootstrap line */}
                            </div>

                            <p className="card-text mb-2" style={{color: "#8F9094",fontSize: "1.05rem"}}>
                                A website that helps travelers discover unique stays and accommodations around the globe.
                            </p>
                        </div>
                    </div>


                    {/* Card Section 3 */}
                    <div
                        className="card-left"
                        style={{
                            width: "30rem",
                            backgroundColor: "rgb(10, 10, 10)",
                            color: "white",
                            margin: "auto",
                            marginTop: "1rem",
                            border: "solid 1.5px rgba(52, 51, 51, 0.5)", // Thin border with slight transparency
                            borderRadius: "10px",
                            overflow: "hidden",
                            
                        }}
                    >
                        {/* Card Image */}
                        <img
                            src="media/images/Video_Conferencing_App.png"
                            className="card-img-top"
                            alt="..."
                            style={{
                                width: "100%", // Ensures the image stretches to the full width of the card
                                height: "200px", // Maintain desired height
                                objectFit: "cover", // Ensures the image scales proportionally
                                margin: "0rem", // Removes any default margin
                                marginTop: "1rem"
                            }}
                        />

                        {/* Card Body */}
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h3 className="card-title mb-0">Video Conferencing App</h3>
                                <div>
                                    <a
                                        href="https://video-conferencing-app-2.onrender.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ marginRight: "1rem", color: "white", fontSize: "1.25rem" }}
                                    >
                                        <i className="fa-solid fa-arrow-up-right-from-square" title="Live Site"></i>
                                    </a>
                                    <a
                                        href="https://github.com/Kunj-Tyagi/Video-Conferencing-App"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "white", fontSize: "1.5rem" }}
                                    >
                                        <i className="fa-brands fa-github" title="GitHub Repository"></i>
                                    </a>
                                </div>
                            </div>


                            <div className="badges mb-3">
                                <span
                                    style={{
                                        backgroundColor: "#90CDF429",
                                        color: "#90CDF4",
                                        padding: "0.2rem 1rem",
                                        borderRadius: "5px",
                                        fontSize: "0.9rem",
                                        marginRight: "1rem"
                                    }}
                                >
                                    <i class="fa-brands fa-react" style={{ color: "#90CDF4", marginRight: "0.5rem" }}></i> React
                                </span>
                                <span
                                    style={{
                                        backgroundColor: "#9AE6B429",
                                        color: "#9AE6B4",
                                        padding: "0.2rem 1rem",
                                        borderRadius: "5px",
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    <i class="fa-brands fa-node-js" style={{ color: "#9AE6B4", marginRight: "0.5rem" }}></i> Node.js
                                </span>
                                <div className="nav-line"></div>
                            </div>

                            <p className="card-text mb-2" style={{color: "#8F9094",fontSize: "1.05rem"}}>
                                Developed a video conferencing app with React, Node.js, and WebRTC, featuring multi-user calls, screen sharing, chat, and recording.
                            </p>
                        </div>
                    </div>


                    {/* Card Section 4 */}
                    <div
                        className="card-right"
                        style={{
                            width: "30rem",
                            backgroundColor: "rgb(10, 10, 10)",
                            color: "white",
                            margin: "auto",
                            marginTop: "10rem",
                            border: "solid 1.5px rgba(52, 51, 51, 0.5)", // Thin border with slight transparency
                            borderRadius: "10px",
                            overflow: "hidden",
                            
                        }}
                    >
                        {/* Card Image */}
                        <img
                            src="media/images/Weather_App.png"
                            className="card-img-top"
                            alt="..."
                            style={{
                                width: "100%", // Ensures the image stretches to the full width of the card
                                height: "200px", // Maintain desired height
                                objectFit: "cover", // Ensures the image scales proportionally
                                margin: "0rem", // Removes any default margin
                                marginTop: "1rem"
                            }}
                        />

                        {/* Card Body */}
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h3 className="card-title mb-0">Weather App</h3>
                                <div>
                                    <a
                                        href="https://weather-app-coral-two-86.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ marginRight: "1rem", color: "white", fontSize: "1.25rem" }}
                                    >
                                        <i className="fa-solid fa-arrow-up-right-from-square" title="Live Site"></i>
                                    </a>
                                    <a
                                        href="https://github.com/Kunj-Tyagi/Weather-App"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "white", fontSize: "1.5rem" }}
                                    >
                                        <i className="fa-brands fa-github" title="GitHub Repository"></i>
                                    </a>
                                </div>
                            </div>


                            <div className="badges mb-3">
                                <span
                                    style={{
                                        backgroundColor: "#90CDF429",
                                        color: "#90CDF4",
                                        padding: "0.2rem 1rem",
                                        borderRadius: "5px",
                                        fontSize: "0.9rem",
                                        marginRight: "1rem"
                                    }}
                                >
                                    <i class="fa-brands fa-react" style={{ color: "#90CDF4", marginRight: "0.5rem" }}></i> React
                                </span>
                                <span
                                    style={{
                                        backgroundColor: "#E2E8F029",
                                        color: "#E2E8F0",
                                        padding: "0.2rem 1rem",
                                        borderRadius: "5px",
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    <i class="fa-brands fa-bootstrap" style={{ color: "#E2E8F0", marginRight: "0.5rem"}}></i> Bootstrap
                                </span>
                                <div className="nav-line"></div>
                            </div>

                            <p className="card-text mb-2" style={{color: "#8F9094",fontSize: "1.05rem"}}>
                               A weather app that provides real-time forecasts for any city, helping users plan their day efficiently.
                            </p>
                        </div>
                    </div>
                    


                </div>
            </div>
        </>
    );
}

export default Project;
