import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// Adjust the relative path based on your project structure
import DriverPage from "./pages/DriverPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar">
          <ul className="navbar__menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/driver">Driver Page</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/driver" element={<DriverPage />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
