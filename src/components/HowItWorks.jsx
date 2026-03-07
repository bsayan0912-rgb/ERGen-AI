import "./HowItWorks.css";

function HowItWorks() {
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

        <div className="how-card">
          <h3>1. Describe Your System</h3>
          <p>
            Enter a simple text prompt describing your database
            requirements and system components.
          </p>
        </div>

        <div className="how-card">
          <h3>2. AI Generates the Structure</h3>
          <p>
            Our AI analyzes relationships and automatically builds a
            structured Architectural diagram.
          </p>
        </div>

        <div className="how-card">
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