import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to my portfolio</h1>
      <p>I'm a very simple person who enjoys life, takes every opportunity it offers, and is always grateful for it.
         Humble like my portfolio, but always ready to grow, ready for action, ready for more. 
        "Regret trying, not missing the chance because you weren't brave enough."</p>
      <Link className="right-link" to="/projects">Go to Projects</Link>
      <br />
      <span><Link className="left-link" to="/resume">Go to Resume</Link></span>
    </div>
  );
}

export default Home;
