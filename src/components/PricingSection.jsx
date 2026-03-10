import "./PricingSection.css";

function PricingSection() {
  return (
    <section id="pricing" className="pricing-section">
       {/* SPARKLES BACKGROUND */}
      <div className="pricing-sparkles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h2>Simple, Transparent Pricing</h2>
      <p className="pricing-sub">
        Choose the plan that fits your workflow. Start free. Upgrade anytime.
      </p>

      <div className="pricing-grid">

        {/* Free Plan */}
        <div className="pricing-card">
          <h3>Free</h3>
          <div className="price">₹0 <span>/ Forever</span></div>

          <ul>
            <li>✔ Generate ER Diagrams</li>
            <li>✔ Preview Generated Structure</li>
            <li>✔ Limited Usage</li>
          </ul>

          <button className="pricing-btn free-btn">
            Get Started
          </button>
        </div>

        {/* Premium Plan */}
        <div className="pricing-card premium-card">
             <div className="badge">Most Popular</div>
          <h3>Premium</h3>
          <div className="price">₹199 <span>/ Month</span></div>

          <ul>
            <li>✔ Unlimited Diagram Generation</li>
            <li>✔ Edit & Export (PDF/PNG)</li>
            <li>✔ Save & Manage Projects</li>
            <li>✔ Priority Support</li>
          </ul>

          <button className="pricing-btn premium-btn">
            Upgrade to Premium
          </button>
        </div>

      </div>
    </section>
  );
}

export default PricingSection;