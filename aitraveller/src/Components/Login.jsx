import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  // handle change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      return setError("All fields are required!");
    }
    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match!");
    }

    // Here you can call API
    console.log("Registering user:", form);

    // After successful registration
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center"
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')" }}>
      
      <div className="bg-white/80 backdrop-blur-md shadow-xl p-8 rounded-2xl w-96">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-700">
          Create Account ✈️
        </h2>

        {error && (
          <p className="text-red-600 text-sm mb-3">{error}</p>
        )}

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full mb-3 p-2 border rounded-lg"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full mb-3 p-2 border rounded-lg"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full mb-3 p-2 border rounded-lg"
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full mb-4 p-2 border rounded-lg"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Already have an account?
          <span
            className="text-blue-700 cursor-pointer font-semibold"
            onClick={() => navigate("/login")}
          >
            {" "}Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
