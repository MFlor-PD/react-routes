import { Link } from "react-router-dom";
import projects from "../data/projects"; 
import { useState } from "react";

function Projects() {

     const [filter, setFilter] = useState("all");

    const filteredProjects = projects.filter((project) => {
        if (filter === 'frontend') {
            return project.GithubFrontend;
        } else if (filter === 'backend') {
            return project.GitHubBackend;
        } else {
            return true;
        }
    })

    const projectList = filteredProjects.map((project) => (
        <div key={project.id} className="project-card">
            <h2>{project.name}</h2>
            <img src={project.image} alt={project.name} className="project-image" />
            <p>{project.description}</p>
            <p>URL: <a href={project.url}>{project.url}</a></p>
            {project.GithubFrontend && (
            <p>GitHub (Frontend): <a href={project.GithubFrontend}>{project.GithubFrontend}</a></p>
            )}
            {project.GitHubBackend && (
            <p>GitHub (Backend): <a href={project.GitHubBackend}>{project.GitHubBackend}</a></p>
            )}
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
             <div className="filter-buttons">
          <button onClick={() => setFilter("all")} className="button">All</button>
          <button onClick={() => setFilter("frontend")}className="button">Frontend</button>
          <button onClick={() => setFilter("backend")}className="button">Backend</button>
        </div>
            <div className="projects-list">  
            {projectList}
            </div>
        </div>
        </>
    );
}

export default Projects;
