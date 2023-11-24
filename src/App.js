import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// Adjust the relative path based on your project structure
import DriverPage from "./pages/DriverPage";
import TeamPage from "./pages/TeamPage";
import RacesPage from "./pages/RacesPage";
import UniqueDriverPage from "./pages/UniqueDriverPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar">
          <ul className="navbar__menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/driver">Drivers</Link></li>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/races">Races</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/driver" element={<DriverPage />} />
          <Route path="/teams" element={<TeamPage />} />
          <Route path="/races" element={<RacesPage />} />
          <Route path="/driver/:id" element={<UniqueDriverPage />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
