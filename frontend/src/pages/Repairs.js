import "./Repairs.css";

export default function Repairs() {
  // define safe public URLs for all images
  const heroImg = process.env.PUBLIC_URL + "/images/regularmaintenance_1024x768.jpg";
  const diagImg = process.env.PUBLIC_URL + "/images/checkingthecarphtoto.png";
  const beforeImg = process.env.PUBLIC_URL + "/images/before.png";
  const afterImg = process.env.PUBLIC_URL + "/images/after.png";
  const precisionImg = process.env.PUBLIC_URL + "/images/precision-bg.jpg";

  return (
    <div>

      {/* REPAIR HERO BANNER */}
      <section
        className="repair-hero"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0,0,0,0.5), 
            rgba(0,0,0,0.6)
          ), url(${heroImg})`,
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
            techniques. Whether it's the engine, brakes, or electrical systems — your
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
          <img src={diagImg} alt="Diagnostics" />
        </div>
      </section>

      {/* OUR REPAIR PROCESS (NEW SECTION) */}
      <section className="precision">
        <h2>Our Repair Process</h2>
        <p>Every vehicle gets a structured 4-step repair workflow — built for precision and transparency.</p>

        <div className="process-grid">
          <div className="feature-box">
            <h3>1. Inspection</h3>
            <p>We begin with a full system check and damage assessment.</p>
          </div>

          <div className="feature-box">
            <h3>2. Diagnostics</h3>
            <p>High-tech tools identify the root cause of failure.</p>
          </div>

          <div className="feature-box">
            <h3>3. Repair & Replace</h3>
            <p>Certified mechanics restore functionality with OEM-grade parts.</p>
          </div>

          <div className="feature-box">
            <h3>4. Quality Control</h3>
            <p>Every repair is tested and verified before handover.</p>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER SECTION (UPDATED) */}
      <section className="before-after">
        <h2>Before & After</h2>
        <p>See the difference our expert technicians make.</p>

        <div className="before-after-images">
          <img
            id="swapImg"
            src={beforeImg}
            data-alt={afterImg}
            alt="Before and After"
            onMouseEnter={(e) => (e.target.src = e.target.dataset.alt)}
            onMouseLeave={(e) => (e.target.src = beforeImg)}
          />
        </div>
      </section>

      {/* PRECISION PARALLAX */}
      <section
        className="precision parallax"
        style={{
          backgroundImage: `url(${precisionImg})`,
        }}
      >
        <h2>Our Guarantee</h2>
        <p>
         Your satisfaction drives us — every repair is backed by our 100% workmanship warranty.
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2025 DriveLab. All rights reserved.</p>
      </footer>
    </div>
  );
}
