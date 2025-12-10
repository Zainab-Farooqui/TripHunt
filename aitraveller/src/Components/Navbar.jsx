import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">TripHunt</Link>
      </div>

      {/* Middle Menu */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/history">Travel History</Link></li>
        <li><Link to="/favourite">Favourite</Link></li>
      </ul>

      {/* Profile dropdown */}
      <div className="profile-section">
        <div className="profile-icon" onClick={() => setOpen(!open)}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="profile"
          />
        </div>

        {open && (
          <div className="dropdown-menu">
            <Link to="/profile">My Profile</Link>
            <button onClick={() => alert("Logged out!")}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
