import React, { useState } from "react";
import Navbar from "../Components/navbar";
import "../Css/Home.css";

// Images
import bali from "../assets/images/Bali.jpeg";

const Home = () => {
  const [search, setSearch] = useState({
    source: "",
    destination: "",
  });

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching trips:", search);
    alert(`Searching trips from ${search.source} to ${search.destination}`);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Explore the World with Us</h1>
          <p>"Jobs fill your pocket, but adventures fill your soul."</p>

          {/* Source-Destination Search */}
          <form className="search-box" onSubmit={handleSearch}>
            <input
              type="text"
              name="source"
              placeholder="Source"
              value={search.source}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="destination"
              placeholder="Destination"
              value={search.destination}
              onChange={handleChange}
              required
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </section>

      {/* You May Also Like Section */}
      <section className="recommend-section">
        <h2>You May Also Like</h2>
        <div className="recommend-container">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="Maldives" />
            <h3>Maldives</h3>
            <p>Crystal clear beaches, luxury villas, and peaceful sunsets.</p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="Paris" />
            <h3>Paris</h3>
            <p>The city of love — Eiffel Tower, cafes, and timeless romance.</p>
          </div>
          <div className="card">
            <img src={bali} alt="Bali" />
            <h3>Bali</h3>
            <p>Nature, beaches, temples, and the perfect island escape.</p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1503264116251-35a269479413" alt="Switzerland" />
            <h3>Switzerland</h3>
            <p>Snowy mountains, scenic lakes, and breathtaking views.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-col">
            <h3>TripHunt</h3>
            <p>Your trusted partner for unforgettable journeys.</p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>Travel History</li>
              <li>Favourite</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Destinations</h4>
            <ul>
              <li>Maldives</li>
              <li>Paris</li>
              <li>Switzerland</li>
              <li>Bali</li>
              <li>Dubai</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <p>Email: support@triphunt.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Pune, India</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 TripHunt. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
