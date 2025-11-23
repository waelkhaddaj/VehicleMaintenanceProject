import Repairs from "./pages/Repairs";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import BookAppointment from "./pages/BookAppointment";
import MyAppointments from "./pages/MyAppointments";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/repairs" element={<Repairs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
      </Routes>
    </Router>
  );
}

export default App;
