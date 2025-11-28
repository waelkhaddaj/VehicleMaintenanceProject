import "./Home.css";
import { Link } from "react-router-dom";

/*
  These are the images used for the sections we will uise in this page

  note :we are using process.env.PUBLIC_URL so the images load correctly after deploymentt
*/
const heroBg = process.env.PUBLIC_URL + "/images/garagepicforhome.jpg";
const precisionBg = process.env.PUBLIC_URL + "/images/precision-bg.jpg";
const engineImg = process.env.PUBLIC_URL + "/images/engine.jpg";
const garageTeamImg = process.env.PUBLIC_URL + "/images/garage-team.jpg";
const toolsImg = process.env.PUBLIC_URL + "/images/tools.jpg";

export default function Home() {
  return (
    <div>
      {/* 
        hero section
      */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="hero-content">
          <p className="tagline">— PREMIUM</p>
          <h1>Vehicle Repair</h1>

          <p className="subtitle">
            Professional service for every car and every customer.
          </p>

          <p>
            Experience premium auto care—comfort, clarity, and affordability—perfect
            for routine maintenance, diagnostics, or urgent repair work.
          </p>

          {/* you see here the buttons:View services + Book now 
              i use <Link> instead of <a> because noew we use react Router */}
          <div className="hero-buttons">
            <Link to="/services" className="btn yellow">
              View Services
            </Link>

            {/* when clicked this button will tkae the user to the booking  page 
            adn when the view services is clicked it take the user to the sevices page*/}
            <Link to="/book" className="btn outline">
              Book Now
            </Link>
          </div>
        </div>
      </section>


      {/* 
        Why Choose Us(honestly nothing special here just a section for the why choose us and inside ti div's then inside the features div
   there is the div class for every box i put and so on) -->

   <!--Very important note here if you hover overany of the boxes it grows a little bit and you see like a light on the borders of it
   this is done with css(on hover it moves the card 5 pixels upward using transform;and added a box shadow using box-shadow
      */}
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

      {/* 
        here you're scrolling and you arrive to this section 
        you will startr s eeing and image in the backgriund
   that is fixed and when you scroll yousee more of it ,
   this is parallax image with a dark overlay done in css with the help of my friend chatgpt
      */}
      <section
        className="precision"
        style={{
          backgroundImage: `url(${precisionBg})`,
        }}
      >
        <h2>Where Precision Meets Passion</h2>
        <p>DriveLab delivers expert repairs with cutting-edge tools.</p>
      </section>

      {/* 
        here also nothing special only a box that contains an image and under it a text ,but it is a nice design
      */}
      <section className="blog">
        <div className="container">
          <h2>Our Blog</h2>
          <p className="blog-intro">Latest tips and insights from DriveLab.</p>

          <div className="blog-posts">
            <div className="post">
              <img src={engineImg} alt="Engine" />
              <h3>5 Warning Signs Your Car Needs Service</h3>
            </div>

            <div className="post">
              <img src={garageTeamImg} alt="Garage team" />
              <h3>Why Maintenance Saves Money</h3>
            </div>

            <div className="post">
              <img src={toolsImg} alt="Tools" />
              <h3>Top 5 Tips to Extend Tire Life</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 DriveLab. All rights reserved.</p>
      </footer>
    </div>
  );
}
