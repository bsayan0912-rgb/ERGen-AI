import "./FeaturesSection.css";

function FeaturesSection() {

  const handleMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform =
      "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (

    <section id="features" className="features-section">

      <div className="features-particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <h2>Built for Students, Developers & Architects</h2>

      <div className="features-grid">

        <div className="feature-item" onMouseMove={handleMove} onMouseLeave={handleLeave}>
          <h4>AI-Powered ER Generation</h4>
          <p>Generate complete database structures in seconds.</p>
        </div>

        <div className="feature-item" onMouseMove={handleMove} onMouseLeave={handleLeave}>
          <h4>Editable Diagrams <span className="premium">(Premium)</span></h4>
          <p>Modify entities, attributes and relationships easily.</p>
        </div>

        <div className="feature-item" onMouseMove={handleMove} onMouseLeave={handleLeave}>
          <h4>Export to PDF & PNG <span className="premium">(Premium)</span></h4>
          <p>Download diagrams in high-quality formats.</p>
        </div>

        <div className="feature-item" onMouseMove={handleMove} onMouseLeave={handleLeave}>
          <h4>Preview Generated Structure</h4>
          <p>See diagram structure before finalizing.</p>
        </div>

        <div className="feature-item" onMouseMove={handleMove} onMouseLeave={handleLeave}>
          <h4>Save & Manage Projects</h4>
          <p>Store and organize multiple database designs.</p>
        </div>

        <div className="feature-item" onMouseMove={handleMove} onMouseLeave={handleLeave}>
          <h4>Secure Account Management</h4>
          <p>Protected authentication and user data security.</p>
        </div>

      </div>

    </section>
  );
}

export default FeaturesSection;