import "./ContactSection.css";

function ContactSection() {
  return (
    <section id="contact" className="contact-section">

      <h2>Contact Us</h2>
      <p className="contact-sub">
        Have questions or suggestions? We'd love to hear from you.
      </p>

      <div className="contact-container">

        {/* LEFT INFO PANEL */}

        <div className="contact-info">

          <h3>Let's Talk</h3>

          <p>
            Whether you have a question about features, pricing,
            or anything else, our team is ready to help.
          </p>

          <div className="contact-items">

            <div className="contact-item">
              📧 support@ergenai.com
            </div>

            <div className="contact-item">
              💬 Fast developer support
            </div>

            <div className="contact-item">
              ⚡ Usually responds within 24 hours
            </div>

          </div>

        </div>


        {/* RIGHT FORM */}

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