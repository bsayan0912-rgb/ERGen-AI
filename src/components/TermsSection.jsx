import "./TermsSection.css";

function TermsSection() {
  return (
    <section id="terms" className="terms-section">

      <h2>Terms & Conditions</h2>

      <p className="terms-intro">
        Simple rules to keep ERGen AI fair, secure, and reliable for everyone.
      </p>

      <div className="terms-grid">

        <div className="terms-card">
          <h3>Fair Usage</h3>
          <p>Use ERGen AI responsibly and comply with applicable laws.</p>
        </div>

        <div className="terms-card">
          <h3>User Responsibility</h3>
          <p>You are responsible for the data and diagrams you generate.</p>
        </div>

        <div className="terms-card">
          <h3>Service Updates</h3>
          <p>We may update or improve features to maintain reliability.</p>
        </div>

        <div className="terms-card">
          <h3>Policy Changes</h3>
          <p>Terms may change occasionally. Continued use means acceptance.</p>
        </div>

      </div>

    </section>
  );
}

export default TermsSection;