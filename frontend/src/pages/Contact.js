import "./Contact.css";

export default function Contact() {
  return (
    <div>

      {/* HERO SECTION */}
      <section
        className="contact-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url('/images/contact-bg.jpg')",
        }}
      >
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p className="subtitle">We’re here to help — get in touch anytime.</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact-container">

          {/* LEFT BOX — CONTACT INFO */}
          <div className="contact-info-box">
            <h2>Get in Touch</h2>

            <ul>
              <li>📍 Beirut, Lebanon</li>
              <li>📞 +961 76 172 015</li>
              <li>✉️ support@drivelab.com</li>
              <li>🕒 Mon–Sat: 9:00 AM – 6:00 PM</li>
            </ul>

            <div className="map-container">
              <iframe
                title="DriveLab Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.0234938365677!2d35.50179662524721!3d33.89379182681619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f170d861c4217%3A0x54e83a25d816f1bb!2sBeirut!5e0!3m2!1sen!2slb!4v1700000000000!5m2!1sen!2slb"
                width="100%"
                height="200"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* RIGHT BOX — CONTACT FORM */}
          <div className="contact-form-box">
            <h2>Send a Message</h2>

            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2025 DriveLab. All rights reserved.</p>
      </footer>

    </div>
  );
}
