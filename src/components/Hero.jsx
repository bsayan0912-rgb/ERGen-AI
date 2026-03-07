import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
       <div className="particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="hero-left">
        <h1>
          Design Architectural diagram <br />
          <span>Instantly with AI</span>
        </h1>

        <p>
          Turn simple text prompts into structured, professional
          Architectural diagrams in seconds.
          No manual drawing. No complexity.
        </p>

        <div className="hero-buttons">
          <Link to="/login" className="btn-primary">
            Get Started for Free
          </Link>

          <a href="#pricing" className="btn-secondary">
            View Pricing
          </a>
        </div>
       </div>

      <div className="hero-right">
  <svg className="diagram" viewBox="0 0 500 350">

    {/* Boxes */}
    <rect x="210" y="40" width="90" height="45" rx="10" className="box"/>
    <rect x="60" y="150" width="110" height="45" rx="10" className="box"/>
    <rect x="330" y="150" width="110" height="45" rx="10" className="box"/>
    <rect x="210" y="270" width="90" height="45" rx="10" className="box"/>

    {/* Animated Lines */}
    <line x1="255" y1="85" x2="115" y2="150" className="line l1"/>
    <line x1="255" y1="85" x2="385" y2="150" className="line l2"/>
    <line x1="115" y1="195" x2="255" y2="270" className="line l3"/>
    <line x1="385" y1="195" x2="255" y2="270" className="line l4"/>

  </svg>
</div>
    </section>
  );
}

export default Hero;