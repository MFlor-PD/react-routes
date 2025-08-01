import React from "react";
import { Link } from "react-router-dom";
import { studies, experiences } from '../data/resume.js';


function Resume() {
  const laboralExprience = experiences.map((experience) => (
    <div key={experience.id} className="resume-card">
      <h3>{experience.title}</h3>
      <p>{experience.company}</p>
      <p>{experience.date}</p>
    </div>
  ));
  const studiesList = studies.map((study) => (
    <div key={study.id} className="resume-card">
      <h3>{study.title}</h3>
      <p>{study.institution}</p>
      <p>{study.date}</p>
    </div>
  ));
  return (
   <>
     <div className="sticky-links">
            <Link to="/" className="right-link">Go to Home</Link>
            <Link className="left-link" to="/projects">Go to Projects</Link>
      </div>
    
      <div className="resume">
          <h1>My Resume</h1>
            <p>I'm a simple person who enjoys life, embraces every opportunity it brings, and is always grateful for the journey.
              Humble like my portfolio — but always ready to grow, ready for action, ready for more.</p>
            
            <p>“Regret trying, not missing the chance because you weren't brave enough.”</p>
 
          <h2>Education</h2>
            {studiesList}

          <h2>Work Experience</h2>
            {laboralExprience}
      </div>
   </>
 );
}


export default Resume;
