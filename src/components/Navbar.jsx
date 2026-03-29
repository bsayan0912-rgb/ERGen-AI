import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        AutoArch <span>AI</span>
      </Link>

      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <Link to="/login">Login</Link>
        <Link to="/login" className="nav-btn">
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
