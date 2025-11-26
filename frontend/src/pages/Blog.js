import "./Blog.css";
import { Link } from "react-router-dom";

// Safe image paths
const heroImg = process.env.PUBLIC_URL + "/images/tools.jpg";
const post1Img = process.env.PUBLIC_URL + "/images/worried.png";
const post2Img = process.env.PUBLIC_URL + "/images/regularmaintenance_1024x768.jpg";
const post3Img = process.env.PUBLIC_URL + "/images/tires.jpg";

export default function Blog() {
  return (
    <div>

      {/* HERO SECTION */}
      <section
        className="blog-hero"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0,0,0,0.55),
            rgba(0,0,0,0.65)
          ), url(${heroImg})`,
        }}
      >
        <div className="hero-content">
          <p className="tagline">— OUR BLOG</p>
          <h1>Insights, Tips & Car Care Guides</h1>
          <p className="subtitle">
            Stay updated with DriveLab’s latest maintenance advice, trends, and automotive news.
          </p>
        </div>
      </section>

      {/* BLOG FEED */}
      <section className="blog-feed">
        <h2>Latest Insights</h2>

        {/* POST 1 */}
        <article className="blog-post">
          <img src={post1Img} alt="Warning Signs" />

          <div className="post-content">
            <h3>5 Warning Signs Your Car Needs Immediate Service</h3>
            <p className="meta">
              By <strong>DriveLab Experts</strong> · March 2025
            </p>
            <p>
              Recognizing issues early can prevent expensive repairs. Here’s what to watch out for —
              from strange noises to dashboard warnings.
            </p>
            <Link to="#" className="read-more">Read More →</Link>
          </div>
        </article>

        {/* POST 2 */}
        <article className="blog-post reverse">
          <img src={post2Img} alt="Maintenance Tips" />

          <div className="post-content">
            <h3>Why Regular Maintenance Saves You Money</h3>
            <p className="meta">
              By <strong>DriveLab Team</strong> · February 2025
            </p>
            <p>
              Regular checkups not only extend your car’s life but also save you thousands in repair
              costs. Discover the key habits of car longevity.
            </p>
            <Link to="#" className="read-more">Read More →</Link>
          </div>
        </article>

        {/* POST 3 */}
        <article className="blog-post">
          <img src={post3Img} alt="Tire Tips" />

          <div className="post-content">
            <h3>Top 5 Tips to Extend the Life of Your Tires</h3>
            <p className="meta">
              By <strong>DriveLab Experts</strong> · January 2025
            </p>
            <p>
              Keep your tires lasting longer with smart maintenance techniques — alignment,
              rotation, and proper inflation matter more than you think.
            </p>
            <Link to="#" className="read-more">Read More →</Link>
          </div>
        </article>

      </section>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2025 DriveLab. All rights reserved.</p>
      </footer>

    </div>
  );
}
