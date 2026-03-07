import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-logo">
          <h3>ERGen <span>AI</span></h3>
        </div>

        {/* Links */}
        <div className="footer-links">
          <Link to="/about">About</Link>
          <span>|</span>
          <Link to="/contact">Contact Us</Link>
          <span>|</span>
          <a href="#pricing">Pricing</a>
          <span>|</span>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaFacebookF /></a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;