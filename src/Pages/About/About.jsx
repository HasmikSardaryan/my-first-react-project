import React from "react";
import Members from "../../Components/ContactCard/Team";
import { text, title } from "./constants";
import "./About.css";

function About() {
  return (
    <div id="About" className="about">
      <h2>{title}</h2>
      <div className="about-text">
        <p className="about-text">{text}</p>
      </div>
      <div>
        <Members />
      </div>
    </div>
  );
}
export default About;
