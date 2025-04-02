import React from "react";
import '../Projects.css'

const ProjectCard = ({title, image}) => {
    return (
      <div className="project-card">
        <img src={image} alt={title} />
        <div className="overlay-card">{title}</div>
      </div>
    );
};

export default ProjectCard;
