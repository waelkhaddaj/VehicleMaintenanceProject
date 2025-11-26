import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [mode, setMode] = useState("login"); // "login" or "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [carModel, setCarModel] = useState("");
  const [message, setMessage] = useState("");

  // 👉 CHECK: is someone already logged in?
  const loggedUserName = localStorage.getItem("userName");

  if (loggedUserName) {
    // 👉 If yes, DON'T show login/signup form
    return (
      <div className="login-page">
        <section className="login-hero">
          <h1>You are already logged in</h1>
          <p>Welcome, {loggedUserName} 👋</p>
        </section>

        <div className="login-box">
          <button
            className="login-btn"
            onClick={() => {
              // 👉 Logout: remove saved user and reload
              localStorage.clear();
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  // -------------------- LOGIN --------------------
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.user) {
        // 👉 SAVE USER DATA
        localStorage.setItem("userId", data.user.id);
        localStorage.setItem("userName", data.user.name);

        alert("Login successful!");
        window.location.href = "/";
      } else {
        setMessage(data.message || "Invalid login");
      }
    } catch {
      setMessage("Connection error.");
    }
  };

  // -------------------- SIGNUP --------------------
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          phone,
          car_model: carModel,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Account created! You can now log in.");
        setMode("login");
      } else {
        setMessage(data.error || "Signup failed");
      }
    } catch {
      setMessage("Connection error.");
    }
  };

  return (
    <div className="login-page">

      {/* Hero */}
      <section className="login-hero">
        <h1>{mode === "login" ? "Welcome Back" : "Create Your Account"}</h1>
        <p>Log in or join DriveLab to manage your appointments easily.</p>
      </section>

      {/* Form Box */}
      <div className="login-box">

        {/* Switch buttons */}
        <div className="login-tabs">
          <button
            className={mode === "login" ? "active" : ""}
            onClick={() => {
              setMode("login");
              setMessage("");
            }}
          >
            Login
          </button>

          <button
            className={mode === "signup" ? "active" : ""}
            onClick={() => {
              setMode("signup");
              setMessage("");
            }}
          >
            Sign Up
          </button>
        </div>

        {/* LOGIN FORM */}
        {mode === "login" && (
          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
        )}

        {/* SIGNUP FORM */}
        {mode === "signup" && (
          <form onSubmit={handleSignup}>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Your full name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Choose a password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Your phone number..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <label>Car Model</label>
            <input
              type="text"
              placeholder="Your car model..."
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              required
            />

            <button className="login-btn" type="submit">
              Create Account
            </button>
          </form>
        )}

        {message && <p className="error-msg">{message}</p>}
      </div>

      <footer>
        <p>© 2025 DriveLab. All rights reserved.</p>
      </footer>
    </div>
  );
}
