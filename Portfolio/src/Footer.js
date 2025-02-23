import React from 'react';

function Footer() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
        <h1 style={{fontWeight:"700", fontSize:"3rem"}}>Keep In Touch.</h1>
        <p style={{ color: "#8F9094"}}>Feel free to get in touch and talk more about your projects.</p>
        <p style={{ color: "#8F9094"}}>Let's <span style={{ color: "#3CCF91" }}>connect</span> and <span style={{ color: "#3CCF91" }}>build</span> something awesome <span style={{ color: "#3CCF91" }}>together</span>.</p>
        <div className="mt-4">
          <a href="https://www.linkedin.com/in/kunj-tyagi-07688423b/" className="btn btn-dark me-3" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin" style={{ color: "#3CCF91" }}></i> LinkedIn
          </a>
          <a href="mailto:kunjtyagi24@gmail.com" className="btn btn-dark me-3" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-envelope" style={{ color: "#3CCF91" }}></i> Email
          </a>
          <a href="/Kunj_Tyagi_Resume.pdf" className="btn btn-dark" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-file" style={{ color: "#3CCF91" }}></i> Resume
          </a>
        </div>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center text-center">
      <p style={{marginBottom:"0rem"}}>Developed by Kunj Tyagi.</p>
      <p>Built with <span style={{ color: "#3CCF91" }}>React.js</span> and <span style={{ color: "#3CCF91" }}>Vanilla CSS</span>. Hosted on <span style={{ color: "#3CCF91" }}>Netlify</span>.</p>
      </div>

    </>
  );
}

export default Footer;