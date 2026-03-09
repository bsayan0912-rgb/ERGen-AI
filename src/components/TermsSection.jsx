import "./TermsSection.css";

function TermsSection() {
  return (
    <section id="terms" className="terms-section">

      <div className="terms-container">

        <h2>Terms & Conditions</h2>

        <p className="terms-intro">
          By using ERGen AI, you agree to the following terms and conditions.
          Please read them carefully before using our services.
        </p>

        <div className="terms-block">

          <h3>1. Use of Service</h3>
          <p>
            ERGen AI provides tools for generating and managing database
            architecture diagrams. Users must use the service responsibly
            and in accordance with applicable laws.
          </p>

        </div>

        <div className="terms-block">

          <h3>2. User Responsibility</h3>
          <p>
            Users are responsible for the content they submit and generate
            using ERGen AI. We are not liable for misuse of generated diagrams
            or data.
          </p>

        </div>

        <div className="terms-block">

          <h3>3. Service Availability</h3>
          <p>
            While we strive to maintain uninterrupted service, ERGen AI
            cannot guarantee continuous availability and may perform
            updates or maintenance when required.
          </p>

        </div>

        <div className="terms-block">

          <h3>4. Changes to Terms</h3>
          <p>
            We may update these terms from time to time. Continued use of
            the platform indicates acceptance of any revised terms.
          </p>

        </div>

      </div>

    </section>
  );
}

export default TermsSection;