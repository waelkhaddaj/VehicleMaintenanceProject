import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

  // Check if a user is logged in
  const userName = localStorage.getItem("userName");

  // Simple logout by clearing storage and redirect to login page
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">

      {/* Website Logo */}
      <div className="logo">
        Drive<span>Lab</span>
      </div>

      {/* Main navigation linkss(React Router switches pages without reload) */}
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/repairs">Repairs</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/book">Book</NavLink></li>
        <li><NavLink to="/my-appointments">My Appointments</NavLink></li>
      </ul>

      {/* Right side("Need help?" text and  login/logout)*/}
      <div className="right-side">

      
        <div className="contact-info">
          <p>Need help?</p>
          <strong>+961 76 172 015</strong>
        </div>

        {/*If user is not logged in then show login i con */}
        {!userName && (
          <NavLink to="/login" className="login-icon">
            <img
              src={process.env.PUBLIC_URL + "/images/user-icon.png"}
              alt="Login"
            />
          </NavLink>
        )}

        {/*if user is logged in then show welcome and the name +logout button */}
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
