import React from "react";
import "./HomePage.css";
import architect from "./architect.jpg";

function homePage() {
  return (
    <div id="HomPage">
      <div className="navbar">
        <span>
          <a href="#HomePage">
            <b>BR</b> Architects{" "}
          </a>
        </span>
        <span>
          <a href="#Projects">Projects</a>
          <a href="#About">About</a>
          <a href="#Contact">Contact</a>
        </span>
      </div>
      <div className="image-container">
        <img src={architect} alt="nkar" />
        <div className="overlay">
          <h1>
            <span>
              <b>BR</b>
            </span>
            <span>Architects</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default homePage;
