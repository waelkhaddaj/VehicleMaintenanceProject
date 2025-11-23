import "./Repairs.css";

export default function Repairs() {
  return (
    <div>

      {/* REPAIR HERO BANNER */}
      <section
        className="repair-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('/images/regularmaintenance_1024x768.jpg')",
        }}
      >
        <h1>Repair & Maintenance</h1>
        <p>Your trusted partner for complete vehicle care.</p>
      </section>

      {/* MAIN REPAIR SECTION */}
      <section className="repair-section">
        <div className="text">
          <h2>Advanced Diagnostic Expertise</h2>
          <p>
            We identify issues quickly using the latest diagnostic tools and certified
            techniques. Whether it’s the engine, brakes, or electrical systems — your
            vehicle is in expert hands.
          </p>

          <ul>
            <li>✓ Engine & Transmission Repair</li>
            <li>✓ Brake System Analysis</li>
            <li>✓ Electrical System Diagnostics</li>
            <li>✓ Computerized Testing</li>
          </ul>
        </div>

        <div className="image-container">
          <img src="/images/checkingthecarphoto.png" alt="Diagnostics" />
        </div>
      </section>

      {/* BEFORE / AFTER SECTION */}
      <section className="before-after">
        <h2>Before & After</h2>
        <p>See the difference our expert technicians make.</p>

        <div className="before-after-images">
          <img src="/images/before.png" alt="Before" />
          <img src="/images/after.png" alt="After" />
        </div>
      </section>

      {/* PRECISION PARALLAX */}
      <section
        className="precision"
        style={{
          backgroundImage: "url('/images/precision-bg.jpg')",
        }}
      >
        <h2>Where Precision Meets Passion</h2>
        <p>
          Our team ensures every repair is done with absolute care and attention to detail.
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2025 DriveLab. All rights reserved.</p>
      </footer>
    </div>
  );
}
