import "./ContactSection.css";

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <h2>Contact Us</h2>
        <p className="contact-sub">
          Have questions or suggestions? We'd love to hear from you.
        </p>

        <form className="contact-form">

          <div className="form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>

          <textarea
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="contact-btn">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default ContactSection;