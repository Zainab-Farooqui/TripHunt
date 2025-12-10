import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Css/Register.css'
const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    travelType: "",
    password: "",
    confirmPassword: "",
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
    <div
      className="register-container min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
      }}
    >
      <div className="bg-white/80 backdrop-blur-lg shadow-xl p-8 rounded-2xl w-[420px]">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">
          Travel With Us ✈️
        </h1>

        <h2 className="text-xl font-semibold text-center mb-4">
          Create Your Account
        </h2>

        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

        <form className="RegisterForm"onSubmit={handleSubmit}>
          
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full p-2 border mb-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-2 border mb-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            className="w-full p-2 border mb-3 rounded-lg"
            onChange={handleChange}
          />

          <select
            name="country"
            className="w-full p-2 border rounded-lg mb-3"
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Dubai">Dubai</option>
            <option value="UK">United Kingdom</option>
            <option value="Australia">Australia</option>
          </select>

          <select
            name="travelType"
            className="w-full p-2 border rounded-lg mb-3"
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
            className="w-full p-2 border mb-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-2 border mb-3 rounded-lg"
            onChange={handleChange}
          />

          <div className="flex items-center mb-3">
            <input type="checkbox" className="mr-2" required />
            <p className="text-sm">I agree to the Terms and Privacy Policy</p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <span
            className="text-blue-700 cursor-pointer font-semibold"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
