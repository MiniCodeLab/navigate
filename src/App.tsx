import "./App.css";
import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h2>React Router v6</h2>
      </header>
      <div className="body">
        <nav className="nav">
          <Link to="">Home</Link>
          <Link to="heroes">Heroes</Link>
          <Link to="about">About</Link>
        </nav>
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
