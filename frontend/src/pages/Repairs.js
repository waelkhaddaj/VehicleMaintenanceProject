import "./Repairs.css";

export default function Repairs() {

  /*
    like the first 2 pages these are the images we will use

  */
  const heroImg = process.env.PUBLIC_URL + "/images/regularmaintenance_1024x768.jpg";
  const diagImg = process.env.PUBLIC_URL + "/images/checkingthecarphtoto.png";
  const beforeImg = process.env.PUBLIC_URL + "/images/before.png";
  const afterImg = process.env.PUBLIC_URL + "/images/after.png";
  const precisionImg = process.env.PUBLIC_URL + "/images/precision-bg.jpg";

  return (
    <div>

      {/*
        fixed background photo 

        here in React we still create the parallax effect using CSS 
      (background-attachment: fixed)but we set the background image itself through inline CSS.
      
      the linear-gradient is added here to give a dark overlay on top of the image
      */}
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

      {/*
      
      Main repair section 

        Nothing special here, but note that the image always has a glowing yellow border
    
        and when we hover over it,the image lifts slightly upward;this effect is handled
        all of it in the CSS file (using transform and box-shadow).

      */}
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

      {/*
        reapair process
        its has same glowing and growing feature when you hover
        

        IMPORTANT note: from this section you start
         seeing  a backfround image that is fixed 
   adn has the parallex vibe but you wont find it
    anywhere here in this code becasue it is in the css file you can find it there
      */}
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

      {/*
        Before and after section

        This section allows the user to see the "before" image and when hovering, it swaps to the "after"image.

        in the old website:
        This was originally done in JS using image swapping.

        here in react version:
        We handle the hover swap using onMouseEnter + onMouseLeave.
      */}
      <section className="before-after">
        <h2>Before & After</h2>
        <p>See the difference DriveLab precision makes — results that speak for themselves.</p>

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

      {/*
        parallax abckgrounf here also

        handeled in css
      */}
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

      {/*
        Footer
        Same footer used on all pages
      */}
      <footer>
        <p>&copy; 2025 DriveLab. All rights reserved.</p>
      </footer>
    </div>
  );
}
