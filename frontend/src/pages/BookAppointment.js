// src/pages/BookAppointment.js
import { useState } from "react";

export default function BookAppointment() {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const userId = localStorage.getItem("userId");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert("Please login first.");
      return;
    }

    const res = await fetch("http://localhost:3001/api/book", {
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
    <div style={{ padding: "40px", minHeight: "100vh", backgroundColor: "#111", color: "white" }}>
      <h1>Book Appointment</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <label>Service Type</label>
        <input value={service} onChange={(e) => setService(e.target.value)} required />

        <label>Location</label>
        <input value={location} onChange={(e) => setLocation(e.target.value)} required />

        <label>Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

        <button
          type="submit"
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#f8c22e",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          Book Now
        </button>
      </form>
    </div>
  );
}
