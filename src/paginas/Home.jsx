import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { BiMessageSquareDetail } from 'react-icons/bi';

function Home() {
  return (
    <>
    <div className="home">
      <h1>Welcome to my Portfolio</h1>
      <p>
       I'm a Full Stack Developer with a strong focus on app development that eases everyday life.  
       I enjoy building intuitive, user-friendly web applications using technologies like React, JavaScript, and CSS, as well as backend tools like Node.js, Express, APIs, and databases.
      </p>

      <p>
       My projects reflect both technical proficiency and strong attention to design, usability, and performance.  
       I’ve worked on a variety of applications — from dynamic dashboards and e-commerce sites to intelligent work scheduling tools.
      </p>

      <p>
       I’m passionate about clean code, responsive design, and creating meaningful digital experiences.  
       Always learning, always building, and never afraid of new challenges.
      </p>

      <p>
       Alongside building personal and freelance projects, I'm also looking to grow professionally by joining teams where I can contribute and keep learning.  
       Whether it's an independent collaboration or a long-term role, I'm always excited about meaningful challenges.
      </p>

      <Link className="right-link" to="/projects">Go to Projects</Link>
      <br />
      <span><Link className="left-link" to="/resume">Go to Resume</Link></span>
    </div>
    
    <footer className="contact-icons">
  <a
    href="https://github.com/MFlor-PD"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub size={30} />
  </a>
  <a
    href="https://www.linkedin.com/in/florenciaperezd"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin size={30} />
  </a>
  <a
    href="mailto:mariaflorenciaperezd@gmail.com"
    aria-label="Email"
  >
    <FaEnvelope size={30} />
  
  </a>
  <Link to="/form" aria-label="Contact Form">
  <BiMessageSquareDetail size={30} />
</Link>
</footer>

  </>
  );
}

export default Home;
