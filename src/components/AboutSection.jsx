import "./AboutSection.css";

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <h2>About ERGen AI</h2>

        <p>
          ERGen AI helps developers and students design structured database
          architectures instantly using AI.
        </p>

        <p>
          Instead of manually drawing complex ER diagrams, simply describe
          your system and let ERGen AI generate a clean architecture in seconds.
        </p>

        <ul className="about-features">
          <li> AI-powered diagram generation</li>
          <li> Visual database structure preview</li>
          <li> Save and manage multiple projects</li>
          <li> Export diagrams in professional formats</li>
        </ul>

      </div>

    </section>
  );
}

export default AboutSection;