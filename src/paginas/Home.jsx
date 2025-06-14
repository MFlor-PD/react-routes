import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of your application.</p>
      <Link className="right-link" to="/projects">Go to Projects</Link>
      <br />
      <span><Link className="left-link" to="/resume">Go to Resume</Link></span>
    </div>
  );
}

export default Home;
