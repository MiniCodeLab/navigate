import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <ul>
        Routes React
        <li>
          <Link to="heroes">Heroes</Link>
        </li>
      </ul>
    </div>
  );
}

export default About;
