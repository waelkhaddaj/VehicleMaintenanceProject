import { useState } from "react";
import "./BookAppointment.css";
import { API_URL } from "../config";

export default function BookAppointment() {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const userId = localStorage.getItem("userId");
  const heroBg = process.env.PUBLIC_URL + "/images/garage-team.jpg";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert("Please login first.");
      return;
    }

    const res = await fetch(`${API_URL}/api/book`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        service_type: service,
        location,
        date,
      }),
    });

    const data = await res.json();
    alert(data.message || "Appointment booked!");
  };

  return (
    <div className="book-page">

      <section
        className="book-hero"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0,0,0,0.5),
            rgba(0,0,0,0.7)
          ), url(${heroBg})`,
        }}
      >
        <h1>Book Your Appointment</h1>
        <p>Fast, simple, and hassle-free scheduling.</p>
      </section>

      <div className="book-container">
        <form onSubmit={handleSubmit}>
          <label>Service Type</label>
          <input value={service} onChange={(e) => setService(e.target.value)} required />

          <label>Location</label>
          <input value={location} onChange={(e) => setLocation(e.target.value)} required />

          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

          <button type="submit" className="book-btn">Book Now</button>
        </form>
      </div>

    </div>
  );
}
