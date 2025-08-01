import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects"; 

function Projects() {
    const projectList = projects.map((project) => (
        <div key={project.id} className="project-card">
            <h2>{project.name}</h2>
            <img src={project.image} alt={project.name} className="project-image" />
            <p>{project.description}</p>
            <p>URL: <a href={project.url}>{project.url}</a></p>
        </div>
    ));
    return (
        <>
        <div className="sticky-links">
            <Link to="/" className="right-link">Go to Home</Link>
            <Link to="/resume" className="left-link">Go to Resume</Link>
        </div>
        <div className="projects">
            <h1>Have a Look!</h1>
            <div className="projects-list">  
            {projectList}
            </div>
        </div>
        </>
    );
}

export default Projects;
