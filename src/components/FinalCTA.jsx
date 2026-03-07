import { Link } from "react-router-dom";
import "./FinalCTA.css";

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="cta-content">
        <h2>
          Start Building Smarter <span>Databases Today</span>
        </h2>

        <p>
          Generate your first ER diagram in seconds — fast, accurate, and AI-powered.
        </p>

        <Link to="/login" className="cta-button">
          Get Started Now
        </Link>
      </div>
    </section>
  );
}

export default FinalCTA;