import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages - Components
import Home from "./pages/Home";
import About from "./pages/About";
import Heroes from "./pages/Heroes";
import Heroe from "./pages/Heroe";

ReactDOM.render(
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="heroes" element={<Heroes />}>
          <Route path=":heroeId" element={<Heroe />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route
          path="*"
          element={
            <main>
              <p>404 There's nothing here!</p>
            </main>
          }
        ></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
