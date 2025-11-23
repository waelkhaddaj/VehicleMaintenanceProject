// src/components/Navbar.js
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Drive<span>Lab</span>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/repairs">Repairs</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>

        {/* NEW LINKS */}
        <li><a href="/book">Book</a></li>
        <li><a href="/my-appointments">My Appointments</a></li>

        <li><a href="/login">Login</a></li>
      </ul>

      <div className="contact-info">
        <p>Need help?</p>
        <strong>+961 76 172 015</strong>
      </div>
    </nav>
  );
}
