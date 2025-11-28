import "./Services.css";

export default function Services() {
  /*
    these are the images used for the sections we will uise in this page

  like hom.jswe are using process.env.PUBLIC_URL so the images load correctly after deploymentt
  */
  const heroBg = process.env.PUBLIC_URL + "/images/service-hero.jpg";

  const imgOil = process.env.PUBLIC_URL + "/images/Oil Change & Maintenance.png";
  const imgBrake = process.env.PUBLIC_URL + "/images/Brake Inspection & Repair.png";
  const imgEngine = process.env.PUBLIC_URL + "/images/Engine Diagnostics.png";
  const imgAlignment = process.env.PUBLIC_URL + "/images/tire-wheel.png";
  const imgAC = process.env.PUBLIC_URL + "/images/tire-wheel.png";
  const imgDetailing = process.env.PUBLIC_URL + "/images/Air Conditioning Service.png";

  return (
    <div>

      {/*very important note:

        now the yellow highlight on the Navbar "Services"when we click it  is now handled automatically
        using the react router Navlink instead of manually adding class="active like before".
      */}
      <section className="top-title-section">
        <p className="top-label">— WHAT WE OFFER</p>
        <h1 className="main-title">Our Vehicle Services</h1>
        <p className="subtitle">
          From diagnostics to detailing, DriveLab provides expert care for every part of your car.
        </p>
      </section>

      {/*
        here as you see in th e page i made a grid of boxes that contains images adn text under them with a nice design
   to show the services we offer ,if you notic when we hover over any box of then it grows a little bit and you see like a light 
   on the borders of it this is done using css as i said in the first page

   so here nothign change it is the same from the old prject
      */}
      <section className="services-section">
        <h2>Our Core Services</h2>
        <p className="intro">
          We deliver premium car care with reliability, safety, and professional attention to every customer.
        </p>

        <div className="service-grid">
          {/* Service 1 */}
          <div className="service-card">
            <img src={imgOil} alt="Oil Change" />
            <h3>Oil Change & Maintenance</h3>
            <p>Keep your engine running smoothly with top-grade oils and expert service.</p>
          </div>

          {/* Service 2 */}
          <div className="service-card">
            <img src={imgBrake} alt="Brake Repair" />
            <h3>Brake Inspection & Repair</h3>
            <p>Ensure your safety with precision brake diagnostics, pad replacements, and repairs.</p>
          </div>

          {/* Service 3 */}
          <div className="service-card">
            <img src={imgEngine} alt="Engine Diagnostics" />
            <h3>Engine Diagnostics</h3>
            <p>Advanced tools to quickly identify and fix engine issues efficiently.</p>
          </div>

          {/* Service 4 */}
          <div className="service-card">
            <img src={imgAlignment} alt="Tire Alignment" />
            <h3>Tire & Wheel Alignment</h3>
            <p>Improve handling, extend tire life, and ensure a smooth, safe driving experience.</p>
          </div>

          {/* Service 5 */}
          <div className="service-card">
            <img src={imgAC} alt="AC Service" />
            <h3>Air Conditioning Service</h3>
            <p>Stay comfortable with complete AC inspection, recharging, and repair.</p>
          </div>

          {/* Service 6 */}
          <div className="service-card">
            <img src={imgDetailing} alt="Car Detailing" />
            <h3>Full Car Detailing</h3>
            <p>Bring back your car’s shine inside and out with our detailing professionals.</p>
          </div>
        </div>
      </section>

      {/*
        Footer
        same footer from all pages
      */}
      <footer>
        <p>© 2025 DriveLab. All rights reserved.</p>
      </footer>
    </div>
  );
}
