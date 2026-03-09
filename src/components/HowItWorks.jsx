import "./HowItWorks.css";

function HowItWorks() {

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
      "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section className="how-section">
      <div className="how-header">
        <h2>From Prompt to Architectural Diagram — Instantly</h2>
        <p>
          Describe your system like “Online Banking System” and watch our AI
          generate a complete Architectural diagram in seconds.
        </p>
      </div>

      <div className="how-cards">

        <div className="how-card" onMouseMove={handleMove} onMouseLeave={handleLeave}>
          <h3>1. Describe Your System</h3>
          <p>
            Enter a simple text prompt describing your database
            requirements and system components.
          </p>
        </div>

        <div className="how-card" onMouseMove={handleMove} onMouseLeave={handleLeave}>
          <h3>2. AI Generates the Structure</h3>
          <p>
            Our AI analyzes relationships and automatically builds a
            structured Architectural diagram.
          </p>
        </div>

        <div className="how-card" onMouseMove={handleMove} onMouseLeave={handleLeave}>
          <h3>3. Edit, Export & Save</h3>
          <p>
            Customize your diagram, refine components and export the
            final architecture instantly.
          </p>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;