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
            <p>I'm a Full Stack Developer with a strong focus on creating applications that simplify everyday life. I enjoy building intuitive, user-friendly web applications using technologies like React, JavaScript, CSS, Node.js, Express, APIs, and databases. My projects reflect both technical proficiency and a strong attention to design, usability, and performance.
               I worked on a variety of applications—from dynamic dashboards and e-commerce sites to intelligent work scheduling tools. I’m passionate about clean code, responsive design, and crafting meaningful digital experiences.
               Always learning, always building, and never afraid of new challenges. Falling down, getting back up, and moving forward is the key to success. Nobody said it would be easy, but we have to start.</p>

            <p>“The most difficult thing is the decision to act, the rest is merely tenacity.” Amelia Earhart</p>      
          <h2>Education</h2>
            {studiesList}

          <h2>Work Experience</h2>
            {laboralExprience}
      </div>
   </>
 );
}


export default Resume;
