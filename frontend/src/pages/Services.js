import "./Services.css";

export default function Services() {
  return (
    <div>

      {/* HERO SECTION */}
      <section
        className="services-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('/images/service-hero.jpg')",
        }}
      >
        <div className="hero-content">
          <h1>Our Services</h1>
          <p className="subtitle">Premium care for every vehicle.</p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-section">
        <h2>What We Offer</h2>
        <p className="intro">High-quality car maintenance and repair solutions.</p>

        <div className="service-grid">

          <div className="service-card">
            <img src="/images/Oil Change & Maintenance.png" alt="" />
            <h3>Oil Change</h3>
            <p>Keep your engine healthy with premium oil and filters.</p>
          </div>

          <div className="service-card">
            <img src="/images/Engine Diagnostics.png" alt="" />
            <h3>Engine Diagnostics</h3>
            <p>Advanced diagnostics to detect and fix engine issues early.</p>
          </div>

          <div className="service-card">
            <img src="/images/Tire & Wheel Alignment.png" alt="" />
            <h3>Tire & Wheel Alignment</h3>
            <p>Increase safety and performance with perfect wheel alignment.</p>
          </div>

          <div className="service-card">
            <img src="/images/Brake Inspection & Repair.png" alt="" />
            <h3>Brake Check & Repair</h3>
            <p>Your safety first — full brake inspection and replacement.</p>
          </div>

          <div className="service-card">
            <img src="/images/Air Conditioning Service.png" alt="" />
            <h3>AC Service</h3>
            <p>Stay cool with complete air conditioning servicing.</p>
          </div>

          <div className="service-card">
            <img src="/images/regularmaintenance.jpg" alt="" />
            <h3>General Maintenance</h3>
            <p>Everything your vehicle needs for long-term reliability.</p>
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
