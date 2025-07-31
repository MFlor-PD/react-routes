import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to my portfolio</h1>
      <p>I'm a very simple person who enjoys life, takes advantage of every opportunity that life provides, and is always grateful for that.
         Humble like my portfolio, but always ready to grow, ready for action, ready for more. 
         Regret what you did, not what you didn’t do because you weren’t brave enough to try.</p>
      <Link className="right-link" to="/projects">Go to Projects</Link>
      <br />
      <span><Link className="left-link" to="/resume">Go to Resume</Link></span>
    </div>
  );
}

export default Home;
