import "./ProblemSection.css";

function ProblemSection() {
  return (
    <section className="problem-section">

      <div className="problem-container">

        {/* LEFT TEXT */}
        <div className="problem-content">
          <h2>Database Design Shouldn’t Be Complicated</h2>
          <p>
            Translating system requirements into Architectural diagrams manually
            is slow, confusing, and error-prone. Let ERGen AI simplify the
            process for you — instantly.
          </p>
        </div>

        {/* RIGHT ANIMATION */}
       <div className="er-background">

<svg className="network" viewBox="0 0 600 350">

{/* CONNECTION LINES */}
<line x1="300" y1="60" x2="150" y2="160" className="net-line l1"/>
<line x1="300" y1="60" x2="450" y2="160" className="net-line l2"/>

<line x1="150" y1="160" x2="80" y2="280" className="net-line l3"/>
<line x1="150" y1="160" x2="240" y2="280" className="net-line l4"/>

<line x1="450" y1="160" x2="360" y2="280" className="net-line l5"/>
<line x1="450" y1="160" x2="520" y2="280" className="net-line l6"/>

{/* BOXES */}
<rect x="260" y="40" width="80" height="40" rx="8" className="node"/>
<rect x="110" y="140" width="80" height="40" rx="8" className="node"/>
<rect x="410" y="140" width="80" height="40" rx="8" className="node"/>

<rect x="40" y="260" width="80" height="40" rx="8" className="node"/>
<rect x="200" y="260" width="80" height="40" rx="8" className="node"/>
<rect x="360" y="260" width="80" height="40" rx="8" className="node"/>
<rect x="500" y="260" width="80" height="40" rx="8" className="node"/>

</svg>

</div>

      </div>

    </section>
  );
}

export default ProblemSection;