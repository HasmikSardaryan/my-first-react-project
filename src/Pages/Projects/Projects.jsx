import React from "react";
import ProjectCard from "./ProjectCard/ProjectCards";
import './Projects.css'

const projects = [
    { title: 'Summer House', image: 'assets/summer-house.jpg' },
    { title: 'Brick House', image: '/assets/brick-house.jpg' },
    { title: 'Renovated', image: '/assets/renovated.jpg' },
    { title: 'Barn House', image: '/assets/barn-house.jpg' },
    { title: 'Summer House', image: '/assets/summer-house2.jpg' },
    { title: 'Brick House', image: '/assets/brick-house2.jpg' },
    { title: 'Renovated', image: '/assets/renovated2.jpg' },
    { title: 'Barn House', image: '/assets/barn-house2.jpg' }
];
    

function Projects() {

    return (
        <div id="Projects">
        <h2 id="#Project">Projects</h2>
        <div className="projects">
            {projects.map((project, index) => {
                return (
                    <ProjectCard key={index} title={project.title} image={project.image}/>
                );
            })}
        </div>
        </div>
    );
}


export default Projects;