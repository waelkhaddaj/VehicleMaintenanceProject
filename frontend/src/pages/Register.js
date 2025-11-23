import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [carModel, setCarModel] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        phone: phone,
        car_model: carModel
      })
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message || "Registration successful!");
      })
      .catch((err) => {
        setMessage("Registration failed!");
        console.error(err);
      });
  };

  return (
    <div>
      <h1>Create Your Account</h1>

      <form onSubmit={handleRegister}>
        <input 
          type="text" 
          placeholder="Full Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required 
        /><br/>

        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        /><br/>

        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        /><br/>

        <input 
          type="text" 
          placeholder="Phone Number" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        /><br/>

        <input 
          type="text" 
          placeholder="Car Model" 
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
        /><br/>

        <button type="submit">Register</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
