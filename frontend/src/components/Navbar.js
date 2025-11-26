import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

  // 👉 Get logged in user
  const userName = localStorage.getItem("userName");

  // 👉 Logout function
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        Drive<span>Lab</span>
      </div>

      {/* MAIN NAV LINKS */}
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/repairs">Repairs</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>

        <li><NavLink to="/book">Book</NavLink></li>
        <li><NavLink to="/my-appointments">My Appointments</NavLink></li>
      </ul>

      {/* RIGHT SIDE (HELP + ICON) */}
      <div className="right-side">

        <div className="contact-info">
          <p>Need help?</p>
          <strong>+961 76 172 015</strong>
        </div>

        {/* 👉 IF NOT LOGGED IN → show login icon */}
        {!userName && (
          <NavLink to="/login" className="login-icon">
            <img
              src={process.env.PUBLIC_URL + "/images/user-icon.png"}
              alt="Login"
            />
          </NavLink>
        )}

        {/* 👉 IF LOGGED IN → show: "Welcome NAME" + Logout button */}
        {userName && (
          <div className="nav-user-area">
            <span className="welcome-text">Welcome, {userName}</span>

            <button
              onClick={handleLogout}
              className="logout-btn"
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                borderRadius: "5px",
                border: "none",
                background: "#d9534f",
                color: "white",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </div>
        )}

      </div>

    </nav>
  );
}
