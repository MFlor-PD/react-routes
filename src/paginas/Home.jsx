import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <>
    <div className="home">
      <h1>Welcome to my portfolio</h1>
      <p>I'm a very simple person who enjoys life, takes every opportunity it offers, and is always grateful for it.
         Humble like my portfolio, but always ready to grow, ready for action, ready for more. 
        "Regret trying, not missing the chance because you weren't brave enough."</p>
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
</footer>

  </>
  );
}

export default Home;
