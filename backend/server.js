import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// DB connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// -------------------- TEST DB --------------------
app.get("/test-db", (req, res) => {
  db.query("SELECT 1", (err, result) => {
    if (err) return res.status(500).json({ error: "DB test failed", details: err });
    res.json({ message: "Database connection works!", result });
  });
});

// -------------------- SERVICES --------------------
app.get("/api/services", (req, res) => {
  db.query("SELECT * FROM services", (err, results) => {
    if (err) return res.status(500).json({ error: "Failed to fetch services" });
    res.json(results);
  });
});

// -------------------- REGISTER --------------------
app.post("/api/register", (req, res) => {
  const { name, email, password, phone, car_model } = req.body;
  const sql = "INSERT INTO users (name, email, password, phone, car_model) VALUES (?, ?, ?, ?, ?)";

  db.query(sql, [name, email, password, phone, car_model], (err, result) => {
    if (err) return res.status(500).json({ error: "Registration failed", details: err });
    res.json({ message: "User registered successfully", userId: result.insertId });
  });
});

// -------------------- LOGIN --------------------
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, results) => {
      if (err) return res.status(500).json({ error: "Login failed" });

      if (results.length === 0) return res.status(401).json({ message: "Invalid email or password" });

      res.json({
        message: "Login successful",
        user: {
          id: results[0].id,
          name: results[0].name,
          car_model: results[0].car_model
        }
      });
    }
  );
});

// -------------------- CONTACT FORM --------------------
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  const sql = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err, result) => {
    if (err) return res.status(500).json({ error: "Failed to submit message" });
    res.json({ message: "Message sent successfully!", messageId: result.insertId });
  });
});

// -------------------- BOOK APPOINTMENT (MATCHES YOUR DB) --------------------
app.post("/api/book", (req, res) => {
  const { user_id, service_type, location, date } = req.body;

  if (!user_id || !service_type || !location || !date) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const sql = `
    INSERT INTO appointments (user_id, service_type, location, date, status)
    VALUES (?, ?, ?, ?, 'pending')
  `;

  db.query(sql, [user_id, service_type, location, date], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error", details: err });
    res.json({ message: "Appointment booked!" });
  });
});

// -------------------- GET USER APPOINTMENTS --------------------
app.get("/api/appointments", (req, res) => {
  const userId = req.query.user_id;

  const sql = `
    SELECT id, service_type, location, date, status
    FROM appointments
    WHERE user_id = ?
    ORDER BY date ASC
  `;

  db.query(sql, [userId], (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(results);
  });
});

// -------------------- START SERVER --------------------
const PORT = process.env.PORT || 3001;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
