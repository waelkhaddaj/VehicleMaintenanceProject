// src/pages/MyAppointments.js
import { useEffect, useState } from "react";

export default function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    fetch(`http://localhost:3001/api/appointments?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Received:", data);
        setAppointments(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "40px", minHeight: "100vh", backgroundColor: "#111", color: "white" }}>
      <h1>My Appointments</h1>

      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <ul>
          {appointments.map((appt) => (
            <li key={appt.id} style={{ padding: "15px", borderBottom: "1px solid #444" }}>
              <strong>Service:</strong> {appt.service_type} <br />
              <strong>Location:</strong> {appt.location} <br />
              <strong>Date:</strong> {appt.date} <br />
              <strong>Status:</strong> {appt.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
