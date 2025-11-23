import "./Home.css";

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="hero"
        style={{
          backgroundImage: "url('/images/garagepicforhome.jpg')",
        }}
      >
        <div className="hero-content">
          <p className="tagline">— PREMIUM</p>
          <h1>Vehicle Repair</h1>
          <p className="subtitle">Professional service for every car and every customer.</p>
          <p>
            Experience premium auto care—comfort, clarity, and affordability—perfect for routine
            maintenance, diagnostics, or urgent repair work.
          </p>

          <div className="hero-buttons">
            <a href="/services" className="btn yellow">View Services</a>
            <a href="/book" className="btn outline">Book Now</a>
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="booking">
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const formData = new FormData(e.target);
            const serviceType = formData.get("serviceType");
            const location = formData.get("location");
            const date = formData.get("date");

            try {
              const res = await fetch("http://localhost:3001/api/book", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  service_type: serviceType,
                  location,
                  date,
                  user_id: 1, // temp user
                }),
              });

              const data = await res.json();

              if (!res.ok) {
                alert(data.error || "Booking failed");
              } else {
                alert(data.message || "Appointment booked!");
                e.target.reset();
              }
            } catch (err) {
              console.error(err);
              alert("Network error while booking. Is backend running?");
            }
          }}
        >
          <select name="serviceType" required>
            <option value="">Choose Service Type</option>
            <option value="oil">Oil Change</option>
            <option value="brakes">Brake Check</option>
            <option value="engine">Engine Diagnostic</option>
          </select>

          <input name="location" type="text" placeholder="Drop-off Location" required />
          <input name="date" type="date" required />

          <button type="submit" className="btn yellow">
            Find Slot
          </button>
        </form>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Us</h2>
          <p>Trusted car care — expert repairs, premium service, and honest pricing.</p>

          <div className="features">
            <div className="feature-box">
              <h3>Certified Technicians</h3>
              <p>Our mechanics are factory-trained and ASE-certified.</p>
            </div>

            <div className="feature-box">
              <h3>Genuine Parts</h3>
              <p>We use only high-quality OEM or certified parts.</p>
            </div>

            <div className="feature-box">
              <h3>Quick Turnaround</h3>
              <p>Fast service without cutting corners.</p>
            </div>

            <div className="feature-box">
              <h3>Transparent Pricing</h3>
              <p>No hidden fees — honest work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRECISION SECTION */}
      <section
        className="precision"
        style={{
          backgroundImage: "url('/images/precision-bg.jpg')",
        }}
      >
        <h2>Where Precision Meets Passion</h2>
        <p>DriveLab delivers expert repairs with cutting-edge tools.</p>
      </section>

      {/* BLOG */}
      <section className="blog">
        <div className="container">
          <h2>Our Blog</h2>
          <p className="blog-intro">Latest tips and insights from DriveLab.</p>

          <div className="blog-posts">
            <div className="post">
              <img src="/images/engine.jpg" alt="" />
              <h3>5 Warning Signs Your Car Needs Service</h3>
            </div>

            <div className="post">
              <img src="/images/garage-team.jpg" alt="" />
              <h3>Why Maintenance Saves Money</h3>
            </div>

            <div className="post">
              <img src="/images/tools.jpg" alt="" />
              <h3>Top 5 Tips to Extend Tire Life</h3>
            </div>
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
