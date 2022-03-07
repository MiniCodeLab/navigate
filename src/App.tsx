import { Link, NavLink, Outlet } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1>React Router v6 - MiniCodeLab 🧪</h1>
      </header>

      <div className="body">
        <nav className="nav">
          <NavLink to="">Home</NavLink>
          <NavLink to="heroes">Heroes</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>

        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
