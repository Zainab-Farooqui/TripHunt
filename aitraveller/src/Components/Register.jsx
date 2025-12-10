import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Register.css"; // Importing CSS

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelType: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "profileImage") {
      setForm({ ...form, profileImage: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !form.fullName ||
      !form.email ||
      !form.phone ||
      !form.country ||
      !form.travelType ||
      !form.password ||
      !form.confirmPassword
    ) {
      return setError("All fields are required!");
    }

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match!");
    }

    console.log("User Registered:", form);
    navigate("/login");
  };

  return (
    <div className="register-container">

      <div className="register-card">
        <h1 className="register-title">Travel With Us ✈️</h1>
        <h2 className="register-subtitle">Create Your Account</h2>

        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="register-input"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="register-input"
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            className="register-input"
            onChange={handleChange}
          />


          <select
            name="travelType"
            className="register-select"
            onChange={handleChange}
          >
            <option value="">Preferred Travel Type</option>
            <option value="Adventure">Adventure</option>
            <option value="Relaxation">Relaxation</option>
            <option value="Family Trip">Family Trip</option>
            <option value="Solo Trip">Solo Trip</option>
            <option value="Business Travel">Business Travel</option>
          </select>

          

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="register-input"
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="register-input"
            onChange={handleChange}
          />

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        <p className="register-footer">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
