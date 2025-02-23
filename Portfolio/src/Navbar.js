import React, { useState } from "react";
import "./Navbar.css"; // Importing the CSS file

function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <div className="nav">
                {/* Left Side (Title) */}
                <div className="nav-title">
                    <a href="#hero" className="nav-logo">
                        <span className="braces">{"{"}</span>KT<span className="braces">{"}"}</span>
                    </a>
                </div>

                {/* Right Side (Hamburger Icon) */}
                <div className="nav-hamburger" onClick={() => setSidebarOpen(true)}>
                    <span>☰</span>
                </div>

                {/* Right Side (Links) - visible on large screens */}
                <div className="nav-links">
                    <a href="#about-me">About Me</a>
                    <a href="#project">Projects</a>
                    <a href="#achievements">Achievements</a>
                    <a href="/Kunj_Tyagi_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>

                {/* White line below navbar */}
                <div className="nav-line"></div>
            </div>

            {/* Sidebar */}
            <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
                <button onClick={() => setSidebarOpen(false)}>✖</button>
                <div className="sidebar-line"></div>
                <ul>
                    <li><a href="#about-me" onClick={() => setSidebarOpen(false)}>About Me</a></li>
                    <li><a href="#project" onClick={() => setSidebarOpen(false)}>Projects</a></li>
                    <li><a href="#achievements" onClick={() => setSidebarOpen(false)}>Achievements</a></li>
                    <li><a href="Kunj_Tyagi_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
