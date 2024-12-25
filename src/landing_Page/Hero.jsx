import React from "react";

function Hero() {
  return (
    <div
      style={{
        marginLeft: "2.4rem",
        paddingTop: "3rem",
        paddingLeft: "3rem",
        paddingRight: "3rem",
        lineHeight: "1", // Ensures consistent line spacing
      }}
    >
      <p className="fs-sm-1"
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
      <h2
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
      <p
        style={{
          color: "rgb(244, 247, 246)",
          marginLeft: "0.4rem",
          marginBottom: ".5rem", // Removes space below this line
          padding: "0", // Ensures no extra padding
          fontSize: "2rem",
          fontWeight: "600",
        }}
      >
        Software Developer.{" "}
        <span style={{ color: "rgb(123, 122, 122)",marginTop: ".5rem", display: "inline-block"  }}>
          A self- taught developer with strong foundation
        </span>
        <br></br>
      </p>
      <p
        style={{
          color: "rgb(123, 122, 122)",
          marginLeft: "0.4rem",
          marginBottom: "3rem", // Removes space below this line
          padding: "0", // Ensures no extra padding
          fontSize: "2rem",
          fontWeight: "600",
        }}
      >
        and keen interest in Computer Science
      </p>
      <p
        style={{
          color: "rgb(123, 122, 122)",
          marginLeft: "0.4rem",
          fontSize: "1.5rem",
          fontWeight: "400",
        }}
      >
        🚀 Currently specializing in MERN (React / Node.js)
        <br></br>
        <span style={{ marginTop: ".5rem", display: "inline-block" }}>
          ⚡ Fullstack Developer at MLCoE
        </span>
      </p>
    </div>
  );
}

export default Hero;
