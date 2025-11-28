import "./Blog.css";
import { Link } from "react-router-dom";

/*
  like i said in th eother ages thes are the images.....
*/
const heroImg = process.env.PUBLIC_URL + "/images/tools.jpg";
const post1Img = process.env.PUBLIC_URL + "/images/worried.png";
const post2Img = process.env.PUBLIC_URL + "/images/regularmaintenance_1024x768.jpg";
const post3Img = process.env.PUBLIC_URL + "/images/tires.jpg";

export default function Blog() {
  return (
    <div>

      {/*
        Hero section
        like the pther pages we have a fixed background image you can see it in css file
      */}
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

      {/*
        Blog feed section 

          Here we display the blog posts in a vertical list.

          Each post is an <article> with an image and a text sectio andd
          the layout(side-by-side design,hover effect,reverse layout....)
          is all  controlled by the Blog.css file
      */}
      <section className="blog-feed">
        <h2>Latest Insights</h2>

      
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

      {/*
        Footer
        Same footer used across all pages
      */}
      <footer>
        <p>&copy; 2025 DriveLab. All rights reserved.</p>
      </footer>

    </div>
  );
}
