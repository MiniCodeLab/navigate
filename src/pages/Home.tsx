import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        Routes React
        <li>
          <Link to="heroes">Heroes</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
