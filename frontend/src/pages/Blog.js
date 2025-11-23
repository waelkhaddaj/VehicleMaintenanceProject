import "./Blog.css";

export default function Blog() {
  return (
    <div>

      {/* BLOG HERO */}
      <section
        className="blog-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url('/images/tools.jpg')",
        }}
      >
        <div className="hero-content">
          <h1>Our Blog</h1>
          <p className="subtitle">Insights, tips, and the latest from DriveLab.</p>
        </div>
      </section>

      {/* BLOG FEED */}
      <section className="blog-feed">
        <h2>Latest Posts</h2>

        {/* POST 1 */}
        <div className="blog-post">
          <img src="/images/worried.png" alt="Warning Signs" />
          <div className="post-content">
            <p className="meta">Updated • 2025</p>
            <h3>5 Warning Signs Your Car Needs Immediate Service</h3>
            <p>
              Strange noises, warning lights, or performance changes can indicate
              serious issues. Learn when to act fast to avoid costly repairs.
            </p>
            <a href="#" className="read-more">Read More →</a>
          </div>
        </div>

        {/* POST 2 */}
        <div className="blog-post reverse">
          <img src="/images/garage-team.jpg" alt="Maintenance Tips" />
          <div className="post-content">
            <p className="meta">Updated • 2025</p>
            <h3>Why Regular Maintenance Saves You Money</h3>
            <p>
              Routine maintenance keeps your car running smoothly and prevents
              breakdowns. Discover how small checkups save big money.
            </p>
            <a href="#" className="read-more">Read More →</a>
          </div>
        </div>

        {/* POST 3 */}
        <div className="blog-post">
          <img src="/images/tire & Wheel Alignment.png" alt="Tire Tips" />
          <div className="post-content">
            <p className="meta">Updated • 2025</p>
            <h3>Top 5 Tips to Extend the Life of Your Tires</h3>
            <p>
              Proper air pressure, wheel alignment, and rotation can extend your
              tire life and keep you safe on the road.
            </p>
            <a href="#" className="read-more">Read More →</a>
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
