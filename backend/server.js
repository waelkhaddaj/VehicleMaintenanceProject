//we first mport the packages we need
//we use express to create the backend API

//iwe use mysql2 to connect to the  database

//cors allows the froontend to talk to the backend

//dotenv loads    the db  info from the .env file

import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load the database info

const app = express();

// Basic middlewares
app.use(cors());          //aallows requests from frontend
app.use(express.json());  //this Let us read jsont sent woth requestss


//DB connection

//Here we create a pool of connections to MySQL;this helps the server handle many requests without crashing.

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
});


//this is to test DB

//Simple route to check if the database is working(i used it while connecting everyhting together because i faced some problems)
app.get("/test-db", (req, res) => {
  db.query("SELECT 1", (err, result) => {
    if (err)
      return res.status(500).json({ error: "DB test failed", details: err });

    res.json({ message: "Database connection works!", result });
  });
});


//sevices
//this is to return all services from the db.
app.get("/api/services", (req, res) => {
  db.query("SELECT * FROM services", (err, results) => {
    if (err)
      return res.status(500).json({ error: "Failed to fetch services" });

    res.json(results);
  });
});


//Register
//Registers a new user into the users table
app.post("/api/register", (req, res) => {
  const { name, email, password, phone, car_model } = req.body;

  //to make sure all fields are filledd
  if (!name || !email || !password || !phone || !car_model) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const sql =
    "INSERT INTO users (name, email, password, phone, car_model) VALUES (?, ?, ?, ?, ?)";

  db.query(sql, [name, email, password, phone, car_model], (err, result) => {
    if (err)
      return res.status(500).json({ error: "Registration failed", details: err });

    res.json({
      message: "User registered successfully",
      userId: result.insertId,
    });
  });
});


//Login
//Login using email and password and return user data if correct
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, results) => {
      if (err)
        return res.status(500).json({ error: "Login failed" });

      //If no user was found
      if (results.length === 0)
        return res.status(401).json({ message: "Invalid email or password" });


      res.json({
        message: "Login successful",
        user: {
          id: results[0].id,
          name: results[0].name,
          car_model: results[0].car_model,
        },
      });
    }
  );
});


//contact form
//Saves the message the user will send from the contact page into the messages table
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  const sql = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err, result) => {
    if (err)
      return res.status(500).json({ error: "Failed to submit message" });

    res.json({
      message: "Message sent successfully!",
      messageId: result.insertId,
    });
  });
});


//Book appointement

//Saves any new appointment request into the database
app.post("/api/book", (req, res) => {
  const { user_id, service_type, location, date } = req.body;

  //it make sure all fields were sent
  if (!user_id || !service_type || !location || !date) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const sql = `
    INSERT INTO appointments (user_id, service_type, location, date, status)
    VALUES (?, ?, ?, ?, 'pending')
  `;

  db.query(sql, [user_id, service_type, location, date], (err) => {
    if (err)
      return res.status(500).json({ error: "Database error", details: err });

    res.json({ message: "Appointment booked!" });
  });
});


//Gwet user appointements
//it returns all appointments for one specific user
app.get("/api/appointments", (req, res) => {
  const userId = req.query.user_id;

  const sql = `
    SELECT id, service_type, location, date, status
    FROM appointments
    WHERE user_id = ?
    ORDER BY date ASC
  `;

  db.query(sql, [userId], (err, results) => {
    if (err)
      return res.status(500).json({ error: "Database error" });

    res.json(results);
  });
});


//start the server
//Start the backend server on the port that heroku gives
const PORT = process.env.PORT || 3001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
